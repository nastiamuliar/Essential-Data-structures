const clothes = {
	dress: { size: 'XXS', color: 'red' },
	jeans: { size: 'S', color: 'gray' },
	blouse: { size: 'XS', color: 'white' },
	skirt: { size: 'XS', color: 'dark blue' },
	coat: { size: 'S', color: 'camel' },
	jacket: { size: 'M', color: 'black' },
	shirt: { size: 'L', color: 'blue' },
};

for (key in clothes) {
	console.log(key, clothes[key]);
}

const jewelry = new Object();
jewelry.bracelet = { metal: 'silver' };
jewelry.ring = { metal: 'gold' };
jewelry.earrings = { metal: 'gold' };
jewelry.brooch = { metal: 'platinum' };


console.log(jewelry.earrings.metal);
console.log(jewelry['ring']);
console.log('bracelet' in jewelry);
delete jewelry.brooch;


const myLook = new Map();

myLook.set(clothes.dress, clothes.dress);
myLook.set(clothes.dress, clothes.dress);
myLook.set(clothes.coat, clothes.coat);
myLook.set('coat', clothes.coat);
myLook.set(jewelry.ring, jewelry.ring);
console.log(myLook, myLook.size);
myLook.get(clothes.dress);
myLook.has(clothes.coat);
myLook.delete('coat');
myLook.clear();
console.log(myLook, myLook.size);
