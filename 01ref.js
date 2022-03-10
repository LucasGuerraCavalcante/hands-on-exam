// 1. Write a program that prints the Fibonacci series up to a given number, e.g., 1 1 2 3 5 8 13 ... (1 point)

const writeFibonacciSequence = (givenNumber) => {
	let oneValueBefore = 0;
	let currentValue = 1;
	let nextSequenceValue;

	for (i = 1; i < givenNumber; i++) {
    console.log(currentValue);
	
    nextSequenceValue = currentValue + oneValueBefore;

    oneValueBefore = currentValue;
    currentValue = nextSequenceValue;
	}

	console.log('...');
}

writeFibonacciSequence(7)
