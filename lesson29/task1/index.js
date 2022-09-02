export const addImage = (imgSrc, callback) => {
	const imageElem = document.createElement('img');
	imageElem.setAttribute('alt', 'My Photo');
	imageElem.src = imgSrc;
	const container = document.querySelector('.page');
	container.append(imageElem);
	const onImageLoaded = () => {
		const { width, height } = imageElem;
		callback(null, { width, height });
	};
	imageElem.addEventListener('load', onImageLoaded);
	imageElem.addEventListener('error', () => callback('Image load is failed'));
};

// callack function
const onImageLoaded = (error, imgElem) => {
	if (error) {
		console.log(error);
		return;
	}

	const { width, height } = imgElem;
	const sizeElem = document.querySelector('.image-size');

	sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
	'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
	onImageLoaded,
);
