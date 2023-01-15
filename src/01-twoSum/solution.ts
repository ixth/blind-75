export function solution(nums: number[], target: number): [number, number] | never {
    const indicies = [];
    for (let i = 0; i < nums.length; i++) {
        const complementary = target - nums[i];
        if (complementary in indicies) {
            return [i, indicies[complementary]];
        }
        indicies[nums[i]] = i;
    }
    throw new Error('Bad input');
}
