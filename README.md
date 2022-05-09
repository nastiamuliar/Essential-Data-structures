# Essential Data structures

Data structures are a specific way of organizing data in a computer so that it may be used for information gathering.
More precisely, Data Structure refers to a group of data values, how they relate to each other, and the operations or functions that can be carried out on them.

### Array ( Array )
Arrays are the most basic data structure. It is a group of similar types of elements stored together at contiguous memory locations and each cell has a corresponding numeric index used to select its data. This data structure is used in JS to store ordered collections. JavaScript has dynamic arrays (their size is not predetermined, nor the type of data). An array literal is the easiest way to create a JavaScript Array. 

### Stack ( Array )
Stack is a linear data structure that follows the LIFO(Last In First Out) or FILO(First In Last Out) principle. It contains only one pointer the top pointer that points to the topmost element of the stack. Whenever we add an element to the stack, it is added at the top of the stack and also whenever we delete an element from the stack it is deleted from the top of the stack. Array in Javascript has the attributes of Stack.

### Queue ( Array )
Queue is a linear data structure that follows the FIFO(First In First Out) principle. It contains two-pointers, 1) front pointer, 2) rear pointer. The front pointer contains the address of the starting element and the rear pointer contains the address of the last element of the queue. The two main methods used for the implementation of the queue are the enqueue and dequeue method. Enqueuing is the process of adding an element in the queue and dequeuing is the process of removing an element from the queue. Array in JavaScript has some attributes of Queue.


### Hash table ( Object, Map )
A hash table is a key-value data structure. Due to the lightning speed of querying a value through key, it is commonly used in Map or Object data structures. The hash table uses a hash function to convert keys into a list of numbers, and these numbers serve as the values of corresponding keys. To get value using key is dashingly fast, time complexity can achieve O(1). The same keys must return the same values — this is the basis of the hash function. The most common example of a Hash Table in JavaScript is the Object data type, where you can pair the object's property value with a property key. Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

### Set ( Set )
A set is a collection of well defined and distinct objects. ES6 introduced the concept of set. A Set is a special type collection – “set of values” (without keys), which has certain level of similarity with array. However, a set does not allow repeating elements and is not indexed.


