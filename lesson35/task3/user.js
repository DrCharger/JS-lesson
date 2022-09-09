const avatarElem = document.querySelector('.user__avatar');
const nameElem = document.querySelector('.user__name');
const locationElem = document.querySelector('.user__location');

export const renderUserData = (userData) => {
	// eslint-disable-next-line camelcase
	const { avatar_url, name, location } = userData;
	// eslint-disable-next-line camelcase
	avatarElem.src = avatar_url;
	nameElem.textContent = name;
	locationElem.textContent = location ? `from ${location}` : '';
};
