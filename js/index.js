// main ham 

const menuBtn = document.querySelector('.menuBtn')


menuBtn.addEventListener('click',(e)=>{
 
  console.log('h');
  menuBtn.classList.toggle('open')
})


// ham1

const menuBtn2 = document.querySelector('.ham1')



menuBtn2.addEventListener('click',()=>{
  menuBtn2.classList.toggle('open1')
})


// ham2


const menuBtn3 = document.querySelector('.ham2')


menuBtn3.addEventListener('click',()=>{
  menuBtn3.classList.toggle('open2')
})


// ham3 


const menuBtn4 = document.querySelector('.ham3')

menuBtn4.addEventListener('click',()=>{
  menuBtn4.classList.toggle('open3')
})



const btn = document.getElementById('to-top');

btn.addEventListener('click',function(){
    
    window.scrollTo(0,0);
})
