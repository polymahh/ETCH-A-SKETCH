

//let containerWidth = Math.sqrt(divcount);
const container = document.querySelector("#container");
const divinput = document.getElementById("divcount");
const count = document.getElementById("count");
const reset = document.getElementById('reset');
const eButton = document.getElementById('earaser');
const grid = document.getElementById('grid');


let isgrid = false;
let earaser = false;
let divcount = divinput.value;

fReset () ;
reset.addEventListener('click',checkdiv);

eButton.onclick = function (){
    earaser = !earaser ;
}

grid.onclick = function () {
    isgrid = !isgrid
    let divs = document.querySelectorAll('#container >div');
    if (isgrid){
        divs.forEach(e => {e.classList.add('grid')});
        }else {
            divs.forEach(e => {e.classList.remove('grid')});
        }

}

divinput.oninput = function (){
    divcount = divinput.value ;
    console.log(divcount);
    count.innerHTML = divinput.value;

}

function checkdiv () {
   if (container.hasChildNodes()){
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild)
    } 
    fReset () ;

   }else {
    fReset () ;
   }
  

}

function fReset () {
    let divwidth = 100/Math.sqrt(divcount) +"%";
    for (i=0 ; i < divcount ; i++ ){
        let div = document.createElement('div') ;
        div.classList.add('oppclass')
        console.log(divwidth);
        div.style.width = divwidth.toString();
        div.style.height = divwidth.toString();
        div.textContent = 'this' ;
        container.appendChild(div);
    }
    divColoring(); 
}

function divColoring () {
    var divs = document.querySelectorAll('#container > div');
     divs.forEach(element => element.addEventListener('mouseover', function (){
         if (!earaser){
            let opp = getComputedStyle(element).opacity;
            console.log(opp);
            element.style.opacity = addOpacity(opp);
            element.style.backgroundColor ='black';
             console.log(element);
            /*use this for painting with random colors */
            // let newColor = randonNum();
            // element.style.backgroundColor = newColor;
         }else element.style.backgroundColor = 'white';
        
     }));

 }

function randonNum () {
    const hexChars = '123456789abcdef' ;
    const hexLength = 6;    
    let num = '';
    for (i =0 ;i < hexLength ; i++){
        let ranNum = Math.floor(Math.random()*hexChars.length);
        num += hexChars.substring(ranNum,ranNum+1);
    }
    return '#'+num;
}

function addOpacity (opp) {  
    let oppa = parseFloat(opp) ;
    oppa += 0.1 ;

    console.log(oppa);
    return oppa.toString();
}