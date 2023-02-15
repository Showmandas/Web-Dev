
let txtarea=document.getElementById('txt');
let bold=document.getElementById('bold');
let italic=document.getElementById('italic');
let underline=document.getElementById('underline');

let left=document.getElementById('left');
let center=document.getElementById('center');
let right=document.getElementById('right');
let justify=document.getElementById('justify');

let fontSize=document.getElementById('fontSize');

// text format 

bold.addEventListener('click',function(){
    let txtarea=document.getElementById('txt').innerText;
    document.getElementById('txt').style.fontWeight='bold';
})

italic.addEventListener('click',function(){
    let txtarea=document.getElementById('txt').innerText;
    document.getElementById('txt').style.fontStyle='italic';
})

underline.addEventListener('click',function(){
    let txtarea=document.getElementById('txt').innerText;
    document.getElementById('txt').style.textDecoration='underline';
})


// text align
left.addEventListener('click',function(){
    let txtarea=document.getElementById('txt').innerText;
    document.getElementById('txt').style.textAlign='left';
})

center.addEventListener('click',function(){
    let txtarea=document.getElementById('txt').innerText;
    document.getElementById('txt').style.textAlign='center';
})

right.addEventListener('click',function(){
    let txtarea=document.getElementById('txt').innerText;
    document.getElementById('txt').style.textAlign='right';
})

justify.addEventListener('click',function(){
    let txtarea=document.getElementById('txt').innerText;
    document.getElementById('txt').style.textAlign='justify';
})

//font size

function font(event){
    let value=event.value;
    txtarea.style.fontSize=value + 'px';
}

//color

function color(event){
    let value=event.value;
    txtarea.style.color=value;
}







