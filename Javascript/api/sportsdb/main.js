const loadData=()=>{
    const searchInp=document.getElementById('searchInp').value;
    document.getElementById('playerDetails').innerHTML=''
    document.getElementById('maleimg').classList.add('d-none');
    document.getElementById('femaleimg').classList.add('d-none');
    document.getElementById('spinner').classList.remove('d-none');
    const url=`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchInp}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        document.getElementById('spinner').classList.add('d-none');
        showPlayer(data.player)})
}

const showPlayer=(players)=>{
    document.getElementById('searchInp').value='';
    const playerContainer=document.getElementById('player-info');
    playerContainer.innerHTML='';
    players.forEach((player)=>{
        const {strPlayer,strThumb}=player;
        console.log(player);
        const div=document.createElement('div')
        div.classList.add('col');
        div.innerHTML=`
        <div class="card my-5">
      <img src="${strThumb ? strThumb : 'https://picsum.photos/200/300'}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
        <p class="card-text">${player.strNationality}</p>
      </div>
      <div class='my-5 d-flex justify-content-center align-items-center gap-3'>
      <button type="button" class="btn btn-primary" onclick="showDetails('${player.idPlayer}')">Details</button>
<button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
        `;
        playerContainer.appendChild(div)
    })

}

const showDetails=(id)=>{
    const URL=`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`
    // console.log(URL)
    fetch(URL)
    .then(res=>res.json())
    .then(data=>showPlayerDetails(data.players))

}

const showPlayerDetails=(details)=>{
    const detailContainer=document.getElementById('playerDetails')
    detailContainer.innerHTML=''
    details.forEach((details)=>{
        console.log(details);
        const div=document.createElement('div')
        if(details.strGender === 'Male'){
            const elem=document.getElementById('maleimg')
            elem.classList.remove('d-none')
            // document.getElementById('maleimg').innerHTML=''
         }else{
            const elem=document.getElementById('femaleimg')
            elem.classList.remove('d-none')
            
         }

        div.innerHTML=`
        <div class="card mb-3 w-100">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${details.strThumb}" class="img-fluid rounded-start w-100 h-100" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${details.strPlayer}</h5>
        <p class="card-text">${details.strDescriptionEN.slice(0,200)+"..."}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        `
        detailContainer.appendChild(div);
    })
}

// console.log(loadData('messi'))