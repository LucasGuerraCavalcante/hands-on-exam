// 3. Given the array below, write a program to group the consultants by company. (1 point)
 
let consultants = [
  { name: 'Peyton Turner', company: 'Walker Inc' },
  { name: 'Isaias Fritsch', company: 'Walker Inc' },
  { name: 'Susana Wilderman', company: 'Nolan Inc' }
];

const groupByKey = (objectArray, key) => {
	const initialValue = {};

	const objectGroupedByKey = objectArray
		.reduce((previousValue, currentValue) => {
			return Object.assign(
				previousValue,
				{ [currentValue[key]]: (previousValue[currentValue[key]] || []).concat(currentValue) }
			)
		}, initialValue);

	return objectGroupedByKey;
};

const groupedByCompany = groupByKey(consultants, 'company');

console.log(groupedByCompany);
