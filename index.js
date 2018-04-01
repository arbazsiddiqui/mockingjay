const Chance = require("chance");

const chance = new Chance();
const supportedChanceType = Object.keys(Object.getPrototypeOf(chance));

const checkValidity = (type) => {
	return supportedChanceType.includes(type)
};

const getValue = (type) => {
	if (checkValidity(type))
		return chance[type]();
	else
		return null;
};

const generateArray = (length, type) => {
	return new Array(length).fill(null).map((_, i) => {
		return getValue(type);
	});
};

module.exports = (type) => {
	if (Array.isArray(type)) {
		const chanceType = type[0];
		const numberOfData = type[1];
		return generateArray(numberOfData, chanceType);
	}
	return getValue(type);
};