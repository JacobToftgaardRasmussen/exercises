const interestingWords: string[] = [
	'A',
	'Go',
	'Cat',
	'Tree',
	'Ocean',
	'Planet',
	'Journey',
	'Adventure',
	'Challenge',
	'Imagination',
	'Kaleidoscope',
	'Transformative',
	'Unbelievable',
	'Friendship',
	'Extraordinary',
	'Incredible',
	'Happiness',
	'Discover',
	'Mystery',
	'Wonder',
];

class App {
	public main() {
		interestingWords.forEach((word) => {
			const length = word.length;
			if (this.isEven(length)) {
				console.log(`${word} is even with length ${length}`);
			} else {
				console.log(`${word} is odd with length ${length}`);
			}
		});
	}

	isEven(number: number) {
		return number % 2 === 0;
	}
}

const app = new App();

app.main();
