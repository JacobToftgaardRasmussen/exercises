class Calculator {
	plus(num1: number, num2: number) {
		return num1 + num2;
	}
}

class App {
	main() {
		const myCalculator = new Calculator();
		myCalculator.plus(40, 2);
	}
}

const app = new App();
app.main();
