let Toggle = document.getElementById('Toggle');
let text = document.getElementById('Texts');
let ReadText = document.getElementById('ReadText');
let textToggle = document.getElementById('textToggle');
let toggleText = document.getElementById('toggleText');
let bgcolor = document.querySelector('.bgcolor');

// criteria show 
const toggle = () => {
  text.classList.toggle('textbox');
  // textToggle.innerHTML="hide";
  // textToggle.style.backgroundColor="#ff2222"
  if (textToggle.innerHTML == "hide") {
    textToggle.innerHTML = "show our criteria"
  } else {
    textToggle.innerHTML = "hide"
  }
}

// dark and light theme 
Toggle.addEventListener('click', () => {
  bgcolor.classList.toggle('Bgcolor');
})

// read more and less 
const readMore = () => {
  ReadText.classList.toggle('textbox')
  // toggleText.style.display='none';
  if (toggleText.style.display == 'none') {
    toggleText.style.display = 'block'
  } else {
    toggleText.style.display = 'none'
  }
}


// show clock 

const clockShow = () => {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let ampm = document.getElementById('ampm');
  let greetings = document.getElementById('greetings')
  let greetDiv = document.getElementById('greetDiv')


  if (h >= 12) {
    ampm.innerText = "PM"
  } else {
    ampm.innerText = "AM"
  }
  // if(h>12){
  //     h=h-12
  // }

  if (h >= 6 && h < 12) {
    greetings.innerText = "Good Morning"
    greetings.style.color = "#fff";
    greetDiv.style.backgroundColor = "#000";
  } else if (h >= 12 && h <= 15) {
    greetings.innerText = "Good Noon";
    greetings.style.color = "#f2f234";
    greetDiv.style.backgroundColor = "#000";
  } else if (h > 15 && h < 20) {
    greetings.innerHTML = "Good Evening";
    greetings.style.color = "#000"
    greetDiv.style.backgroundColor = "#F6BA6F"
  } else {
    greetings.innerText = "Good Night";
    greetings.style.color = "#F6BA6F"
    greetDiv.style.backgroundColor = "#000"

  }


  document.getElementById('hours').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('seconds').innerText = s;

}
setInterval(clockShow, 1000)



//bank 

// for deposit 
let depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', () => {
  let net = document.getElementById('net');
  let netVal = parseInt(net.innerText)

  let depositInp = document.getElementById('depositInp');
  let depositInpAmount = parseInt(depositInp.value);
  let deposit = document.getElementById('deposit')
  let depositVal=parseInt(deposit.innerText);
  deposit.innerHTML = depositInpAmount + depositVal;
  console.log(typeof depositInpAmount);
  getNetBalance(depositInpAmount,netVal);
  // console.log(typeof netBalance);
  // console.log(typeof netVal);
  // console.log(depositInpAmount);
})

const getNetBalance=(x,y)=>{
  let net = document.getElementById('net');
  let netBalance = x + y;
  net.innerHTML = netBalance;
return netBalance;
}

// for withdraw 
let withdrawBtn=document.getElementById('withdrawBtn');

withdrawBtn.addEventListener('click',()=>{
  let net = document.getElementById('net');
  let netVal = parseInt(net.innerText)

  let withdrawInp=document.getElementById('withdrawInp');
  let withdrawInpAmount=parseInt(withdrawInp.value);
  let withdraw=document.getElementById('withdraw')
  let withdrawVal=parseInt(withdraw.innerText);
  withdraw.innerHTML=withdrawInpAmount + withdrawVal;
  let netBalance = netVal - withdrawInpAmount;
net.innerHTML=netBalance 
})


// shopping cart 

// let increment=document.getElementById('plus')
// let decrement=document.getElementById('minus')

function increment(){
  // let count = 1;
  let quantity=document.getElementById('quantity');
  let price=document.getElementById('price');
  let totalPrize=document.getElementById('total');
  // let priceVal=parseInt(price.innerText)
  let PrevQuantityVal=parseInt(quantity.value);
  let newQuantityVal=PrevQuantityVal + 1;
  quantity.value=newQuantityVal;
  price.innerHTML=250 * newQuantityVal;
  let total=250 * newQuantityVal;
  totalPrize.innerText=total;
  console.log('clicked');
}

// for decrement 
function decrement(){
  // let count = 1;
  let quantity=document.getElementById('quantity');
  let totalPrize=document.getElementById('total');
  let price=document.getElementById('price');
  let priceVal=parseInt(price.innerText);
  let PrevQuantityVal=parseInt(quantity.value);
  let newQuantityVal=PrevQuantityVal - 1;
  if(newQuantityVal < 1){
    quantity.innerHTML=1;
  }else{
    quantity.value=newQuantityVal;
  }
  if(priceVal <= 250){
    price.innerHTML=250;
  }else{
    price.innerHTML=250 * newQuantityVal;
    let total=250 * newQuantityVal;
    totalPrize.innerText=total;

  }
  console.log('clicked');
}

function increment1(){
  // let count = 1;
  let quantity1=document.getElementById('quantity1');
  let totalPrize=document.getElementById('total');
  let price1=document.getElementById('price1');
  // let priceVal=parseInt(price.innerText)
  let PrevQuantityVal=parseInt(quantity1.value);
  let newQuantityVal=PrevQuantityVal + 1;
  quantity1.value=newQuantityVal;
  price1.innerHTML=220 * newQuantityVal;
  let total=220 * newQuantityVal;
  totalPrize.innerText=total;
  console.log('clicked');
}

// for decrement 
function decrement1(){
  // let count = 1;
  let quantity1=document.getElementById('quantity1');
  let price1=document.getElementById('price1');
  let priceVal=parseInt(price1.innerText);
  let PrevQuantityVal=parseInt(quantity1.value);
  let newQuantityVal=PrevQuantityVal - 1;
  let totalPrize=document.getElementById('total');
  if(newQuantityVal < 1){
    quantity1.innerHTML=1;
  }else{

    quantity1.value=newQuantityVal;
  }
  if(priceVal <= 220){
    price1.innerHTML=220;
  }else{
    price1.innerHTML=220 * newQuantityVal;
    let total=220 * newQuantityVal;
    totalPrize.innerText=total;

  }
  console.log('clicked');
}

const totalCost=()=>{

}