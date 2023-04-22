let Toggle=document.getElementById('Toggle');
let text=document.getElementById('Texts');
let ReadText=document.getElementById('ReadText');
let textToggle=document.getElementById('textToggle');
let toggleText=document.getElementById('toggleText');
let bgcolor=document.querySelector('.bgcolor');

// criteria show 
const toggle=()=>{
  text.classList.toggle('textbox');
  // textToggle.innerHTML="hide";
  // textToggle.style.backgroundColor="#ff2222"
  if(textToggle.innerHTML == "hide"){
    textToggle.innerHTML="show our criteria"
  }else{
    textToggle.innerHTML="hide"
  }
}

// dark and light theme 
Toggle.addEventListener('click',()=>{
  bgcolor.classList.toggle('Bgcolor');
})

// read more and less 
const readMore=()=>{
ReadText.classList.toggle('textbox')
// toggleText.style.display='none';
if(toggleText.style.display=='none'){
toggleText.style.display='block'
}else{
toggleText.style.display='none'
}
}


// show clock 

const clockShow=()=>{
    let time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    let ampm=document.getElementById('ampm');
    let greetings=document.getElementById('greetings')
    let greetDiv=document.getElementById('greetDiv')

    
    if(h>=12){
        ampm.innerText="PM"
    }else{
        ampm.innerText="AM"
    }
    // if(h>12){
    //     h=h-12
    // }

    if(h>=6 && h<12){
        greetings.innerText="Good Morning"
        greetings.style.color="#fff";
        greetDiv.style.backgroundColor="#000";
    }else if(h>=12 && h<=15){
        greetings.innerText="Good Noon";
        greetings.style.color="#f2f234";
        greetDiv.style.backgroundColor="#000";
    }else if(h>15 && h<20){
        greetings.innerHTML="Good Evening";
        greetings.style.color="#000"
        greetDiv.style.backgroundColor="#F6BA6F"
    }else{
        greetings.innerText="Good Night";
        greetings.style.color="#F6BA6F"
        greetDiv.style.backgroundColor="#000"

    }


    document.getElementById('hours').innerText=h;
    document.getElementById('minutes').innerText=m;
    document.getElementById('seconds').innerText=s;

}
setInterval(clockShow,1000)