

function edadResul(){
    document.getElementById("anio").innerHTML = 2004;
    document.getElementById("Nombre").innerHTML = "THALIA";
    document.getElementById("Apellido").innerHTML = "RUIZ";

    const anioNacimiento = document.getElementById('anio').value;
    const anioActual = new Date().getFullYear();
    const resultado = parseInt(anioActual) - parseInt(anioNacimiento);

    document.getElementById("edad").innerHTML = resultado;
}

edadResul()