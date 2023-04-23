const mealData=(searchMeal)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
    .then(res=>res.json())
    .then(data=>displayMeal(data.meals))
}

const displayMeal=(datas)=>{
    console.log(datas);
    const mealsContainer=document.getElementById('mealsContainer');
    mealsContainer.textContent='';
    datas=datas.slice(0, 3)
    const noFoundMsg=document.getElementById('no-found-msg');
    if(datas.length === 0){
      noFoundMsg.classList.remove('hidden')
    }else{
      noFoundMsg.classList.add('hidden')
    }
    datas.forEach(meal=>{
      console.log(meal);
        const{idMeal,strArea,strCategory,strInstructions,strMealThumb}=meal
        const div=document.createElement('div');
        div.innerHTML+=`
        <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="${strMealThumb}" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">${strArea}</h2>
        <p>${strInstructions.slice(0,100)}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" onclick="detailShow(${idMeal})">Get Details</button>
        </div>
      </div>
    </div>
        `
        mealsContainer.appendChild(div)    
    });
    toggleLoading(false);
}

const searchInp=document.getElementById('searchInp');
searchInp.addEventListener('keypress',(event)=>{
toggleLoading(true)
  if(event.key === 'Enter'){
    const searchBtn=document.getElementById('searchBtn')
    searchBtn.click()
    const searchInpVal=searchInp.value;
    mealData(searchInpVal)
  }
})

const detailShow=(id)=>{
  // console.log(id);
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then(res=>res.json())
  .then(data=>console.log(data))

}


const toggleLoading=isLoading=>{
  const loader=document.getElementById('loader')
  if(isLoading){
loader.classList.remove('hidden')
  }else{
    loader.classList.add('hidden')
  }
}

// mealData();