// Your code goes here


////// button animation triggered on mouseover
const cPick = document.querySelector(".content-pick");

cPick.addEventListener('mouseover', (event) => {
    console.log(event.target)
    if(event.target.className === "btn"){
        event.target.classList.add('btnAnimation');
        setTimeout(function () {
            event.target.classList.remove("btnAnimation");
        }, 3000);
    }
})


///body animation triggered by Keydown
window.addEventListener('keydown', (event) => {
    console.log(event.target)
    event.target.classList.add('bodyAnimation');
    setTimeout(function () {
        event.target.classList.remove("bodyAnimation");
    }, 3000);
})


