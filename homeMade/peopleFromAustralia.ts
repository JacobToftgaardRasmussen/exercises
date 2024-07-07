import fs from 'fs';
import { parse } from 'csv-parse';

type Person = {
	Name: string;
	'Phone Number': string;
	'Country of Origin': string;
};

class App {
	filePath = './data/englishSpeakingPeople.csv';

	async main() {
		await this.streamAndParse();
	}

	async streamAndParse() {
		const parser = fs.createReadStream(this.filePath).pipe(
			parse({
				delimiter: ',',
				columns: true,
			})
		);
		for await (const row of parser) {
			const person = row as Person;
			if (person['Country of Origin'] === 'Australia') {
				console.log(`${person.Name} is from Australia`);
			}
		}
	}
}

const app = new App();
app.main();
