/* Acá va tu código */
const bienvenida= document.getElementById('bienvenida');
const paswd= document.getElementById('contraseña');
const btn= document.getElementById('btn');
const error= document.getElementById('error');
const part1= document.getElementById('part1');
const part2= document.getElementById('part2');
const botones= document.getElementById('botones');
let texto= document.getElementById('texto');//cuadro para ingresar texto
let resultado= document.getElementById('resultado');//cuadro para el mensaje ya cifrado o descifrado
const botonCifrar= document.getElementById('botonCifrar');
const botonDescifrar= document.getElementById('botonDescifrar');
let offset= document.getElementById('offset');
let intentos=0;

btn.addEventListener('click', () => {
  const rptacorrecta = paswd.value;
  if (rptacorrecta ==="LABORATORIA") {
    bienvenida.classList.add('hide');
    error.classList.add('hide');
    part1.classList.remove('hide');
    part2.classList.remove('hide');
    botones.classList.remove('hide');
  }
  else {
    intentos++
    alert("Numero de intentos: "+intentos)
    if (intentos===3) {
    bienvenida.classList.add('hide');
    error.classList.remove('hide');
    part1.classList.add('hide');
    part2.classList.add('hide');
    botones.classList.add('hide');

    }
  }
});

botonCifrar.addEventListener('click', () => {
  let textoingresado= texto.value;
  let desplazamiento= offset.value;
  //document.getElementById("texto").value =cipher.encode(textoingresado, desplazamiento);
  let msjcifrado="";
  for (let i = 0; i < textoingresado.length; i++) {
  let codeAscii= textoingresado.charCodeAt(i);
  console.log(codeAscii);
     if (codeAscii>=65) {
       let cifrado= (codeAscii-65 + parseInt(desplazamiento))% 26 + 65;
       console.log(cifrado);
       msjcifrado += String.fromCharCode(cifrado);
     }
     else {
       msjcifrado+= textoingresado[i]
     }


  }
resultado.value= msjcifrado;
});

botonDescifrar.addEventListener('click', () => {
  let textoingresado= texto.value;
  let desplazamiento= offset.value;

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

resultado.value= msjdescifrado;


});
