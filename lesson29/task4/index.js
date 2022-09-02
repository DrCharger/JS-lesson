export const delay = (delay, callback, context, ...arg) => {
	const bound = callback.bind(context, ...arg);
	setTimeout(bound, delay);
};
