const fetchNews=()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(data=>showCategory(data.data))
}

const showCategory=(data)=>{
    console.log(data);
    const categories_container=document.getElementById('categories-container');
    data.news_category.forEach(singData=>{
        // console.log(singData);
        // categories_container.innerHTML += `<a class="nav-link" href="#">${singData.category_name}</a>`
        const links=document.createElement('p');
        links.innerHTML=`<a class="nav-link" href="#" onclick="fetchAllNews('${singData.category_id}','${singData.category_name}')">${singData.category_name}</a>`
        categories_container.appendChild(links)
    })
}


const fetchAllNews=(category_id,category_name)=>{
// console.log(category_id);
const url=`https://openapi.programming-hero.com/api/news/category/${category_id}`;
fetch(url).then(res=>res.json()).then(data=>showAllNews(data.data,category_name))

}

const showAllNews=(data,category_name)=>{
    // console.log(data,category_name);
    document.getElementById('news-count').innerText=data.length
    document.getElementById('category-name').innerText=category_name
    const newsContainer=document.getElementById('all-news');
    newsContainer.innerHTML='';

    data.forEach(singleNews=>{
        // console.log(singleNews);
        const card=document.createElement("div");
        card.classList.add("card","mb-3");
        card.innerHTML=`     
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${singleNews.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${singleNews.title}</h5>
        <p class="card-text">${singleNews.details.slice(0,200)}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
        `;
        newsContainer.appendChild(card);
    });
}

console.log(fetchNews());