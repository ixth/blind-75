export function solution(nums: number[]): number {
    let bestProduct = -Infinity;
    let currentProduct= 1;
    for (const num of nums) {
        currentProduct = Math.max(num, currentProduct * num);
        bestProduct = Math.max(bestProduct, currentProduct);
    }
    return bestProduct;
}
