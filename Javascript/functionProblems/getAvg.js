function average (arrOfMarks){
    //write your code here
   // don't forget to write return
   var sum=0;
         for(let i=0;i<arrOfMarks.length;i++){
     if(typeof arrOfMarks[i] !== 'number' && typeof arrOfMarks[i] == 'string'){
       return "Please provide numbers";
     }else{
       
         sum=sum+arrOfMarks[i];
         var avg=parseFloat((sum/arrOfMarks.length).toFixed(2));
       }
     }
     return avg;
   } 
   
   var numbers=[100, 100, 100, 100, 100];
   console.log(average(numbers));
   