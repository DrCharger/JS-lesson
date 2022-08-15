const tasks = [
	{ text: 'Buy milk', done: false },
	{ text: 'Pick up Tom from airport', done: false },
	{ text: 'Visit party', done: false },
	{ text: 'Visit doctor', done: true },
	{ text: 'Buy meat', done: true },
];

const generatorNum = (from, to) => {
	const result = [];
	for (let i = from; i <= to; i++) {
		result.push(i);
	}
	return result;
};

let listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
	const idn = generatorNum(1, tasksList.length).map((price) => price);
	tasksList.map((elem, i) => (elem.id = idn[i]));
	const tasksElems = tasksList
		.sort((a, b) => a.done - b.done)
		.map(({ text, done, id }) => {
			const listItemElem = document.createElement('li');
			listItemElem.classList.add('list__item');
			const checkbox = document.createElement('input');
			checkbox.setAttribute('type', 'checkbox');
			checkbox.setAttribute('data-id', id);
			checkbox.checked = done;
			checkbox.classList.add('list__item-checkbox');
			if (done) {
				listItemElem.classList.add('list__item_done');
			}
			listItemElem.append(checkbox, text);

			return listItemElem;
		});

	listElem.append(...tasksElems);
};

renderTasks(tasks);

const btnElem = document.querySelector('.create-task-btn');

const killAllTasks = () => {
	listElem.remove();
	listElem = document.createElement('ul');
	listElem.classList.add('list');
	document.querySelector('.todo-list').append(listElem);
};
const checkbox = document.querySelectorAll(`.list__item-checkbox`);
const render = (tasksList, idNum) => {
	tasksList
		.filter((elem) => (elem.id === Number(idNum) ? elem : undefined))
		.map((elem) => {
			if (elem.done === false) {
				elem.done = true;
			} else if (elem.done === true) {
				elem.done = false;
			}
		});
	killAllTasks();
	renderTasks(tasks);
	const checkbox = document.querySelectorAll(`.list__item-checkbox`);
	checkbox.forEach((elem) => elem.addEventListener('change', getDone));
};

const getDone = (event) => {
	render(tasks, event.target.dataset.id);
};

const addNewTask = (tasksList) => {
	const inputElem = document.querySelector('.task-input');
	if (inputElem.value === '') {
		return;
	}
	const b = {};
	b.text = inputElem.value;
	b.done = false;
	b.id = 0;
	tasksList.push(b);
	inputElem.value = '';
	killAllTasks();

	renderTasks(tasks);
	const checkbox = document.querySelectorAll(`.list__item-checkbox`);
	checkbox.forEach((elem) => elem.addEventListener('change', getDone));
};

btnElem.addEventListener('click', () => addNewTask(tasks));

checkbox.forEach((elem) => elem.addEventListener('change', getDone));
