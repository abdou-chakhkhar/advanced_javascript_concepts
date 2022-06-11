class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value){
    const newNode = new Node(value);
    if(this.first===null){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue(){
    if(!this.first){
      return null;
    }
    if(this.first === this.last){
      this.last = null;
    }
    const holdingPointer = this.first.next;
    this.first = holdingPointer;
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();

console.log(myQueue.peek())
console.log(myQueue.enqueue("abdou"));
console.log(myQueue.enqueue("salim"));
console.log(myQueue.enqueue("jamal"));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
