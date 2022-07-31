function maxProfit(prices: number[]): number {
    
    let ans = 0
    let j = 1
    let currentMin = prices[0]
    while(j < prices.length){
        ans = Math.max(ans, prices[j] - currentMin)
        currentMin = Math.min(prices[j], currentMin)
        j++
    }
        

    return ans
};