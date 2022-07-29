export const bind = (fn, context, ...rest) =>
	function (...args) {
		return fn.apply(context, rest.concat(args));
	};
