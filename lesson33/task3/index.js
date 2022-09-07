// const defaultUrl =
// 	'https://api.github.com/repos/USERID/REPOID/commits?per_page=100';
const date = (days) => {
	const dateLast = JSON.parse(
		JSON.stringify(new Date(new Date().setDate(new Date().getDate() - days))),
	);
	const dateNow = JSON.parse(JSON.stringify(new Date()));
	const newUrl = `${dateLast}..${dateNow}`;
	return newUrl;
};

const fetchUserData = (days) => {
	return fetch(
		`https://api.github.com/search/commits?q=committer-date:${date(
			days,
		)}&per_page=100&sort`,
	).then((value) => value.json());
};
const foo = (userData) => {
	const result = [];
	let maxCount = 0;
	const newArr = userData.map((elem) => elem.commit.author);
	return newArr
		.filter((el) => {
			if (result.includes(el.email)) {
				newArr.find((el2) => (el2.email === el.email ? el2.count++ : null));
			}
			el.count = 1;
			delete el.date;
			result.push(el.email);
			return el;
		})
		.map((el) => {
			if (el.count >= maxCount) {
				maxCount = el.count;
			}
			return el;
		})
		.filter((el) => el.count === maxCount);
};

const getMostActiveDevs = ({ days, userId, repoId }) => {
	fetchUserData(days)
		.then((finded) => foo(finded.items))
		.then((result) => console.log(result));
};

getMostActiveDevs({ days: 5, userId: 'user-16', repoId: 'repo-1' });
