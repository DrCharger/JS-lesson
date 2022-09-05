const getRandom = () => 1000 + Math.random() * 10000;

const request = (url) =>
	new Promise((resolve) => {
		const randomDelay = getRandom();
		setTimeout(() => {
			resolve({
				userData: {
					name: 'Tom',
					age: 17,
				},
				source: url,
			});
		}, randomDelay);
	});

const servers = [
	'https://server.com/Dimon',
	'https://server.com/Tom',
	'https://server.com/John',
	'https://server.com/Mishka',
];

const getUserASAP = (userId) => {
	const userUrls = servers.map((serv) => `${serv}/${userId}`);

	const requests = userUrls.map((userUrl) => request(userUrl));

	return Promise.race(requests);
};

getUserASAP('user-data-1').then((value) => console.log(value));
