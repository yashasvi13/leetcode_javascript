const maxProfit = (prices) => {
  let min = prices[0];
  let profit = 0;

  if (!prices || prices.length < 2) {
    return 0;
  }
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }
  return profit;
};

console.log(profit([3, 2, 6, 5, 0, 3]));

//Approach 2
// var maxProfit = function (prices) {
//   var min = Number.MAX_SAFE_INTEGER;
//   var max = 0;
//   for (var i = 0; i < prices.length; i++) {
//     min = Math.min(min, prices[i]);
//     max = Math.max(max, prices[i] - min);
//   }
//   return max;
// };

//Approach 3 => reduce
