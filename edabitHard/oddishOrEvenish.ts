function getSumOfDigits(num: number): number {
  let sum = 0
  const asString = String(num)
  const asArray = asString.split('')
  asArray.forEach((digit) => {
    sum += Number(digit)
  })

  return sum
}

function oddishOrEvenish(num: number): string {
  const sum = getSumOfDigits(num)
  if (sum % 2 === 0) {
    return 'Evenish'
  } else {
    return 'Oddish'
  }
}

console.log(oddishOrEvenish(43) === 'Oddish')
console.log(oddishOrEvenish(373) === 'Oddish')
console.log(oddishOrEvenish(4433) === 'Evenish')
