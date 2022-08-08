const a = document.querySelectorAll('.btn');

const handleClick = (event) => {
	console.log(event.target.textContent);
};
a.forEach((elem) => {
	elem.addEventListener('click', handleClick);
});
