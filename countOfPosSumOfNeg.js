// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  negative_sum = 0
  positive_count = 0
  
  if (input == 0 || input == null) {
    return []
  } else {
    for (i = 0; i < input.length; i++) {
      if (input[i] < 0) {
        negative_sum += input[i]
      } else if (input[i] > 0) {
        positive_count += 1
      } else {
        continue;
      }
    }
    return [positive_count, negative_sum]
  }

}
