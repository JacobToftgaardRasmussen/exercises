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

async function askForInput() {
  const answer = await input({ message: 'What product would you like?' })
  console.log('You asked for', answer);
}

async function start() {
  printWelcomeMessage()
  showAvailableProducts()
  await askForInput()
}

start()
