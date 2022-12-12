// global constants

let selectDiv = document.querySelector('#grid_container');
let createP = document.createElement('div');
for(let i = 0; i<264; i++){
        createP = document.createElement('div')
        createP.className="hover";   
        // agregar estilo que establezca un borde transparente

        selectDiv.appendChild(createP);
        
}
const selectHover = document.querySelector('#hover');
const selectGray = document.querySelector('#gray');
const selectClean = document.querySelector('#clean');



// agregue un event listener al elemento que quiere que responda al clic
selectHover.addEventListener('click', (e) => {
        // compruebe si la función está activada o no

        mouseover();

      });

      //

selectGray.addEventListener('click', (e) => {
        // compruebe si la función está activada o no

        mouseoverGray();

      });

      //

selectClean.addEventListener('click', (e)=>{
        hoverEraser();
      })

//creating function that only work when mousedown & psychodelic
function mouseoverGray(){
selectDiv.addEventListener('mouseover', (e) => {
                
        if (e.target.style.backgroundColor.match(/rgba/)) {
                let currentOpacity = Number(e.target.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.9) {
                        e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    e.target.classList.add('gray');
                }
        } else if (e.target.classList == 'gray' && e.target.style.backgroundColor == 'rgb(0, 0, 0)') {
                return;
        } else {
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  }
        });
        };


//creating function that only work when mousedown & psychodelic
function mouseover(){
        
       
        let color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
        selectDiv.addEventListener('mouseover', (e) => {
                e.target.style.background=color[Math.floor(Math.random() * color.length)];
                selectDiv.style.background="transparent";

        });
        console.log(selectHoverDiv);

}

 /**
  * Eraser mode
  */
 

 //mosedown hover eraser mode

 function hoverEraser(){
        selectDiv.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = '#FFFFEA';
                e.target.classList.remove('hover');

        });

}

 //click eraser mode


function selectByClickDeactivate(){
        selectDiv.addEventListener('click', (e) => {
                e.target.style="";
                selectDiv.style.border = "1px solid transparent";
                console.log(e.target);
        });

}




