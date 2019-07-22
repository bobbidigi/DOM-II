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


//////zoom on images with mouse wheel/////
const content = document.querySelector("card");
window.addEventListener('wheel', (event) => {
    if (event.target.tagName === "IMG") {
        function zoom(event) {
            event.preventDefault();

            scale += event.deltaY * -0.001;

            // Restrict scale
            scale = Math.min(Math.max(.125, scale), 4);
            if(scale < 1){
                scale = 1;
            }
            // Apply scale transform
            event.target.style.transform = `scale(${scale})`;
            console.log(scale);
        }

        let scale = 1;
        event.target.onwheel = zoom;
    }
})









