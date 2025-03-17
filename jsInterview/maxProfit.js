// input : [7, 1, 5, 3, 6, 4];
// output: 5
// Exaplanation: Buy on day 2(price == 1) sell on day 5(price == 6) 6 - 1 = 5
// conditions:
// you must buy before you sell
// profit is calculated as sell price - buy price
// smallest number must come before the larget number if you were to make profit

// First Approach we could use the brute force approach where we compair every single possible
// pair of buy and sell and keep track of the max profit.
// we will use the nested loop. 
// Time complexity will be O(n^2) not very efficient if the input size grows.


function approach1(stock) {
    let maxProfit = 0;
    for (let i = 0; i < stock.length; i++) {
        for (let j = i + 1; j < stock.length; j++){
            let profit = stock[j] - stock[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

function approach2(stock) {
    //assume the first day is the cheapest day to buy
    let min_price = stock[0];
    let max_profit = 0;

    for (let i = 1; i < stock.length; i++) {
        let price_today = stock[i];

        if (min_price < price_today) {
            min_price = price_today;
        }
        let profit = price_today - min_price;
        if (profit > max_profit) {
            max_profit = profit;
        }
    }
    return max_profit;
}

const ans = approach1([7, 1, 5, 3, 6, 4]);
console.log("Approach 1", ans);

const answer = approach2([7, 1, 5, 3, 6, 4]);
console.log("Approach 2", answer);