// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.



//square of elements
let nums=[2,3,4,5,6]
let sqr=nums.map((x)=>x*x)
console.log(sqr);

//sum of square elements
let sum=0;
let sqrsum=sqr.map((x)=>sum+=x)
console.log(`sum of square elements: ${sum}`);

// average of square elements 
let avg=sum/nums.length;
console.log(`Average of square elements: ${avg}`);