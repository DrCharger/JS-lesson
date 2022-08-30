import { renderTasks } from './render.js';
import { setItem, getItem } from './storage.js';

const listElem = document.querySelector('.list');

export const change = (event) => {
	const isCheckbox = event.target.classList.contains('list__item-checkbox');

	if (!isCheckbox) {
		return;
	}
	const a = getItem('tasksList');
	const newTaskList = a.map((task) => {
		if (task.id === event.target.dataset.id) {
			const done = event.target.checked;
			return {
				...task,
				done,
			};
		}
		return task;
	});

	setItem('tasksList', newTaskList);

	listElem.innerHTML = '';
	renderTasks();
};

listElem.addEventListener('click', change);
