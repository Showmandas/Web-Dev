const addItem=document.getElementById('addItem')

addItem.addEventListener('click',()=>{
    const itemInp=document.getElementById('itemInp');
    const itemDiv=document.getElementById('itemDiv');
    const itemVal=itemInp.value;
    itemInp.value=''
    const div=document.createElement('div');
    div.classList.add('flex','justify-center','align-items-center','gap-3','mb-5')
    div.innerHTML+=`
    <h2 class="bg-purple-600 text-white font-semibold p-2 text-center text-xl w-32">${itemVal}</h2>
    <button class="btn bg-red-600 text-white font-semibold" onclick="deleteItem()">Delete</button>
    `
    itemDiv.appendChild(div)

    // console.log('click here');
})


