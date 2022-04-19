// Beginner Series #2 Clock


function past(h, m, s){
//   1 second = 1000 ms
//   1 minute = 60,000ms
//   1 hour = 3,600,000ms
  
  output = (s * 1000) + (m * 60000) + (h * 3600000)
  
  return output
}
