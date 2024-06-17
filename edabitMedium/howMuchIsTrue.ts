function countTrue(values: boolean[]): number {
  let counter = 0
  values.forEach((value) => {
    if (value === true) {
      counter++
    }
  })

  return counter
}

console.log(countTrue([true, false, false, true, false]) === 2)
console.log(countTrue([false, false, false, false]) === 0)
console.log(countTrue([]) === 0)
