const favBooks=[
    { 
       title: 'To Kill a Mockingbird', 
       author: 'Harper Lee', 
       year: 1960 
    },
                                 
   { 
       title: 'Harry Potter and the Philosopher Stone', 
       author: 'J.K. Rowling',
       year: 1997 
   },
                                                     
   { 
       title: 'The Hunger Games', 
       author: 'Suzanne Collins', 
       year: 2008
 }
 ];

 const findBooks = (arrOfBooks) => {
    //write your code here
   //don't forget to return
   const arr=arrOfBooks.filter(obj=>{
    // console.log(obj);
    if(obj.year >  2000){
        return obj;
    }
})
console.log(arr);

  }


 findBooks(favBooks);
