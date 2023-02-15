// deposit

var depbtn=document.getElementById('depbtn');

var net=1000;
depbtn.addEventListener('click',function(){
    var dep=Number(document.getElementById('dep').value);
    if(dep == ""){
        alert('pls enter something');
    }else if(isNaN(dep)){
        alert('Pls enter number!!');
    }
    else{
        var showdep=Number(document.getElementById('showdep').innerText);
        var total=showdep+dep;
        document.getElementById('showdep').innerText=total;
        document.getElementById('net').innerHTML=net+total;
    }
})

