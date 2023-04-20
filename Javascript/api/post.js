const loadPost=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))
}

const displayPost=(data)=>{
  const post_container=document.getElementById('post-container');
  for(const postData of data){
    const postdiv=document.createElement('div')
    postdiv.innerHTML=`
    <h3>${postData.id}</h3>
    <h4>${postData.title}</h4>
    <p>${postData.id}</p>
    `;
    post_container.appendChild(postdiv);
  }
}

console.log(loadPost());