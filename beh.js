const temp = document.querySelectorAll('.paratag');
const ula = document.querySelector('.ula');
const temp3 = document.querySelector('.texting');



ula.addEventListener('click',e=>{
        if(e.target.tagName==='LI'){
            e.target.remove();
        }
});

const butt = document.querySelector('.sub');
butt.addEventListener('click',function(){
    console.log(temp3.value);
    const temp2 = document.createElement('li');
    temp2.textContent = temp3.value;
    temp2.setAttribute('class','paratag');
    ula.append(temp2);
});