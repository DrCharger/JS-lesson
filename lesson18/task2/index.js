const wallet = {
	trasactions: [2, 5, 6, 756, 757, 543, 24, 534, 1],
	getMax() {
		return Math.max.apply(null, this.trasactions);
	},
	getMin() {
		return Math.min(...this.trasactions);
	},
};

console.log(wallet.getMax());
console.log(wallet.getMin());
