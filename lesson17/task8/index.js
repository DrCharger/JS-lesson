export const timer = {
	secondsPassed: 0,
	minsPassed: 0,
	nIntervID: undefined,
	startTimer() {
		const a = () => {
			this.secondsPassed++;
			if (this.secondsPassed === 60) {
				this.minsPassed++;
				this.secondsPassed = 0;
			}
		};
		this.nIntervID = setInterval(a, 1000);
	},
	getTime() {
		if (this.secondsPassed < 10) {
			this.secondsPassed = '0' + String(this.secondsPassed);
		}
		return `${this.minsPassed}:${this.secondsPassed}`;
	},
	stopTimer() {
		clearInterval(this.nIntervID);
	},
	resetTimer() {
		clearInterval(this.nIntervID);
		this.secondsPassed = 0;
		this.minsPassed = 0;
		this.nIntervID = undefined;
	},
};

timer.startTimer();
timer.getTime();
