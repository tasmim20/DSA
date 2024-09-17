let largeArray = new Array(100000).fill(0);
console.time("push");
largeArray.push(1); //Time Complexity: O(1) = 0.108ms
console.timeEnd("push");

console.time("unshift");
largeArray.unshift(1); //Time Complexity: O(n)
console.timeEnd("unshift");

//push: 1.687ms
//unshift: 0.08ms
