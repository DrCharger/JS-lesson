import { renderTasks } from './render.js';
import { setItem, getItem } from './storage.js';

const listElem = document.querySelector('.list');

export const addNewTask = () => {
	const tasksListElem = getItem('tasksList') || [];
	const inputElem = document.querySelector('.task-input');
	if (inputElem.value === '') {
		return;
	}

	const b = tasksListElem.concat({
		text: inputElem.value,
		done: false,
		id: Math.random().toString(),
	});
	inputElem.value = '';
	listElem.innerHTML = '';

	setItem('tasksList', b);
	renderTasks();
};

const btnElem = document.querySelector('.create-task-btn');

btnElem.addEventListener('click', addNewTask);
