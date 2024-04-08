function sevenBoom(arr: number[]): string {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    const asString = String(element)
    for (let j = 0; j < asString.length; j++) {
      const number = asString[j]
      if (number === '7') {
        return 'Boom!'
      }
    }
  }

  return 'there is no 7 in the array'
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]) === 'Boom!')
console.log(sevenBoom([8, 6, 33, 100]) === 'there is no 7 in the array')
console.log(sevenBoom([2, 55, 60, 97, 86]) === 'Boom!')
