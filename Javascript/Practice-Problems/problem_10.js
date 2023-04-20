// You have an array [ 1, 9, 17, 22 ]. Add the all elements 
// of this array and give output. Do this using for loop & 
// array.reduce() method.


// using reduce function 
const num=[ 1, 9, 17, 22 ];
const addNum=num.reduce((prev,cur)=>{
    return prev+cur;
},0)
// console.log(addNum);


// using for loop 
function addarr(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=num[i]; 
    }
    return sum;
}
console.log(addarr(num));
