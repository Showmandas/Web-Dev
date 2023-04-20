const loadComment=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displaycomment(data))
}

const displaycomment=(data)=>{
// console.log(data);
const comment_div=document.getElementById('comment-div');
for(const comments of data){
    const comDiv=document.createElement('div')
    comDiv.innerHTML=`
    <h3>${comments.name}<h3>
    <h3>${comments.email}<h4>
    `;
    comment_div.appendChild(comDiv);
}
}