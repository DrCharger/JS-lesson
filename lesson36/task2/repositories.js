const listElem = document.querySelector('.repo-list');

export const renderRepo = (list) => {
	const reposListElem = list.map(({ name }) => {
		const repoElem = document.createElement('li');
		repoElem.classList.add('repo-list__item');
		repoElem.textContent = name;
		return repoElem;
	});
	clearRepo();
	listElem.append(...reposListElem);
};

export const clearRepo = () => (listElem.innerHTML = '');
