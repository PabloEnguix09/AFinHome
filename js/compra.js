function verPiso(numero) {
    document.location.href = "piso.html?" + numero;
}

function refrescarTipoPiso(numero) {

}
function refrescarOtraPlanta() {
    otraPlanta();
}
function otraPlanta() {
    if(document.getElementById("plantaNum").value == "16") {
        document.getElementById("otraPlanta").hidden = false;
    }
    else if (document.getElementById("otraPlanta").hidden == false) {
        document.getElementById("otraPlanta").hidden = true;
    }
}