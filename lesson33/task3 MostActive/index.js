const date = (days) => {
	return new Date(new Date().setDate(new Date().getDate() - days));
};

const fetchRepoById = (userId, repoId) => {
	return fetch(
		`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`,
	).then((response) => response.json());
};

const findMostActive = (userData) => {
	const result = [];
	userData.map((el) => {
		const objElem = result.find((elem) => elem.email === el.email);
		if (objElem === undefined) {
			const newObj = {
				email: el.email,
				name: el.name,
				count: 1,
			};
			result.push(newObj);
		} else {
			++objElem.count;
		}
		return el;
	});
	return result
		.sort((a, b) => b.count - a.count)
		.filter((elem) => elem.count === result[0].count);
};

const getMostActiveDevs = ({ days, userId, repoId }) => {
	return fetchRepoById(userId, repoId)
		.then((userData) => userData.map((elem) => elem.commit.author))
		.then((response) =>
			response.filter((elem) => new Date(elem.date) >= date(days)),
		)
		.then((response) => findMostActive(response))
		.then((r) => console.log(r));
};

getMostActiveDevs({
	days: 7,
	userId: 'facebook',
	repoId: 'CacheLib',
});
