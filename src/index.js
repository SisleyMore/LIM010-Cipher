/* Acá va tu código */
const bienvenida= document.getElementById('bienvenida');
const paswd= document.getElementById('contraseña');
const btn= document.getElementById('btn');
const error= document.getElementById('error');
const part1= document.getElementById('part1');
const part2= document.getElementById('part2');
const botones= document.getElementById('botones');

let intentos=0;

btn.addEventListener('click', () => {
  const rptacorrecta = paswd.value;
  if (rptacorrecta ==="LABORATORIA") {
    bienvenida.style.display="none";
    error.style.display="none";
    part1.style.display="block";
    part2.style.display="block";
    botones.style.display="block";
  }
  else {
    intentos++
    alert(intentos)
    if (intentos===3) {
    bienvenida.style.display="none";
    error.style.display="block";
    part1.style.display="none";
    part2.style.display="none";
    botones.style.display="none";

    }
  }
});
