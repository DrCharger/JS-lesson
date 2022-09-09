import { clearRepo, renderRepo } from './repositories.js';
import { fetchRepo, fetchUserData } from './gateways.js';
import { renderUserData } from './user.js';
import { hideSpinner, showSpinner } from './spinner.js';

const defaultImage =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnI9NSpTfvuPKr92wOd5WhOyQlt-MypFxjyK_pRtrAQ&s';

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
		.catch((err) => alert(err))
		.finally(() => hideSpinner());
};

showBtn.addEventListener('click', onSearchUser);
