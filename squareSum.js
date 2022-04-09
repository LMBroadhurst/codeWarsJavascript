Square(n) Sum

function squareSum(numbers) {
  let total = 0
  for (const number of numbers) {
    let value = number**2
    total += value
  } 
  return total
}
