// Write an arrow function where it will do the following:
// It will take an array where the array elements will be the name of people
// Check if the length of each element is even
//  Push elements with even length to a new array and return the result

const checkEvenLength = (arrOfFriends) => {
    //write your code here
    let arrFrnd=[];
    const evenArr=arrOfFriends.filter(frnd=>{
        if(frnd.length % 2 == 0){
            arrFrnd.push(frnd);
            return arrFrnd;
        }
    });
    // console.log(evenArr);
    return evenArr;

}

const frndsArr=['John', 'James', 'Jane', 'Ratul'];
console.log(checkEvenLength(frndsArr));
