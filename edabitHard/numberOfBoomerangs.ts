function areTheyABoomerang(a: number, b: number, c: number) {
  if (a !== c) return false
  if (a === b) return false
  return true
}

function countBoomerangs(arr: number[]): number {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i]
    const nextElement = arr[i + 1]
    const secondNextElement = arr[i + 2]
    if (secondNextElement === undefined) {
      break
    }
    if (areTheyABoomerang(currentElement, nextElement, secondNextElement)) {
      counter++
    }
  }
  return counter
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]) === 2)
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]) === 1)
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]) === 0)
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]) === 5)
// console.log(areTheyABoomerang(9, 1, 9))
// console.log(areTheyABoomerang(8, 1, 9))
// console.log(areTheyABoomerang(1, 1, 9))
// console.log(areTheyABoomerang(1, 1, 1))
