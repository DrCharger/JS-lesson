let message = `Just learn it`;
export function sendMessage(name) {
	console.log(`${name}, ${message}! Your Gromcode`);
}

sendMessage('Ann');

export function setMessage(text) {
	message = text;
}

setMessage('Good job');
sendMessage('Ann');
