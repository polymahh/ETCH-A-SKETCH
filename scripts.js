

//let containerWidth = Math.sqrt(divcount);
const container = document.querySelector("#container");
const divinput = document.getElementById("divcount");
const count = document.getElementById("count");
const reset = document.getElementById('reset');
const eButton = document.getElementById('earaser');
let earaser = false;
let divcount = divinput.value;

fReset () ;
reset.addEventListener('click',checkdiv);

eButton.onclick = function (){
    earaser = !earaser ;
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
        console.log(divwidth);
        div.style.width = divwidth.toString();
        div.style.height = divwidth.toString();
        div.textContent = 'this' ;
        container.appendChild(div);
    }
    divColoring(); 
}

function divColoring () {
    let divs = document.querySelectorAll('#container > div');
     divs.forEach(element => element.addEventListener('mouseover', function (){
         if (!earaser){
            element.style.backgroundColor = 'black';
         }else element.style.backgroundColor = 'white';
        
     }));

 }


// //function divcolor (div){
//     div.style.backgroundColor = 'black';
    
// }