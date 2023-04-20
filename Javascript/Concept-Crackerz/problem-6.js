// <!-- Write a function deleteProp which takes an array. The first element will be an object, and the second element will be a string prop.

//  If the object(first element) has a property prop, the function removes the property from the object and returns ’YES’; in all other cases it returns’NO’. -->

const deleteProperty =(arr)=>{
// Write your code here.
if(Object.keys(arr[0]) == arr[1]){
  delete arr[0];
  return "YES";
}else{
  return "NO";
}
// console.log(Object.keys(arr[0]));

}


 const objarr=[
  {
   fname:'John',
  },'fname'
];

console.log(deleteProperty(objarr));