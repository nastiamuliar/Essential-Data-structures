const fruits = ['apple', 'pineapple', 'grape', 'peach'];
const animals = new Array('raccoon', 'bear', 'tiger', 'lion');
const flowers = new Array(1);
const fruitsCopy = fruits.slice();
const doubleFruits = fruits.concat(fruitsCopy);

flowers[0] = 'chamomile';
fruits.pop();
animals.shift();
flowers.push('lily of valley');
flowers.unshift('rose');

fruits.forEach((fruit) => console.log(fruit));

flowers.splice(2, 1);

console.log('Flowers:', flowers);
console.log('Fruits:');
console.log('Animals:', animals.map((animal) => animal.toUpperCase()));
console.log('Joined arrays ', doubleFruits);
console.log(
	'Ways to find element in array',
	flowers.indexOf('lily of valley'),
	doubleFruits.lastIndexOf('grape'),
	animals.includes('cat'),
	doubleFruits.find((fruit) => fruit[0] === 'a'),
	doubleFruits.findIndex((fruit) => fruit.includes('g')),
);
console.log('Filtered array', animals.filter((flower) => !flower.includes('io')));
console.log('Sort', flowers.sort((a, b) => a.localeCompare(b)));
console.log('Reverse', flowers.reverse());
console.log(animals.reduce((acc, animal) => acc + animal.length, 0));

