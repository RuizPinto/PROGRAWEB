
function imc(){
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseInt(document.getElementById('peso').value);
    let imc = parseFloat( peso / (altura * altura)); 

    document.getElementById("resul").innerHTML = imc;

}
imc()