// global constants

const selectDiv = document.querySelector('#grid_container');
const selectHover = document.querySelector('#hover');
const selectClick = document.querySelector('#click');
let isActive = false;
let isActiveHover = false;
let done = true;

board();


//function create board

function board(){
for(let i = 0; i<264; i++){
        const createP = document.createElement('div');
        createP.className="hover";   
        // agregar estilo que establezca un borde transparente
        selectDiv.appendChild(createP);
        
}
}

/**
 * Section relative to click functions
 */

// agregue un event listener al elemento que quiere que responda al clic
selectClick.addEventListener('click', (e) => {
        // compruebe si la función está activada o no
        if(isActiveHover){isActiveHover = false;}else{
        if (isActive) {
          // desactive la función
          
          isActive = false;
          selectByClickDeactivate();
        } else {
          // active la función
          selectByClick();
          isActive = true;
        }

        console.log(isActive);

      }});

      console.log(isActive);

//creating function that only work when select click the element


function selectByClick(){
        var color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
        selectDiv.addEventListener('click', (e) => {
                e.target.style.background=color[Math.floor(Math.random() * color.length)];
                selectDiv.style.border = "1px solid transparent";
                console.log(e.target);
        });

}




/**
 * functions relative to hover mode
 */


//hover trigger

// agregue un event listener al elemento que quiere que responda al clic
selectHover.addEventListener('click', (e) => {
        // compruebe si la función está activada o no
       
        if (isActiveHover) {
          // desactive la función
          
          isActiveHover = false;
        
          mouseover();
        } else {
          // active la función
          mouseover();
          isActiveHover = true;
        }
        
        console.log("modo hover: " + isActiveHover);

      });

      console.log("modo hover: " + isActiveHover);

//creating function that only work when mousedown
function mouseover(){
        
        

        let color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
        selectDiv.addEventListener('mouseover', (e) => {
                e.target.style.background=color[Math.floor(Math.random() * color.length)];
                selectDiv.style.background="transparent";

        });


};

 //deactivate hover mode



 /**
  * Eraser mode
  */

 //mosedown hover eraser mode

 function hoverEraser(){
        let color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
        selectDiv.addEventListener('mouseover', (e) => {
                e.target.style="";
                selectDiv.style.background="transparent";

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




