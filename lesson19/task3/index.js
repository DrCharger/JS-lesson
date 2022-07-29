function User(name, age) {
	this.name = name;
	this.age = age;
}

User.prototype.sayHi = function () {
	console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
	console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (age) {
	if (age < 0) {
		return false;
	}
	if (age >= 25) {
		this.age = age;
		return console.log(`New photo request was sent for ${this.name}`);
	}
	if (age > 0) {
		return (this.age = age);
	}
};
