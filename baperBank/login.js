var btnSubmit=document.getElementById('btn-submit');

btnSubmit.addEventListener('click',function(){
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    if(email === 'das@gmail.com' && password === 'dasa'){
        window.location.href='main.html';
    }else{
        alert('invalid user!!');
    }
})