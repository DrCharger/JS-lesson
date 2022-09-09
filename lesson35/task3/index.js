import { clearRepo, renderRepo } from './repositories.js';
import { fetchRepo, fetchUserData } from './gateways.js';
import { renderUserData } from './user.js';
import { hideSpinner, showSpinner } from './spinner.js';

const defaultImage = 'https://avatars3.githubusercontent.com/u10001.png';

const defaultUser = {
	avatar_url: defaultImage,
	name: '',
	location: '',
};

renderUserData(defaultUser);

const showBtn = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
	clearRepo();
	showSpinner();
	fetchUserData(inputElem.value)
		.then((userData) => {
			renderUserData(userData);
			return userData.repos_url;
		})
		.then((url) => fetchRepo(url))
		.then((repoList) => renderRepo(repoList))
		.catch((err) => alert(err.message))
		.finally(() => hideSpinner());
};

showBtn.addEventListener('click', onSearchUser);
