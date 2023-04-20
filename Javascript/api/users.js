// const fetchUsers=()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(datas=>displayUsers(datas))
// }

// const displayUsers=(datas)=>console.log(datas);

// console.log(fetchUsers());


const fetchUser2=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(datas=>displayUsers2(datas))
}

const displayUsers2=(data)=>{
    const user_list=document.getElementById('user-list');
    for (const user of data){
        const li=document.createElement('li');
        li.innerText=user.name;
        user_list.appendChild(li)
    }
}

console.log(fetchUser2());