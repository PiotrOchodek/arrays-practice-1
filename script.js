const numbers = ['111', '444', '333', '222', '777'];

// Task 1 - write the 4th element from the array to the variable
const shouldBe222 = numbers[3];

console.log(`Task 1: ${shouldBe222}`);

// Task 2 - Always save the first and last elements from the array, even if you will be adding elements to it

const firstElementOfNumbersArray = numbers[0];

const lastElementOfNumbersArray = numbers[numbers.length - 1];

console.log(`Task 2: ${firstElementOfNumbersArray}`);
console.log(`Task 2: ${lastElementOfNumbersArray}`);

// Task 3 -add '444' to end of the numbers array

const numbersWith444 = numbers.push('444');

console.log(`Task 3: ${numbers}`);

// Task 4 -add "72" to the beginning of the numbers array

const numbersWith72 = numbers.unshift('72');

console.log(`Task 4: ${numbers}`);

//-------------------------------------------------------------------

// Task 5 - multiply each element from the magicNumbers *2 and return new array with the multiplied result
const magicNumbers = [4, 6, 8, 10];
const newArray = magicNumbers.map(function (par) {
  return par * 2;
});

console.log(`Task 5: ${magicNumbers}`);
console.log(`Task 5 multiplied: ${newArray}`);

// Task 6 - make copies of the 'original' array, then add any two elements to the copied array
const original = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const modifiedOriginal = Array.from(original);
modifiedOriginal.unshift(1);
modifiedOriginal.push(11);

console.log(`Task 6: ${original}`);
console.log(`Task 6: ${modifiedOriginal}`);

// Task 7 - Return a new array containing only even numbers
const filterMe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19];
const onlyOddsNumbers = filterMe.filter(function (par) {
  return par % 2 === 0;
});

console.log(`Task 7: ${onlyOddsNumbers}`);

// Task 8 - sort from shortest to largest digit and return new sorted array
const unsorted = [10, 1, 6, 3, 7, 29, 14, 18];
const sorted = Array.from(unsorted).sort(function (a, b) {
  return a - b;
});

console.log(`Task 8: ${unsorted}`);
console.log(`Task 8 sorted: ${sorted}`);

const sliced = unsorted.slice(1, 5);

console.log(`Sliced: ${sliced}`);

/* Extra task: 
1. Log out all elements of the array:
- For loop
-  any version
2. Write a function that adds any number of arguments to arrays
3. Add the word Banana to the array and write a function that checks at which index the word Banana is under */

// 1
const fruits = ['banana', 'apple', 'mango', 'peach'];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Extra task: ${fruits[i]}`);
}

fruits.forEach(function (val) {
  console.log(`Ekstra task 2: ${val}`);
});

// 2
const results = [];

const addHowMuchAsIWant = (array, ...el) => {
  return array.push(el);
};

addHowMuchAsIWant(results, 'banana');
console.log(`Results: ${results}`);

const checkIndex = (array, el) => {
  return array.indexOf(el);
};

console.log(checkIndex(results, 'banana'));
// tu nie wiem czemu wyrzuca Mi -1 jakby elementu nie było
