// Challenging Follow above array of objects. So, you have 3 objects as 
// array element. Can you find out the total sum from here? 
// 20 + 15 + 22 = 57 . The output will be 57
// What are you thinking? Yeah! Do it with for loop. I know you can do it. 
// But! Wait !! Wait !!! Do the same task using array.reduce() method.

const people=[
    {name:'Meena',age:20},
    {name:'Rina',age:15},
    {name:'Suchorita',age:22},
]


// using map function 
const addArr=people.reduce((i,j)=>
  i+j.age,0
)
console.log(addArr);



// using for loop 
// let sum=0
// function addAge(people){
//     for(let i=0;i<people.length;i++){
//         sum+=people[i].age;
//     }
//     return sum;

// }

// console.log(addAge(people));


// const student={
//     name:'showman',
//     age:24,
// }

// console.log(student.age);