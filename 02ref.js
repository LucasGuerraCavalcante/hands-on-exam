// 2. Write a sorting algorithm to organize an array of numbers in a decreasing order. (1 point)

const invertedBubbleSort = (array) => {
	for (i = 0; i < array.length; i++) {
		for (j = 0; j < array.length; j++) {
			
			if (array[j] < array[j + 1]) {
				let currentValue = array[j];

				// trocando os valores
				array[j] = array[j + 1];
				array[j + 1] = currentValue; 
			}
		}
	}

	return array;
};

console.log(invertedBubbleSort([2, 5, 2, 9]));
console.log(invertedBubbleSort([4, 7, 8, 2, 0, -5, 9]));
console.log(invertedBubbleSort([243, 45, 23, 356, 3, 5346, 35, 5]));
