Abbreviate a Two Word Name

function abbrevName(name){

    let [word1, word2] = name.split(" ")
    
    let output = word1.charAt(0).toUpperCase() + "." + word2.charAt(0).toUpperCase()

    return output
}

// Differentiate the first and second word
// Split into two arrays?
// Grab the first letters from the words
// For loop that grabs the first letters of each word?
