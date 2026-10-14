
let contador = 0;

const nummero = document.getElementById("numero");
const Mais = document.getElementById("Mais");
const Menos = document.getElementById("Menos");
const zeror = document.getElementById("zeror");

Mais.onclick = function() {
    contador++;
    numero.textContent = contador;
};

Menos.onclick = function() {
    contador--;
    numero.textContent = contador;
};

zeror.onclick = function() {
    contador = 0;
    numero.textContent = contador;
};
