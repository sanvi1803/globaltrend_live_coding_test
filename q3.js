function knapsack(weights, values, capacity) {
    let n = weights.length;
    const dp = new Array(n + 1).fill(null).map(() => new Array(capacity + 1).fill(0));

    for (let i = 1; i <=n; i++) {
        for(let w = 1;w <= capacity;w++){
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i -1][w],dp[i -1][w - weights[i -1]] + values[i -1]);

            }
            else{
                dp[i][w] = dp[i - 1][w];
            }
        }
        
    }
    return dp[n][capacity]
}

const weights = [1,2,3];
const values = [10,15,40];
const capacity = 6;
const maxValue = knapsack(weights,values,capacity);
console.log(maxValue);
