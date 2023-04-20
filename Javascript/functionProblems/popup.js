
const popUp=()=>{

    // confirmation box 
    let txt;
    // if(confirm('Press ok button')){
    //     txt="Ok!Thanks.";
    // }else{
    //     txt="You have to press ok";
    // }

//     let name=prompt('pls enter name','showman');
//     if(name=="" || name==null){
// txt='pls input a number';
//     }else{
//         txt=`Hello ${name}.Cool!`;
//     }


// add two numbers 
let num1=prompt('Enter 1st number');
let num2=prompt('Enter 2nd number');

let result=parseInt(num1)+parseInt(num2);

if(num1 === '' || num2 === ''){
    alert('Pls fill up inputs!');
}else{
    txt=result;
    document.getElementById('showTxt').innerHTML=`The addition : ${txt}`;
}

// document.getElementById('showTxt').innerHTML=txt;


}

console.log(popUp());