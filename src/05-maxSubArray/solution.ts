export function solution(nums: number[]): number {
    let bestSum = -Infinity;
    let currentSum = 0;
    for (const num of nums) {
        currentSum = Math.max(num, currentSum + num);
        bestSum = Math.max(bestSum, currentSum);
    }
    return bestSum;
}
