const set = new Set(['slippers', 'sneakers', 'sandals', 'high heels', 'boots', 'flip flops', 'sneakers', 'boots']);

console.log(set, set.size);
set.add('crocs');
console.log(set, set.size);
set.delete('slippers');
console.log(set, set.size);
console.log(set.has('boots'));
set.clear();
console.log(set, set.size);
