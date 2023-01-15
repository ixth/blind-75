export function solution(nums: number[]): boolean {
    const usedNums = new Set();
    for (const num of nums) {
        if (usedNums.has(num)) {
            return true;
        }
        usedNums.add(num);
    }
    return false;
};
