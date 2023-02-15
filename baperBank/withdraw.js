// withdraw

var drawbtn=document.getElementById('drawbtn');

drawbtn.addEventListener('click',function(){
    // let balance=document.getElementById('net').innerHTML=net+dep;

    var draw=Number(document.getElementById('draw').value);
    if(draw == ""){
        alert('pls enter something');
    }else if(draw>net){
        alert('your amount is more than net balance!');
    }
    else{ 
        var showwith=Number(document.getElementById('showwith').innerText);
        var total=showwith+draw;
        document.getElementById('showwith').innerText=total;
    
        var netTotal=document.getElementById('net').innerText;
        let result=Number(netTotal-draw);
        document.getElementById('net').innerHTML=result;
    }
})

