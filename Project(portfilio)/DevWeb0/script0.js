var icon1=document.getElementById('icon1');
var icon2=document.getElementById('icon2');
btn =document.getElementById('btn1');
icon1.addEventListener('click',()=>{
    icon1.style.display='none';
    icon2.style.display='initial';
document.getElementById('body1').style.backgroundColor='black';
});
icon2.addEventListener('click',()=>{
    icon2.style.display='none';
    icon1.style.display='initial';
document.getElementById('body1').style.backgroundColor='blanchedalmond';
});
btn.addEventListener('click',()=>{
   window.open('Sign in.html') 
});
