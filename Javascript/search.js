const person=[
    {id:1,name:'showman das',age:24},
    {id:2,name:'showman das',age:23},
    {id:3,name:'showman dhar',age:22},
    {id:4,name:'showman chatterjee',age:25},
    {id:5,name:'showman dhar',age:21},
    {id:6,name:'showman nath',age:27},
    {id:7,name:'showman mondal',age:23},
    {id:8,name:'soma das',age:25},
]


function matchedPerson(person,search){
    const matched=[];
    for(const names of person){
        if(names.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(matched);
        }
    }
    return matched;

}

var result=matchedPerson(person,'das');
console.log(result);