export function solution(a: number, b: number): number {
    while (a !== 0 && b !== 0) {
        [a, b] = [(a & b) << 1, a ^ b];
    }
    return a == 0 ? b : a;
}
