/* eslint-disable max-classes-per-file */

class User {
	constructor(id, name, sessionId) {
		this._id = id;
		this._name = name;
		this._sessionId = sessionId;
	}

	get name() {
		return this._name;
	}

	get id() {
		return this._id;
	}

	get sessionId() {
		return this._sessionId;
	}
}

class UserRepository {
	constructor(users) {
		this._users = Object.freeze(users);
	}

	get users() {
		return this._users;
	}

	getUserNames() {
		return this.users.map(({ name }) => name);
	}

	getUserIds() {
		return this.users.map(({ id }) => id);
	}

	getUserNameById(itm) {
		return this.users
			.filter(({ id }) => id === itm)
			.map(({ name }) => name)
			.join();
	}
}

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
const rep = new UserRepository([
	// { id: '1', name: 'Tom', sessionId: 'session-id' },
	// { id: '2', name: 'Bob', sessionId: 'session-id2' },
]);
console.log(rep);
