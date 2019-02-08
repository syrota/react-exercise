// Exercise 1

// wrire a function that takes an array of integer numbers as argument and
// returns reordered array, where odds numbers comes before even numbers

export default function sort(arr) {
  const order = (a, b) => a - b;
  const odds = arr.filter(x => x % 2 === 0).sort(order);
  const evens = arr.filter(x => x % 2 !== 0).sort(order);
  return [...evens, ...odds];
  return;
}
