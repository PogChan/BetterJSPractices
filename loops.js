const orders = [500, 30, 99, 15, 223];

//instead of a classic "orders.length" for loop use this:

/**
 * Input is acc and cur
 * acc = the return result and the total number
 * cur = current value that will be added to the sum
 */
const total = orders.reduce((acc, cur) => acc + cur);

//add tax to each value
const withTax = orders.map((v) => v * 1.1);

//Filter and add only the values greater than 100
const highValue = withTax.filter((v) => v > 100);

function orderLog(str, total, withTax, highValue) {
  return `${str[0]} $${total}. ${str[1]} ${withTax} ${str[2]} ${highValue}`;
}

const final = orderLog`The total amount is${total}Here is all the values with a 10% state tax added to it:${withTax}These are the highest spendings this quarter:${highValue}`;
console.log(final);
