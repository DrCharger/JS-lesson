function withdraw(clients, balances, client, balance) {
	let newIndex = 0;
	for (let index = 0; index < clients.length; index++) {
		if (clients[index] === client) {
			newIndex = index;
		}
	}
	const newBalances = balances.slice();
	if (balances[newIndex] >= balance) {
		newBalances[newIndex] -= balance;
		console.log(newBalances);
		return newBalances[newIndex];
	}
	console.log(newBalances);
	return -1;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
