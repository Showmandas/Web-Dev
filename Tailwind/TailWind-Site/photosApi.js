function loadPhotosData(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>displayData(data))
}

function displayData(data){
    // console.log(data);
    data.slice(0,6).forEach(datas=>{


        console.log(datas);
        const{albumId,id,title,url,thumbnailUrl}=datas
        const photoSection=document.getElementById('photoSection');
        // photoSection.textContent=''
        const showAllBtn=document.getElementById('show-all-btn');
        showAllBtn.addEventListener('click',()=>{
            if(datas.length>6){
                showAllBtn.classList.remove('hidden')
            }else{
                loadPhotosData()
                showAllBtn.classList.add('hidden')
            }
        })
        
        const div=document.createElement('div');
        div.innerHTML+=`
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src=${url} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${id}</h2>
    <h2 class="card-title">${title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
        `
        photoSection.appendChild(div)
    })

}

loadPhotosData()