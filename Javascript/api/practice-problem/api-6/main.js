const handleFetch=()=>{
    const inpVal=document.getElementById('inpVal').value;
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${inpVal}`;
    if(inpVal){
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            if(data.title === 'No Definitions Found'){
                alert(data.message);
            }else{
                displayAudio(data);
            }

        })
    }else{
        alert('Empty string!!');
    }

    
}

const displayAudio=(data)=>{
    const inputContainer=document.getElementById('input-container');
    data[0].phonetics.forEach(elem=>{
        const audio=document.createElement('audio');
        audio.src=elem.audio;
        console.log(audio);
        const button = document.createElement('button');
        button.innerHTML='play'
        button.onclick=()=>audio.play();
        const divContainer=document.createElement('div');
        divContainer.appendChild(button)
        divContainer.appendChild(audio)
        inputContainer.appendChild(divContainer)
    })
}

