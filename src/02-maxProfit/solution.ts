export function solution(nums: number[]): number {
    let maxProfit = 0;
    let minPrice = nums[0];
    for (const price of nums) {
        if (price < minPrice) {
            minPrice = price;
        }
        if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
};
