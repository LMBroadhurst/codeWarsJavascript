Returning Strings

function greet(name){
  let string = "Hello, <name> how are you doing today?"
  string = string.replace("<name>", name)
  return string
}

// Create the return statement with <name>
// Replace the <name> with the actual name value
// Return the new string
