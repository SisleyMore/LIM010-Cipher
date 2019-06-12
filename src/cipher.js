window.cipher = {
  encode: (desplazamiento,textoingresado) => {
    /* código que cifra*/
      let msjcifrado="";
      for (let i = 0; i < textoingresado.length; i++) {     /*Para que recorra todas las letras*/
      let codeAscii= textoingresado.charCodeAt(i);
      console.log(codeAscii);
         if (codeAscii>=65) {
           let cifrado= (codeAscii-65 + parseInt(desplazamiento))% 26 + 65;
           console.log(cifrado);
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
      console.log(codeAscii);
          if (codeAscii>=65) {
            let descifrado= (codeAscii-65 -  parseInt(desplazamiento))% 26 + 65;
             if (descifrado<65) {
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
