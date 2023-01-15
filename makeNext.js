#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

async function* glob(path, regExp) {
    for await (const entry of await fs.opendir(path)) {
        if (entry.isDirectory() && regExp.test(entry.name)) {
            yield entry;
        }
    }
}

async function getLastNumber(path) {
    let max = -1;
    for await (const entry of glob(path, /^(?:\d+)-/)) {
        max = Math.max(max, parseInt(entry.name, 10));
    }
    return max;
}

async function copyFiles(src, dest) {
    const dir = await fs.opendir(src);
    const copies = [];
    for await (const entry of dir) {
        if (entry.isFile()) {
            copies.push(
                fs.copyFile(
                    path.resolve(src, entry.name),
                    path.resolve(dest, entry.name),
                )
            );
        }
    }
    await Promise.all(copies);
}

async function makeNext() {
    const title = process.argv[2];
    if (title === undefined) {
        throw new Error('dir name expected');
    }
    const lastNumber = await getLastNumber('src');
    const number = `${lastNumber + 1}`.padStart(2, '0');
    const newTaskDir = path.join('src', `${number}-${title}`);

    await fs.mkdir(newTaskDir);
    await copyFiles('template', newTaskDir);
}

try {
    await makeNext();
} catch (e) {
    console.error(e);
}


