const stack = ['pink', 'blue', 'green', 'orange', 'violet'];

stack.push('yellow');
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack[stack.length - 1]);
console.log(stack.length === 0, !stack[stack.length - 1]);
