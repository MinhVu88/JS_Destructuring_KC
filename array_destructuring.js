const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log('\n\t\t\t[ without using destructuring with arrays ]'.toUpperCase());

console.log("\nPrint'A' & 'B' in the letters array:", letters[0], letters[1]);

console.log('\n\t\t\t[ using destructuring with arrays ]'.toUpperCase());

const[a_0, b_0] = letters;

console.log("\nPrint'A' & 'B' in letters:", a_0, b_0);

console.log('\n-----------------------------------------------------------------------');

const[a_1, b_1, c_0] = letters;

console.log("\nPrint'A', 'B' & 'C' in letters:", a_1, b_1, c_0);

console.log('\n-----------------------------------------------------------------------');

const[a_2, , , d_0] = letters;

console.log("\nPrint'A' & 'D', skip 'B' & 'C' in letters:", a_2, d_0);

console.log('\n-----------------------------------------------------------------------');

const[a_3, , , d_1, ...rest] = letters;

console.log("\nPrint'A', 'D' & the rest in letters, skip 'B' & 'C':\n", a_3, d_1, rest);

console.log('\n-----------------------------------------------------------------------');

const combinedArrays = [...letters, ...numbers];

console.log('\ncombine the letters & numbers arrays:\n', combinedArrays);

console.log('\n-----------------------------------------------------------------------');

console.log('\n\t\t\t[ using destructuring with functions ]'.toUpperCase());

function arithmetic_0(a, b) {return [a + b, a - b]};

console.log(arithmetic_0(13, 7));

console.log('\n*********************************');

const[addition_0, subtraction_0] = arithmetic_0(23, 51);

console.log(addition_0, subtraction_0);

console.log('\n*********************************');

const[addition_1, subtraction_1, multiplication_0 = 'no multiplication'] = arithmetic_0(3, 18);

console.log(addition_1, subtraction_1, multiplication_0);

console.log('\n*********************************');

function arithmetic_1(a, b) {return [a + b, a - b, a * b]};

const[addition_2, subtraction_2, multiplication_1 = 'none'] = arithmetic_1(6, 9);

console.log(addition_2, subtraction_2, multiplication_1);