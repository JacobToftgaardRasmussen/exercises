const { input } = require('@inquirer/prompts')

const products = [
  {
    name: 'hammer',
    stock: 7
  },
  {
    name: 'banana',
    stock: 12
  },
  {
    name: 'chocolate bars',
    stock: 4
  },
]

function printWelcomeMessage() {
  console.log('Welcome to the console shop!');
}

function printProduct(product) {
  const name = product.name.padEnd(20)
  const stock = `${product.stock}`.padStart(3)
  console.log(`${name} ${stock} `);
}

function showAvailableProducts() {
  console.log('These are the available products');
  console.log('--------------------------------');
  products.forEach(p => printProduct(p))
  console.log('--------------------------------');
}

function inputIsValid(input) {
  const arguments = input.split(' ')
  const product = arguments[0]
  const amount = Number(arguments[1])
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if (p.name === product && amount <= p.stock) {
      return true
    }
  }
  return false
}

async function askForInput() {
  const answer = await input({ message: 'What product would you like?' })
  try {
    if (inputIsValid(answer)) {
      return answer
    } else {
      console.log('Your input was not valid');
    }
  } catch (error) {
    console.log('An error happened because your input was not valid');
  }
}

async function start() {
  printWelcomeMessage()

  while (true) {
    showAvailableProducts()
    const answer = await askForInput()
    const arguments = answer.split(' ')
    const product = arguments[0]
    const amount = Number(arguments[1])
    const indexOfWantedProduct = products.findIndex(p => p.name === product)
    const newAmount = products[indexOfWantedProduct].stock - amount
    products[indexOfWantedProduct] = { ...products[indexOfWantedProduct], stock: newAmount }
    showAvailableProducts()
  }
}

start()
