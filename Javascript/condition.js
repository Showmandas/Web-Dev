var marks=0;

// check grades 

if(marks>100){
    console.log('Eta hote pare na!!');
}else if(marks<=100 && marks>=0){

    if(marks>=80){
        console.log('Congrats! You got A Grade!')
    }
    else if(marks>=60 && marks<=79){
        console.log('Excellent! You got B Grade!')
    }
    else if(marks>=50 && marks<=59){
        console.log('Good! You got C Grade!')
    }
    else if(marks>=40 && marks<=49){
        console.log('Not bad! You got D Grade!')
    }
    else if(marks>=0 && marks<=39){
        console.log('Sorry!You are failed. You got F grade.')

    }
}

else{
    console.log('na eta hote pare na')
}