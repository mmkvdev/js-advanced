
// Implementing the stacks data structure

// available methods -> push, pop, peek, currentSize
const stack = function () {
    this.key = 0;
    this.stackStorage = {};

    this.push = function (element) {
        this.stackStorage[this.key] = element;
        this.key++;
    }

    this.pop = function () {
        if (this.key === 0) {
            return undefined;
        }
        this.key--;
        let elementToBePopped = this.stackStorage[this.key];
        delete this.stackStorage[this.key];
        return elementToBePopped;
    }

    this.peek = function () {
        return this.stackStorage[this.key-1];
    }

    this.size = function () {
        return this.key;
    }
}


let stackExample = new stack();
stackExample.push(4);
stackExample.push(4);
stackExample.push(1);
console.log('peeking the top most element from the stack: ',stackExample.peek());
console.log('popping the top most element from the stack: ',stackExample.pop());
console.log('popping the top most element from the stack: ', stackExample.pop());
console.log('peeking the top most element from the stack: ', stackExample.peek());
console.log('The current size of the stack: ', stackExample.size());