function gym(workout){
    let biceps=['biceps','dumble','weight']
    let chest=['chest press','chest fly']

    if(workout=='biceps'){
        return biceps
    }
    else if(workout == 'chest'){
        return chest
    }else{
        return 'nothing'
    }
}

var gym=gym('chest')
console.log(gym)