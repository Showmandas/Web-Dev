const num=1
let age=24
let person={
    name:'showman',
    gender:'male',
    age:24,
    designation:'student'
}

let tempStr=`I am ${age} and my name is ${person.name}.I am a ${person.designation}`;
// console.log(tempStr);


const divByFive=(x)=>x/5;
// console.log(divByFive(30));

const addarr=(x,y)=>(x+2)*(y+2)
// console.log(addarr(2,3));

const threepara=(x,y,z)=>x*y*z
// console.log(threepara(2,3,4));

let numarr=[2,3,4,5,6,7,8,10]
let maparr=numarr.map((x)=>x*5)
// console.log(maparr);

let filterarr=numarr.filter((x)=>x%2==1)
console.log(filterarr);