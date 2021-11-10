function cambioTipoPiso() {

    enableVenta();
    enablePasos();

    switch (document.getElementById("tipoInmueble").value) {
        case "0":
        case "3":
        case "5":
            document.getElementById("detallesInmueble").innerHTML = "<h2>Detalles del inmueble</h2><h5>Planta</h5><select name='numeroPlanta' id='plantaNum' onchange='otraPlanta()'><option value='0'>Por debajo de la planta baja (-2)</option><option value='1'>Por debajo de la planta baja (-1)</option><option value='2'>Sótano</option><option value='3'>Semi-sótano</option><option value='4'>Bajo</option><option value='5'>Entreplanta</option><option value='6'>Planta 1ª</option><option value='7'>Planta 2ª</option><option value='8'>Planta 3ª</option><option value='9'>Planta 4ª</option><option value='10'>Planta 5ª</option><option value='11'>Planta 6ª</option><option value='12'>Planta 7ª</option><option value='13'>Planta 8ª</option><option value='14'>Planta 9ª</option><option value='15'>Planta 10ª</option><option value='16'>Otro</option></select><br><input type='text' id='otraPlanta' placeholder='Especifique nº de planta' hidden><br><input type='checkbox' name='ultimoBloque' id='ultimoBloque'><label for='ultimoBloque'>Es la última planta del bloque</label><h5>Puerta</h5><input type='text' class='m-0' placeholder='nº, Letra...'><br><p>No mostraremos el número de la puerta en el anuncio</p><h5>Hay más de un bloque/portal</h5><input type='radio' name='masDeUnBloque' id='noMas'><label for='noMas'>No</label><br><input type='radio' name='masDeUnBloque' id='siMas'><label for='siMas'>Sí, bloque/portal <input type='text'></label><h2>Modo de contacto preferido</h2><input type='radio' name='contacto' id='ambosModoContacto' value='ambos' onchange='toggleContacto()' checked /><label for='ambosModoContacto'>E-mail y teléfono (recomendado)</label><br /><input type='radio' name='contacto' id='emailModoContacto' value='email' onchange='toggleContacto()' /><label for='emailModoContacto'>Solo e-mail</label><br /><input type='radio' name='contacto' id='telefonoModoContacto' value='telefono'onchange='toggleContacto()' /><label for='telefonoModoContacto'>Sólo teléfono móvil</label><h2>Tus datos de contacto</h2><div class='tipoContactoInputs'><input type='email' placeholder='E-mail' class='tipoContacto' /><input type='number' placeholder='Telefono' class='tipoContacto' /><input type='text' placeholder='Nombre completo' /></div><button class='button' onclick='siguiente(datosBasicosVenta, detallesVenta)'>Siguiente</button>";

            break;
        case "1":
            disableVenta();
            document.getElementById("detallesInmueble").innerHTML = "<h2>Detalles del inmueble</h2><h5>Planta</h5><select name='numeroPlanta' id='plantaNum' onchange='otraPlanta()'><option value='0'>Por debajo de la planta baja (-2)</option><option value='1'>Por debajo de la planta baja (-1)</option><option value='2'>Sótano</option><option value='3'>Semi-sótano</option><option value='4'>Bajo</option><option value='5'>Entreplanta</option><option value='6'>Planta 1ª</option><option value='7'>Planta 2ª</option><option value='8'>Planta 3ª</option><option value='9'>Planta 4ª</option><option value='10'>Planta 5ª</option><option value='11'>Planta 6ª</option><option value='12'>Planta 7ª</option><option value='13'>Planta 8ª</option><option value='14'>Planta 9ª</option><option value='15'>Planta 10ª</option><option value='16'>Otro</option></select><br><input type='text' id='otraPlanta' placeholder='Especifique nº de planta' hidden><br><input type='checkbox' name='ultimoBloque' id='ultimoBloque'><label for='ultimoBloque'>Es la última planta del bloque</label><h5>Puerta</h5><input type='text' class='m-0' placeholder='nº, Letra...'><br><p>No mostraremos el número de la puerta en el anuncio</p><h5>Hay más de un bloque/portal</h5><input type='radio' name='masDeUnBloque' id='noMas'><label for='noMas'>No</label><br><input type='radio' name='masDeUnBloque' id='siMas'><label for='siMas'>Sí, bloque/portal <input type='text'></label><h2>Modo de contacto preferido</h2><input type='radio' name='contacto' id='ambosModoContacto' value='ambos' onchange='toggleContacto()' checked /><label for='ambosModoContacto'>E-mail y teléfono (recomendado)</label><br /><input type='radio' name='contacto' id='emailModoContacto' value='email' onchange='toggleContacto()' /><label for='emailModoContacto'>Solo e-mail</label><br /><input type='radio' name='contacto' id='telefonoModoContacto' value='telefono'onchange='toggleContacto()' /><label for='telefonoModoContacto'>Sólo teléfono móvil</label><h2>Tus datos de contacto</h2><div class='tipoContactoInputs'><input type='email' placeholder='E-mail' class='tipoContacto' /><input type='number' placeholder='Telefono' class='tipoContacto' /><input type='text' placeholder='Nombre completo' /></div><button class='button' onclick='siguiente(datosBasicosVenta, detallesVenta)'>Siguiente</button>";
            break;
        case "2":
        case "4":
        case "6":
            document.getElementById("detallesInmueble").innerHTML = "<h2>Modo de contacto preferido</h2><input type='radio' name='contacto' id='ambosModoContacto' value='ambos' onchange='toggleContacto()' checked /><label for='ambosModoContacto'>E-mail y teléfono (recomendado)</label><br /><input type='radio' name='contacto' id='emailModoContacto' value='email' onchange='toggleContacto()' /><label for='emailModoContacto'>Solo e-mail</label><br /><input type='radio' name='contacto' id='telefonoModoContacto' value='telefono'onchange='toggleContacto()' /><label for='telefonoModoContacto'>Sólo teléfono móvil</label><h2>Tus datos de contacto</h2><div class='tipoContactoInputs'><input type='email' placeholder='E-mail' class='tipoContacto' /><input type='number' placeholder='Telefono' class='tipoContacto' /><input type='text' placeholder='Nombre completo' /></div><button class='button' onclick='siguiente(datosBasicosVenta, detallesVenta)'>Siguiente</button>";
            break;
        case "7":
            disablePasos();
            document.getElementById("detallesInmueble").innerHTML = "<h2>Modo de contacto preferido</h2><input type='radio' name='contacto' id='ambosModoContacto' value='ambos' onchange='toggleContacto()' checked /><label for='ambosModoContacto'>E-mail y teléfono (recomendado)</label><br /><input type='radio' name='contacto' id='emailModoContacto' value='email' onchange='toggleContacto()' /><label for='emailModoContacto'>Solo e-mail</label><br /><input type='radio' name='contacto' id='telefonoModoContacto' value='telefono'onchange='toggleContacto()' /><label for='telefonoModoContacto'>Sólo teléfono móvil</label><h2>Tus datos de contacto</h2><div class='tipoContactoInputs'><input type='email' placeholder='E-mail' class='tipoContacto' /><input type='number' placeholder='Telefono' class='tipoContacto' /><input type='text' placeholder='Nombre completo' /></div><button id='contactarTerreno' class='button'>Contactar</button>";
            break;
        default:
            break;
    }
}

function otraPlanta() {
    if(document.getElementById("plantaNum").value == "16") {
        document.getElementById("otraPlanta").hidden = false;
    }
    else if (document.getElementById("otraPlanta").hidden == false) {
        document.getElementById("otraPlanta").hidden = true;
    }
}

function toggleContacto() {
    if (document.getElementById("ambosModoContacto").checked) {
        document.getElementsByClassName("tipoContacto")[0].hidden = false;
        document.getElementsByClassName("tipoContacto")[1].hidden = false;
    } 
    else if (document.getElementById("emailModoContacto").checked) {
        document.getElementsByClassName("tipoContacto")[0].hidden = false;
        document.getElementsByClassName("tipoContacto")[1].hidden = true;
    } 
    else {
        document.getElementsByClassName("tipoContacto")[0].hidden = true;
        document.getElementsByClassName("tipoContacto")[1].hidden = false;
    }
}

function enableVenta() {
        document.getElementsByName("Venta")[0].disabled = false;
        document.getElementsByName("Venta")[1].checked = false;
}

function disableVenta() {
    document.getElementsByName("Venta")[0].disabled = true;
    document.getElementsByName("Venta")[1].checked = true;
}

function disablePasos() {
    document.getElementById("pasosVenta").innerHTML = "<div class='pasoVentaActivo' style='width:100%'><p>1. Datos básicos</p></div>";
}

function enablePasos() {
    document.getElementById("pasosVenta").innerHTML = "<div class='pasoVentaActivo'><p>1. Datos básicos</p></div><div class='pasoVentaNoActivo'><p>2. Detalles</p></div><div class='pasoVentaNoActivo'><p>3. Fotos</p></div>";
}

function siguiente(ocultar, mostrar) {
    ocultar.hidden = true;
    mostrar.hidden = false;

    let pasosDiv = document.getElementById("pasosVenta").getElementsByTagName("div");

    for (let i = 0; i < pasosDiv.length; i++) {
        if (pasosDiv[i].classList.contains("pasoVentaActivo")) {
            pasosDiv[i].classList.remove("pasoVentaActivo");
            pasosDiv[i].classList.add("pasoVentaNoActivo");
            pasosDiv[i+1].classList.remove("pasoVentaNoActivo");
            pasosDiv[i+1].classList.add("pasoVentaActivo");
            break;
        }
    }
}

function anterior(ocultar, mostrar) {
    ocultar.hidden = true;
    mostrar.hidden = false;

    let pasosDiv = document.getElementById("pasosVenta").getElementsByTagName("div");

    for (let i = 0; i < pasosDiv.length; i++) {
        if (pasosDiv[i].classList.contains("pasoVentaActivo")) {
            pasosDiv[i].classList.remove("pasoVentaActivo");
            pasosDiv[i].classList.add("pasoVentaNoActivo");
            pasosDiv[i-1].classList.remove("pasoVentaNoActivo");
            pasosDiv[i-1].classList.add("pasoVentaActivo");
            break;
        }
    }
}

