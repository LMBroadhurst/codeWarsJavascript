Basic Mathematical Operations

function basicOp(operation, value1, value2)
{
  let output = null
  if (operation == "+") {
    output = value1 + value2
  } else if (operation == "-") {
    output = value1 - value2
  } else if (operation == "*") {
    output = value1 * value2
  } else if (operation == "/") {
    output = value1 / value2
  }
  return output
}

// Work out what operation we are performing
// Perform the operation on the two values
// Return the answer
