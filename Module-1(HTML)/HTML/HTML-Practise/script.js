let bars = document.getElementById("Bars");
let navItem = document.getElementById("navItem");
let items = document.getElementById("items");
bars.addEventListener("click", () => {
  navItem.classList.toggle("active");
  items.classList.toggle("open");
  if (items.classList.contains("open")) {
    items.style.visibility = "visible";
    // navItem.style.flexDirection='column';
    // items.style.width='100%'
  } else {
    items.style.visibility = "hidden";
  }
  // .style.display='block';
  console.log("clicked");
});


const moon=document.getElementById('moon')
const sun=document.getElementById('sun')
let main =document.getElementById('main')
let aboutHeader=document.getElementById('aboutHeader');

moon.addEventListener('click',()=>{
    main.classList.toggle('dark');
    // aboutHeader.style.color='#b2bec3'
})