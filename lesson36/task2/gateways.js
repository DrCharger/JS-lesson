export const fetchUserData = async (userName) => {
	const response = await fetch(`https://api.github.com/users/${userName}`);

	if (response.ok) {
		return await response.json();
	}
	throw new Error('Failed to load data');
};

export const fetchRepo = async (repoURL) => {
	const response = await fetch(repoURL);
	if (response.ok) {
		return response.json();
	}
	throw new Error('Failed to load repo');
};
