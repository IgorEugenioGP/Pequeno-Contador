
let contador = 0;

const numero = document.getElementById("numero");
const Mais = document.getElementById("Mais");
const Menos = document.getElementById("Menos");
const zeror = document.getElementById("zeror");
const alerta = document.getElementById("alerta");
const fecharAlerta = document.getElementById("fecharAlerta");

Mais.onclick = function() {
    contador++;
    numero.textContent = contador;

    if(contador > 0 && contador %10 === 0){
       alerta.style.display = "flex";
    }
};

Menos.onclick = function() {
    contador--;
    numero.textContent = contador;
};

zeror.onclick = function() {
    contador = 0;
    numero.textContent = contador;
};

fecharAlerta.onclick = function(){
    alerta.style.display = "none";
}
