import path from 'node:path';
import { describe, expect, it } from '@jest/globals';

import { DataSet, TestCase } from '../types';

import { solution } from './solution';
import dataSet from './dataset.json' assert { type: 'json' };


function runTest(dataSet: DataSet<typeof solution>) {
    describe(dataSet.title ?? path.basename(__dirname), () => {
        it.each(dataSet.testCases as TestCase<typeof solution>[])(
            dataSet.caseTitle ?? 'Case $#:\nInput:\n$args',
            ({ args, result }: TestCase<typeof solution>) => {
                expect(new Set(solution(...args))).toEqual(new Set(result));
            }
        );
    });
}

runTest(dataSet as DataSet<typeof solution>);
