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

   resultado.value =cipher.encode(desplazamiento,textoingresado);
});

botonDescifrar.addEventListener('click', () => {
  let textoingresado= texto.value;
  let desplazamiento= offset.value;

   resultado.value= cipher.decode(desplazamiento,textoingresado);

});
