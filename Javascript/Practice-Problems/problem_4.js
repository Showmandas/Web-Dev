// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the 
// name of your friends
// b) Check if the length of each element is even, push elements 
// with even length to a new array and return the result
// Print the result.

const namearr=(friends_name)=>{
    for(let i=0;i<friends_name.length;i++){
        let strlength=friends_name[i].length;
        if(strlength % 2==0){
            // console.log(strlength);
            evenarr.push(friends_name[i]);
        }
        
    }
    return evenarr;
   
}

let friends_name=['abul','tabul','kabul','pabul','po','polo','chabul','mabul']
let evenarr=[];
console.log(namearr(friends_name));