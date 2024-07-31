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
    name: 'chocolate_bar',
    stock: 4
  },
]

function printWelcomeMessage() {
  console.log('Welcome to the console shop!');
  console.log('You can exit the shop by inputting "quit" or "q"');
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
  if (arguments[0] === 'quit' || arguments[0] === 'q') {
    exitShop()
  }
  if (arguments.length !== 2) {
    throw new Error(`Please input a product name and an amount separated by a space. Your input was: ${input}`)
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
  return { product, amount }
}

function exitShop() {
  console.log('Bye bye');
  process.exit()
}

function updateStock(product, amount) {
  const indexOfWantedProduct = products.findIndex(p => p.name === product)
  const newAmount = products[indexOfWantedProduct].stock - amount
  products[indexOfWantedProduct] = { ...products[indexOfWantedProduct], stock: newAmount }
}

async function askForInput() {
  const answer = await input({ message: 'What product would you like?' })
  return answer
}

function handleSuccessfulPurchase(product, amount) {
  updateStock(product, amount)
  console.clear()
  console.log('Thank you for your purchase. Would you like to make another purchase?');
}

function handleFailedPurchase(error) {
  console.clear()
  console.log(error.message)
}

async function mainLoop() {
  while (true) {
    const userInput = await askForInput()
    try {
      const { product, amount } = validateInput(userInput)
      handleSuccessfulPurchase(product, amount)
    } catch (error) {
      handleFailedPurchase(error)
    }
    showAvailableProducts()
  }
}

async function start() {
  printWelcomeMessage()
  showAvailableProducts()
  mainLoop()
}

start()
