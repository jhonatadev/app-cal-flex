var etanol, gasolina;

function cal() {
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));

    if (etanol < 0.7 * gasolina){
        document.getElementById('status').src="img/etanol.png";
    }else {
        document.getElementById('status').src="img/gasolina.png";
    }
}

function limpaTudo() {
    document.getElementById('status').src="img/neutro.png";
}