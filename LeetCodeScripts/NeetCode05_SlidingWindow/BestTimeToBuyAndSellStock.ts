/* 3. Best time to buy and sell stock */
function maxProfit(prices: number[]): number {
    if (prices.length == 0 || prices == null) return 0;
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, (prices[right] - prices[left])) 
            right++;
        }
        else {
            left = right;
            right++;
        }
    }
    return maxProfit;
}
