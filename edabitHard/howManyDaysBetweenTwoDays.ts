function getDays(date1: Date, date2: Date): number {
	const date1AsEpoch = date1.getTime();
	const date2AsEpoch = date2.getTime();
	const timeDiff = date2AsEpoch - date1AsEpoch;
	const absTimeDiff = Math.abs(timeDiff);
	const days = absTimeDiff / 1000 / 60 / 60 / 24;
	return days;
}

console.log(getDays(new Date('June 14, 2019'), new Date('June 20, 2019')) === 6);
console.log(getDays(new Date('June 20, 2019'), new Date('June 14, 2019')) === 6);
console.log(getDays(new Date('December 29, 2018'), new Date('January 1, 2019')) === 3);
console.log(getDays(new Date('July 20, 2019'), new Date('July 30, 2019')) === 10);
