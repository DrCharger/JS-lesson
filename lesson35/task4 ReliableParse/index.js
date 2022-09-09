export const parseUser = (stringUser) => {
	try {
		return JSON.parse(stringUser);
	} catch (err) {
		return null;
	}
};

parseUser({ name: 'Atomics' });
