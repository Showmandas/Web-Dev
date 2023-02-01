function avg_array(numbers){

    let sum=0
    for(let i=0;i<numbers.length;i++){
        arrlen=numbers.length
        sum=sum+numbers[i]
        avg=sum/arrlen
    }
    return avg

}

var numarray=[2,3,4,5,6,7,8,10,20,14]

console.log(avg_array(numarray));