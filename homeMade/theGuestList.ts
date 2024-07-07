// List of 30 guests
const queue: string[] = [
	'Alice',
	'Bob',
	'Charlie',
	'David',
	'Eva',
	'Frank',
	'Grace',
	'Hannah',
	'Ian',
	'Jack',
	'Karen',
	'Liam',
	'Mia',
	'Noah',
	'Olivia',
	'Paul',
	'Quinn',
	'Rachel',
	'Sam',
	'Tina',
	'Uma',
	'Victor',
	'Wendy',
	'Xander',
	'Yara',
	'Zane',
	'Ava',
	'Ben',
	'Cara',
	'Dylan',
];

// List of 22 guests who are actually in the guest list
const guestList: string[] = [
	'Alice',
	'Bob',
	'Charlie',
	'David',
	'Eva',
	'Frank',
	'Grace',
	'Hannah',
	'Ian',
	'Jack',
	'Karen',
	'Liam',
	'Mia',
	'Noah',
	'Olivia',
	'Paul',
	'Rachel',
	'Sam',
	'Tina',
	'Uma',
	'Victor',
	'Wendy',
];

class App {
	public main() {
		queue.forEach((person) => {
			if (guestList.includes(person)) {
				console.log(`Hello ${person}, welcome to the party!`);
			} else {
				console.log(
					`I am sorry ${person}, you are unfortunately not on the guest list`
				);
			}
		});
	}
}

const app = new App();

app.main();
