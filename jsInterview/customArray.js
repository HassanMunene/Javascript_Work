class MyArray {
    constructor () {
        this.length = 0;
        this.data = {};
    }
    // add an element to an array
    push (item) {
        this.data[this.length] = item;
        this.length += 1;
        return this.length;
    }
    // return an element of a specific index
    get(index) {
        return this.data[index];
    }
    // remove the last element of the array
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length -= 1;
        return lastItem;
    }
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        //get the element at index 0
        const element = this.data[0];
        for (let i = 0; i < this.length; i++) {
            const temp = this.data[i + 1];
            this.data[i] = temp;
        }
        delete this.data[this.length - 1];
        this.length -= 1;
        return element;
    }
    deleteByIndex(index) {
        delete this.data[index];
        this.length -= 1;
    }

}

const myNewArray = new MyArray();
myNewArray.push("mango");
myNewArray.push('apple');
myNewArray.push("orange");
myNewArray.push("ovacado");
myNewArray.push("berry")
console.log("All Arrays", myNewArray);
console.log("---------------");
const element = myNewArray.shift();
console.log("shifted element", element);
console.log("------------");
console.log("New array", myNewArray);

console.log("---------------");
const ele = myNewArray.shift();
console.log("shifted element", element);
console.log("------------");
console.log("New array", myNewArray);

console.log("-----------------")
const el = myNewArray.deleteByIndex(2);
console.log("New array", myNewArray);