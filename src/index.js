//import { SourceCode } from 'eslint';
import cipher from './cipher.js';

document.getElementById("buttonCode").addEventListener("click", function(){
    
    let text = document.getElementById("userText").value;
   
    let offset= document.getElementById("desplazamiento").value;
    
    document.getElementById("textcode").value = cipher.encode(offset,text);
  





});

document.getElementById("buttonDecode").addEventListener("click", function(){
    
  let text2 = document.getElementById("userText").value;
 
  let offset2= document.getElementById("desplazamiento").value;
  
  document.getElementById("textcode").value = cipher.decode(offset2,text2);




});



   // let cifrado = document.querySelector("encode");text
 //}

console.log(cipher);
