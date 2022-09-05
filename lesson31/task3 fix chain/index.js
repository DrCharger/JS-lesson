const successPromise = new Promise((resolve) => {
	resolve(32);
});

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
	.then((number) => number / 2)
	.then((number) => number * number)
	.then((result) => console.log(result)); // 256

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
	.then((number) => number * 10)
	.then((result) => {
		console.log(result); // 320
	});

console.log(
	'!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);
