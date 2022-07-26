export const user = {
	firstName: 'John',
	lastName: 'Doe',
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	setFullName(name) {
		return (
			(this.firstName = name.split(' ').slice(1).join()),
			(this.lastName = name.split(' ').slice(0, 1).join())
		);
	},
};

console.log(user.getFullName());
