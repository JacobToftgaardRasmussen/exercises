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

function validateInput(input) {
  const arguments = input.split(' ')
  if (arguments.length !== 2) {
    throw new Error('Please input a product name and an amount separated by a space')
  }
  const product = arguments[0]
  if (!products.map(p => p.name).includes(product)) {
    throw new Error(`Sorry we don't have that. You asked for ${product}`)
  }
  const amount = Number(arguments[1])
  const productStatus = products.find(p => p.name === product)
  if (amount > productStatus.stock) {
    throw new Error(`Sorry we only have ${productStatus.stock} pieces of ${product}. You asked for ${amount}`)
  }
}

async function askForInput() {
  const answer = await input({ message: 'What product would you like?' })
  return answer
}

async function start() {
  printWelcomeMessage()
  showAvailableProducts()

  while (true) {
    const userInput = await askForInput()
    try {
      validateInput(userInput)
      const arguments = userInput.split(' ')
      const product = arguments[0]
      const amount = Number(arguments[1])
      const indexOfWantedProduct = products.findIndex(p => p.name === product)
      const newAmount = products[indexOfWantedProduct].stock - amount
      products[indexOfWantedProduct] = { ...products[indexOfWantedProduct], stock: newAmount }
    } catch (error) {
      console.log(error.message)
    }
    showAvailableProducts()
  }
}

start()
