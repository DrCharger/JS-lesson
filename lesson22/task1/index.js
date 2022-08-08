const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_div');
const spanElem = document.querySelector('.rect_div');
const clearBtn = document.querySelector('.clear-btn');
const removeHand = document.querySelector('.remove-handlers-btn');
const attachHand = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
	const eventsListElem = document.querySelector('.events-list');

	eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'Div', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'Span', 'green');

const logGreySpan = logTarget.bind(null, 'Span', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreyDiv = logTarget.bind(null, 'Div', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, true);

spanElem.addEventListener('click', logGreenSpan);
pElem.addEventListener('click', logGreenP);
divElem.addEventListener('click', logGreenDiv);

const clear = () => {
	const eventsListElem = document.querySelector('.events-list');

	eventsListElem.innerHTML = ``;
};

clearBtn.addEventListener('click', clear);

const attach = () => {
	divElem.addEventListener('click', logGreyDiv, true);
	pElem.addEventListener('click', logGreyP, true);
	spanElem.addEventListener('click', logGreySpan, true);

	spanElem.addEventListener('click', logGreenSpan);
	pElem.addEventListener('click', logGreenP);
	divElem.addEventListener('click', logGreenDiv);
};

attachHand.addEventListener('click', attach);

const remove = () => {
	divElem.removeEventListener('click', logGreyDiv, true);
	pElem.removeEventListener('click', logGreyP, true);
	spanElem.removeEventListener('click', logGreySpan, true);

	spanElem.removeEventListener('click', logGreenSpan);
	pElem.removeEventListener('click', logGreenP);
	divElem.removeEventListener('click', logGreenDiv);
};

removeHand.addEventListener('click', remove);
