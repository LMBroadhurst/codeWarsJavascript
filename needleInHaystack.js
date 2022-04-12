A Needle in the Haystack

function findNeedle(haystack) {
  let indexOfNeedle = haystack.findIndex(value => value === "needle")
  return `found the needle at position ${indexOfNeedle}`
}
