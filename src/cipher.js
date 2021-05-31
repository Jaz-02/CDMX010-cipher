const cipher = {
  // ...
  encode (offset, text){
    
    let cifradoFinal = "";
    let displacement = Number(offset);
    if (text!=null){
      for (let i = 0; i<text.length; i++){
      let ascii = text.charCodeAt(i);
      let formula = (((ascii - 65 + displacement) % 26) + 65);
       cifradoFinal+= String.fromCharCode(formula);
      
      } 
   
  
    } 
        
    return cifradoFinal;
  
  },

    decode (offset2, text2) {
    let cifradoFinal2 = "";
    let displacement2 = Number(offset2);
    if (text2!=null){
    for (let i = 0; i<text2.length; i++){
      let ascii2 = text2.charCodeAt(i);
      let formula2 = (((ascii2 + 65 - displacement2) % 26) + 65);

      cifradoFinal2+= String.fromCharCode(formula2);

      }
    }

    return cifradoFinal2;


  }

};


     
    





export default cipher;
