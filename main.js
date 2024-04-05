let a = document.getElementById('btn');
let b = document.getElementsByTagName('body');
let h1=document.getElementById('heading');
let c =0;

a.onclick=()=>{
   h1.textContent=`clicked ${++c}`;
};