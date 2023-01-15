export function solution(nums: number[]): number[] {
    const zeros = nums.filter((num) => num === 0).length;

    if (zeros > 1) {
        return nums.map(() => 0);
    }

    if (zeros === 1) {
        const totalProduct = nums
            .filter((num) => num !== 0)
            .reduce((total, num) => total * num);

        return nums.map((num) => num === 0 ? totalProduct : 0);
    }

    const totalProduct = nums.reduce((total, num) => total * num);
    return nums.map((num) => totalProduct / num);
};
