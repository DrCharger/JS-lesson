const date = (days) => {
	const dateLast = JSON.parse(
		JSON.stringify(new Date(new Date().setDate(new Date().getDate() - days))),
	);
	return `${dateLast}`;
};

const fetchRepoById = (days, userId, repoId) => {
	return fetch(
		`https://api.github.com/repos/${userId}/${repoId}/commits?&per_page=100`,
	).then((response) => response.json());
};

const findMostActive = (userData) => {
	const result = [];
	let maxCount = 0;
	const newArr = userData.map((elem) => elem.commit.author);
	return newArr
		.filter((el) => {
			if (result.includes(el.email)) {
				newArr.find((el2) => (el2.email === el.email ? el2.count++ : null));
			} else {
				el.count = 1;
				delete el.date;
				result.push(el.email);
				return el;
			}
		})
		.map((el) => {
			if (el.count >= maxCount) {
				maxCount = el.count;
			}
			return el;
		});
	// .filter((el) => el.count === maxCount);
};

const getMostActiveDevs = ({ days, userId, repoId }) => {
	return fetchRepoById(days, userId, repoId)
		.then((finded) => findMostActive(finded))
		.then((r) => console.log(r));
};

getMostActiveDevs({
	days: 7,
	userId: 'ratschlab',
	repoId: 'metagraph',
});
