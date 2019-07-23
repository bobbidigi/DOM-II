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
        }

        let scale = 1;
        event.target.onwheel = zoom;
    }
})

////// drag and drop w3image /////
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
const plus = document.querySelector(".plus")
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    plus.style.display = "none";
}

//// load function ///////

window.addEventListener('load', (event) => {
    console.log('page is fully loaded', event.target.body);
    event.target.body.classList.add('bodyAnimation');
    setTimeout(function () {
        event.target.body.classList.remove("bodyAnimation");
    }, 3000);
});

///////// resize event /////////////

// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');
const dragSection = document.querySelector(".drag-destinations");
function reportWindowSize() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    if(window.innerWidth < 800){
        dragSection.style.display = "none";
    }
    if(window.innerWidth > 800){
        dragSection.style.display = "block";
    }
}

window.onresize = reportWindowSize;



////////// scroll event ////////////

window.addEventListener('scroll', (event) => {
    // console.log(event.target.body)
    if (event.target.body.classList.contains('bodyAnimation')) {
    }else{
        event.target.body.classList.add('bodyAnimation');
        setTimeout(function () {
            event.target.body.classList.remove("bodyAnimation");
        }, 5000);
    }
    
})


//////// double click destination items ////////////////

const destItems = document.querySelector('.destination-items');

destItems.addEventListener('dblclick', function (e) {
    if(e.target.classList.contains("dest")){
        e.target.classList.toggle('large');
    }    
});





