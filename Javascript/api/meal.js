const loadMeals=()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res=>res.json())
    .then(data=> displayMeal(data.meals))
}

const displayMeal=meals=>{
    console.log(meals);
    const mealContainer=document.getElementById('meal-container');
    // console.log(data);
    meals.forEach(meal=>{
        console.log(meal);
        const div=document.createElement('div');
        div.innerHTML=`
        <h3>${meal.strMeal}</h3>
        `
        mealContainer.appendChild(div);

    })

}