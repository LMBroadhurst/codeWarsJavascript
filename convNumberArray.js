Convert number to reversed array

function digitize(n) {
  
  let array = Array.from(String(n), Number)
  
  let output = array.reverse()
  
  return output
}

// Split given number into an array (if applicable)
// Reverse the numbers in the array
