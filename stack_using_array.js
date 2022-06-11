class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.stack = []; 
  }
  peek() {
    return this.stack[this.stack.length];
  }
  push(value){
    this.stack.push(value)
    return this;
  }
  pop(){
    this.stack.pop();
    return this;
  }
}

const myStack = new Stack();
console.log(myStack.peek())
console.log(myStack.push('google'))
console.log(myStack.push('discord'))
console.log(myStack.push('udemy'))
console.log(myStack.pop())
// 
// myStack.push('udemy');
// myStack.push('discord');
// myStack.peek();
// myStack.pop();
// myStack.pop();
// myStack.pop();
