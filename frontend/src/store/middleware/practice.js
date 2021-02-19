//Currying

const logger = (state) => (next) => (action) => {
	console.log("STATE IS:", state);
	console.log("NEXT IS:", next);
	console.log("ACTION IS:", action);
	next(action);
};

export default logger;
