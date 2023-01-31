function leapYear(year){
    if(year % 4 == 0){
        return true
    }
    else{
        return false
    }
}

console.log(leapYear(2016))