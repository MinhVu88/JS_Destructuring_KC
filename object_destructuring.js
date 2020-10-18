const person0 = {
    name_0: 'Maynard Keenan',
    age_0: 56,
    address_0: {city: 'Ravenna', state: 'Ohio'}
};

const person1 = {
    name_1: 'Adam Jones',
    age_1: 55,
    address_1: {city: 'Park Ridge', state: 'Illinois'}
};

const person2 = {
    name_2: "Paul D'Amour",
    age_2: 52,
    favItem: 'guitar',
    address_2: {city: 'Spokane', state: 'Washington'}
}

const person3 = {
    age_3: 58,
    address_3: {city: 'Lawrence', state: 'Kansas'}
}

const person4 = {
    name_4: 'Justin Chancellor',
    age_4: 48,
    address_4: {city: 'London', state: 'England'}
};

const{name_0, age_0} = person0;

console.log(name_0, age_0);

const{name_1: fullName_0, age_1} = person1;

console.log(fullName_0, age_1);

const{name_2, age_2, favItem = 'bass'} = person2;

console.log(name_2, age_2, favItem);

const{name_3: fullName_1 = 'Danny Carey', age_3} = person3;

console.log(fullName_1, age_3);

const{name_4: fullName_2, ...rest} = person4;

console.log(fullName_2, rest);

console.log('\n\t\t\t[ using destructuring with nested objects ]'.toUpperCase());

const{address_0: {city}} = person0;

console.log(`The city in which ${name_0} was born is ${city}`);

console.log('\n\t\t\t[ using destructuring to combine different objects ]'.toUpperCase());

const person5 = {
    name: 'Les Claypool',
    age: 56,
    address: {city: 'Richmond', state: 'California'}
};

const person6 = {
    name: 'Christopher John Boyle',
    age: 52,
    occupation: 'musician'
}

const combinedObjects = {...person5, ...person6};

console.log(combinedObjects);

console.log("\n\t\t\t[ using destructuring inside a function's parameter list ]".toUpperCase());

function printPerson_0({name, age}) {
    console.log(`Name: ${name} | Age: ${age}`);
};

printPerson_0(person5);

function printPerson_1({name = 'Chris Cornell', age, occupation}) {
    console.log(`Name: ${name} | Age: ${age} | Occupation: ${occupation}`);
};

printPerson_1(person6);