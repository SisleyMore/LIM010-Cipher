/* Acá va tu código */
const bienvenida= document.getElementById('bienvenida');
const paswd= document.getElementById('contraseña');
const btn= document.getElementById('btn');
const error= document.getElementById('error');
const part1= document.getElementById('part1');
const part2= document.getElementById('part2');
const botones= document.getElementById('botones');
const texto= document.getElementById('texto');
const resultado= document.getElementById('resultado');
const boton_cifrar= document.getElementById('boton_cifrar');
const boton_descifrar= document.getElementById('boton_descifrar');
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
    alert("Numero de intentos: "+intentos)
    if (intentos===3) {
    bienvenida.style.display="none";
    error.style.display="block";
    part1.style.display="none";
    part2.style.display="none";
    botones.style.display="none";

    }
  }
});

boton_cifrar.addEventListener('click', () => {
  const textoingresado= texto.value
        for(let i=0; i<texto.length; i++) { //el for recorrera las letras del texto a cifrar//

        if (parseInt(texto[i])%1 === 0) //condicionar para no ingresar numeros//
           texto = prompt("Por favor ingrese un texto sin numeros ni espacios");

        const ubicacionCesar=(texto.toUpperCase().charCodeAt(i) - 65 + 33) % 26 + 65;

        const palabraCifrada= String.fromCharCode(ubicacionCesar);

    cifrado+= palabraCifrada; //acumular las letras cifradas//

    }


});
