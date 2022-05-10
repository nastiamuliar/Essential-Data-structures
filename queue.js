const queue = ['Peter', 'Mary', 'Jane', 'Mark', 'Kate'];

queue.push('Steven');
console.log(queue);
queue.shift();
console.log(queue);
console.log(queue[0]);
console.log(queue.length === 0, !queue[0]);
