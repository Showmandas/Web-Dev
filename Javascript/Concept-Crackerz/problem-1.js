const movies=[
    { 
     title: 'Star Wars', 
     director: 'George Lucas', 
     year: 1977 
   },
                
   { 
     title: 'The  Dark Knight', 
     director: 'Christopher Nolan', 
     year: 2008 
   }
 ];
 const findTheMovie = (movieTitle, movieYear, arrOfMovies) =>{
 //write your code here
 //don't forget to write return
 //   console.log(movieTitle,movieYear)
 //   console.log(arrOfMovies);
 
 if(movieTitle==arrOfMovies[0].title || movieYear == arrOfMovies[0].year){
     return arrOfMovies[0];
 }
 
 }
 
 findTheMovie('star wars',1977,movies);