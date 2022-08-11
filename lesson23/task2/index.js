const generatorNum = (from, to) => {
	const result = [];
	for (let i = from; i <= to; i++) {
		result.push(i);
	}
	return result;
};

const generatorPrice = (from, to) => {
	const result = [];
	for (let i = from; i <= to; i += 10) {
		result.push(i);
	}
	return result;
};

// const getPrice = () => generatorPrice(50, 150).map((price) => price);

const getSectorSeats = () => {
	return generatorNum(1, 10)
		.map(
			(seatNumber) => `<div 
        class = 'sector__seat'
        data-seat-number = '${seatNumber}'
        ></div>`,
		)
		.join('');
};

const getSectorLines = () => {
	// const priceString = getPrice();
	const seatsString = getSectorSeats();
	return generatorNum(1, 10)
		.map(
			(lineNumber, i) => `<div 
                            class = 'sector__line'
                            data-line-number = '${lineNumber}'
                        
                            >${seatsString}</div>`,
		)
		.join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
	const linesString = getSectorLines();

	const sectorsString = generatorNum(1, 3)
		.map(
			(sectorNumber) => `<div 
                            class = 'sector'
                            data-sector-number = '${sectorNumber}'
                            >${linesString}</div>`,
		)
		.join('');
	arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = (event) => {
	const isSeat = event.target.classList.contains('sector__seat');

	if (!isSeat) {
		return;
	}
	const seatNum = event.target.dataset.seatNumber;
	const lineNum = event.target.closest('.sector__line').dataset.lineNumber;
	const sectorNum = event.target.closest('.sector').dataset.sectorNumber;
	// const priceNum = event.target.closest('.sector__line').dataset.price;

	const selectedArea = document.querySelector('.board__selected-seat');

	selectedArea.textContent = `S ${sectorNum} - L ${lineNum} - S ${seatNum}`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
