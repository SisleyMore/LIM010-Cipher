window.cipher = {
  encode: (desplazamiento,textoingresado) => {
    /* código que cifra*/
      let msjcifrado="";
      for (let i = 0; i < textoingresado.length; i++) {     /*Para que recorra todas las letras*/
      let codeAscii= textoingresado.charCodeAt(i);
      // console.log(codeAscii);
        if (codeAscii>=65 && codeAscii<=90) {
          let cifrado= (codeAscii-65 + parseInt(desplazamiento))% 26 + 65;
           // console.log(cifrado);
          msjcifrado += String.fromCharCode(cifrado);
        }
        else if (codeAscii>=97 && codeAscii<=122) {
          let cifrado= (codeAscii-97 + parseInt(desplazamiento))% 26 +97;
          msjcifrado += String.fromCharCode(cifrado);
          
        }

        else {
           msjcifrado+= textoingresado[i]     /* Para que reconozca espacios*/
        }


      }
    return msjcifrado;
  
  },
  decode: (desplazamiento,textoingresado) => {
    /* código que descifra*/
      let msjdescifrado="";
      for (let i = 0; i < textoingresado.length; i++) {
      let codeAscii= textoingresado.charCodeAt(i);
      // console.log(codeAscii);
          if (codeAscii>=65 && codeAscii<=90) {
            let descifrado= (codeAscii-65 -  parseInt(desplazamiento))% 26 + 65;
            if (descifrado<65) {
               descifrado= descifrado+26;
              }
              
            msjdescifrado += String.fromCharCode(descifrado);
          }
          else if (codeAscii>=97 && codeAscii<=122) {
            let descifrado= (codeAscii-97 -  parseInt(desplazamiento))% 26 + 97;
            
            if (descifrado<97) {
              descifrado= descifrado+26;
             }
            msjdescifrado += String.fromCharCode(descifrado);
          }
          else {
            msjdescifrado+= textoingresado[i]
          }

      }

    return msjdescifrado;
  }
};
