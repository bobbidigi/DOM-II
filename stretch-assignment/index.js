let blocks = document.querySelector('.blocks');
let margin = 10;
let traveling; 
// console.log(blocks)


blocks.addEventListener('mousedown', (e)=>{
  traveling = true;
  
  let blockMargin = 10;
    timerAdd();
    function timerAdd() {
      m = setTimeout(addMargin, 10);
    }
    function timerSubtract() {
      m = setTimeout(subMargin, 10);
    }
    function subMargin(){
      if(blockMargin > 10){
        blockMargin--;
        e.target.style.marginLeft = `${blockMargin}px`;
        timerSubtract();
      }
      
    }
    function addMargin() {
      if(traveling){
        blockMargin++;
        e.target.style.marginLeft = `${blockMargin}px`;
        timerAdd();
      }else{
        subMargin();
      }
      
    }
})

blocks.addEventListener('mouseup', (e) =>{
  traveling = false;
})








