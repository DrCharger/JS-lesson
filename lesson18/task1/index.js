export const event = {
	guests: [
		{
			name: 'John',
			age: 18,
			email: 'example@server.com',
		},
		{
			name: 'Bob',
			age: 17,
			email: 'exam@server.com',
		},
	],
	message: 'Welcome to the party!',
	getInvitations() {
		return this.guests
			.filter(({ age }) => age >= 18)
			.map(({ name, email }) => ({
				email,
				message: `Dear ${name}! ${this.message}`,
			}));
	},
};
console.log(event.getInvitations());
