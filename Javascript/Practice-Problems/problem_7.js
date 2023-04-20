// You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even 
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even 
// number.

// using map method 
let oddArr=[ 1, 3, 5, 7, 9 ]
const evenArr=oddArr.map((x)=>x+1)
// console.log(evenArr);

for(let i=0;i<oddArr.length;i++){
    let evenarr=oddArr[i]+1;
    console.log(evenarr);     
}

