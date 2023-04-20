
const fetchAdvices=()=>{
    const url=`https://api.adviceslip.com/advice`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>showAdvices(data.slip))
}


const showAdvices=(advices)=>{
    // console.log(advices);
    Object.values(advices).forEach(advice=>{
        // console.log(advice);
        const showAdvice=document.getElementById('showAdvice');
        const div=document.createElement('div');
        div.classList.add('col-12');
        div.innerHTML=`
        <div class="card">
        <div class="card-body">
          <p class="card-text">${advice}</p>
        </div>
      </div>`
      showAdvice.appendChild(div);
    })

}

fetchAdvices();