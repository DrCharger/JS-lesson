const showBtn = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input');
const avatarElem = document.querySelector('.user__avatar');
const nameElem = document.querySelector('.user__name');
const locationElem = document.querySelector('.user__location');

const defaultImage =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnI9NSpTfvuPKr92wOd5WhOyQlt-MypFxjyK_pRtrAQ&s';

avatarElem.src = defaultImage;

const fetchUserData = (userName) => {
	return fetch(`https://api.github.com/users/${userName}`).then((value) =>
		value.json(),
	);
};

const renderUserData = (userData) => {
	// eslint-disable-next-line camelcase
	const { avatar_url, name, location } = userData;
	// eslint-disable-next-line camelcase
	avatarElem.src = avatar_url;
	nameElem.textContent = name;
	locationElem.textContent = location ? `from ${location}` : '';
};

const onSearchUser = () => {
	fetchUserData(inputElem.value).then((userData) => renderUserData(userData));
};

showBtn.addEventListener('click', onSearchUser);
