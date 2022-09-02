const requestUserData = (userId, callback) => {
	function delay() {
		const min = Math.ceil(1);
		const max = Math.floor(4);
		return (Math.floor(Math.random() * (max - min)) + min) * 1000;
	}
	if (userId === 'broken') {
		return callback(null, 'Failed to load user data');
	}
	const obj = { userId, email: userId.concat('@example.com') };
	setTimeout(() => callback(obj), delay());
};

function newFunc(obj, error) {
	if (obj === null) {
		console.log(error);
		return;
	}
	console.log(obj);
}

requestUserData('userid777', newFunc);
requestUserData('broken', newFunc);
