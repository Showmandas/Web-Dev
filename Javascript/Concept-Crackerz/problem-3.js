let arrObj=[
    { name: 'John', age: 20 },
    { name: 'Mary', age: 25 },
    { name: 'Peter', age: 30 }
  ]


  const findNames = (arrOfObj) => {
    //write your code here
   //don't forget to return
   let arr=arrOfObj.map(names=>names.name);
   console.log(arr);
   }

   findNames(arrObj);