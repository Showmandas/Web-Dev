let applybtn=document.getElementById('applybtn');

applybtn.addEventListener('click',function(){
    //Easy Version
    
    // let price=document.getElementById('price').innerText;
    // let priceval=parseFloat(price);
    // let discval=priceval * 0.3;
    // let finalPrice=priceval-discval;
    // document.getElementById('pay').innerHTML=finalPrice;

    // with coupon 

    let couponCode=document.getElementById('couponCode').value;
    if(couponCode == 'DISC30'){
        let price=document.getElementById('price').innerText;
    let priceval=parseFloat(price);
    let discval=priceval * 0.3;
    let finalPrice=priceval-discval;
    document.getElementById('pay').innerHTML=finalPrice;
    }else{
        alert('Wrong Coupon Code!! Price: Tk 1000');
    }
    document.getElementById('couponCode').value ="";
})
