export const delay = (num) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, num);
	});

delay(3000).then(() => console.log('Done'));
