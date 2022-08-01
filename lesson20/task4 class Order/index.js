class Order {
	constructor(price, city, type) {
		this.id = toString(Math.floor(Math.random() * 100));
		this.price = price;
		this.dateCreated = new Date();
		this.isConfirmed = false;
		this.dateConfirmed = '';
		this.city = city;
		this.type = type;
	}

	checkPrice() {
		if (this.price > 1000) {
			return true;
		}
		return false;
	}

	confirmOrder() {
		if (this.isConfirmed !== true) {
			this.isConfirmed = true;
		}
		this.dateConfirmed = new Date();
	}

	isValidType() {
		if (this.type === 'Buy' || this.type === 'Sell') {
			return true;
		}
		return false;
	}
}
