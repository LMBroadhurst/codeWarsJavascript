Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    const minInt = Math.min.apply(Math, args)
    return minInt
  }
}
