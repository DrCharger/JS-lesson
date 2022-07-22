const getPeople = (obj) =>
	Object.values(obj)
		.flat()
		.map((name) => Object.values(name))
		.flat();

const rooms = {
	room1: [
		{ name: 'Jack' },
		{ name: 'Andrey' },
		{ name: 'Ann' },
		{ name: 'Vasyl' },
	],
	room2: [{ name: 'Dan' }, { name: 'Bob' }],
	room3: [{ name: 'Denis' }, { name: 'MAx' }, { name: 'Alex' }],
};
console.log(getPeople(rooms));
