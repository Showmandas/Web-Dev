function temperatureConverter(valNum) {

    if(typeof valNum !== 'number'){
      return "Please provide a number";
    }else{
      var c=(valNum-32)/1.8;
      var cel=parseFloat(c.toFixed(2))
      return cel;
      
    }
    
  
  }
  
  console.log(temperatureConverter(103));