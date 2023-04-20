// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the 
// result
// Print the result.


const addArr=(num1,num2)=> {
   let concateArr=[...num1,...num2];
   let maxInArr=Math.max(...concateArr);
   return maxInArr;
   } 
  




let num1=[1,2,3,4]
let num2=[5,6,7,8]
console.log(addArr(num1,num2));