import { renderTasks } from './render.js';
import { getItem } from './storage.js';
import { addNewTask } from './newTask.js';
import { change } from './changer.js';

document.addEventListener('DOMContentLoaded', () => {
	renderTasks();
});

const onStorageChange = (e) => {
	if (e.key !== 'tasksList') {
		return;
	}

	renderTasks();
};

window.addEventListener('storage', onStorageChange);
