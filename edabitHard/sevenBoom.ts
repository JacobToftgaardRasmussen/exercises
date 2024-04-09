function sevenBoom(arr: number[]): string {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    const asString = String(element)
    for (let j = 0; j < asString.length; j++) {
      const digit = asString[j]
      if (digit === '7') {
        return 'Boom!'
      }
    }
  }
  return 'there is no 7 in the array'
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]) === 'Boom!')
// 7 contains the number seven.
console.log(sevenBoom([8, 6, 33, 100]) === 'there is no 7 in the array')
// None of the items contain 7 within them.
console.log(sevenBoom([2, 55, 60, 97, 86]) === 'Boom!')
// 97 contains the number seven.
