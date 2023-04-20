// Write an arrow function where it will take an array of numbers and do the following:

// Square each array element e.g ˣ², ʸ²,...
// Calculate the sum of the squared elements e.g ˣ²⁺ʸ²+...
// Return the average of the sum of the squared elements (ˣ²⁺ʸ²+...)/n where n is the length of the array

const calculate = (arrOfNumbers) => {
    //write your code here
    // console.log(arrOfNumbers);
    let s=0;
    let avg;
    arrOfNumbers.forEach(i=>{
        let  sqrI=Math.pow(i,2);
        s=s+sqrI;
        avg=s/arrOfNumbers.length;
    });
    
    // console.log(s);
    console.log(avg);
    return avg;
    // return s;
    


}

const arrnum=[4,6,10,12];
calculate(arrnum);