var marks=50;

// check grades 

if(marks>=80){
    console.log('Congrats! You got A Grade!')
}
else if(marks>=60 || marks<=79){
    console.log('Excellent! You got B Grade!')
}
else if(marks>=50 || marks<=59){
    console.log('Good! You got C Grade!')
}
else if(marks>=40 || marks<=49){
    console.log('Not bad! You got D Grade!')
}
else{
    console.log('Sorry!You are failed. You got F grade.')
}