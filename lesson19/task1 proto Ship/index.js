const vehicle = {
	move() {
		console.log(`${this.name} is moving`);
	},
	stop() {
		console.log(`${this.name} stopped`);
	},
};
const ship = {
	name: 'Argo',
	startMachine() {
		console.log(`${this.name} lifting anchor up`), this.move();
	},
	stopMachine() {
		console.log(`${this.name} lifting anchor down`), this.stop();
	},
};

Object.setPrototypeOf(ship, vehicle);

function getOwnProps(obj) {
	const arr = [];
	for (const prop in obj) {
		if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
			arr.push(prop);
		}
	}
	return arr;
}

console.log(getOwnProps(ship));
