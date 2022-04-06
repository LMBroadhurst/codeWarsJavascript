Sum of positive (8 Kyu)

function positiveSum(arr) {
  let total = 0
  for (let value of arr) {
    if (value > 0) {
      total += value
    }
  }
  return total
}
