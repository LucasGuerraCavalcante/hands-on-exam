// 1. Write a program that prints the Fibonacci series up to a given number, e.g., 1 1 2 3 5 8 13 ... (1 point)

const printFibonacci = (givenNumber) => {
	let v1 = 1;
	let v2 = 2;
	let valorAtual;

	console.log(v1);

	for (let i = 1; i < givenNumber; i++) {
    console.log(v1);
	
    valorAtual = v1 + v2; // soma dos dois anteriores

    v1 = v2;
    v2 = valorAtual;
	}

	console.log('...');
}

printFibonacci(7)
