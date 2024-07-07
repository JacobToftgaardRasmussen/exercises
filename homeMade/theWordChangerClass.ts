class TheWordChanger {
	reverseWord(word: string): string {
		let result = '';
		for (let i = word.length - 1; i >= 0; i--) {
			const currentLetter = word[i];
			result += currentLetter;
		}
		return result;
	}

	swapEWithO(word: string): string {
		let result = word;
		result = result.replace('e', 'o');
		result = result.replace('E', 'O');
		return result;
	}
}

class App {
	public main() {
		const wordChanger = new TheWordChanger();
		const reversed = wordChanger.reverseWord('HelloWorld');
		const swapped = wordChanger.swapEWithO('Hello Mount Everest');

		console.log(reversed);
		console.log(swapped);
	}
}

const app = new App();

app.main();
