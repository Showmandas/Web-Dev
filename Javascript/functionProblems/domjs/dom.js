document.getElementById('inpbtn').addEventListener('click',function(){
    // console.log('clicked');
   let inptxt=document.getElementById('input-text').value;
    const inputDiv=document.getElementById('input-div');
    const h1=document.createElement('h1');
    h1.innerText=inptxt;
    h1.classList.add('new-h1');
    inputDiv.appendChild(h1);

    const allh1=document.getElementsByClassName('new-h1');
    for (const item of allh1){
        item.addEventListener('click',function(e){
            console.log(e.target.parentNode.removeChild(e.target));
        })
    }
    document.getElementById('input-text').value='';

})


document.getElementById('clicked').addEventListener('click',function(){
setInnerTxt('p-1')
setInnerTxt('p-2')
setInnerTxt('p-3')
setInnerTxt('p-4')
})

function setInnerTxt(ids){
    document.getElementById(ids).innerText='bangladesh';

}