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

// On click, moves the block clicked to the top
let rockets = document.querySelectorAll('.block');
rockets.forEach(moveUp => moveUp.addEventListener('click', (event) => {
  if (event = event.target.style.order = '') {
    event.target.style.order = 1;
  } else {
    rockets.forEach(upOne => upOne.style.order += 1);
  }
}))








