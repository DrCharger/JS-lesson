const btn = document.querySelector('.single-use-btn');

const single = () => {
	console.log('clicked');
	btn.removeEventListener('click', single);
};

btn.addEventListener('click', single);
