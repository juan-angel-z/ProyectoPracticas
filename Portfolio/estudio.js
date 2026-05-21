const DIALOGO = document.getElementById("Vestudio");
const BOTON_ABRIR = document.getElementById("abrir_estudio");
const BOTON_CERRAR = document.getElementById("cerrar_estudio");
const BOTON_AGREGAR = document.getElementById("aniadir_estudio");
let estudios = [];
let formulario = document.getElementById("form_estudio");
let titulo = document.getElementById("titulo");
let descripcion = document.getElementById("centro");
let fecha = document.getElementById("anio");

function mostrarDialogo() {
    DIALOGO.showModal();
}

function cerrarDialogo() {
    DIALOGO.close();
}

function agregarEstudio(estudio) {
    estudios.push(estudio);
    console.log("Estudio agregado:", estudio);
    formulario.reset();
    cerrarDialogo();
}

function renderizarEstudios() {
    const listaEstudios = document.querySelector(".lista_estudios");
    listaEstudios.innerHTML = "";
    estudios.forEach(estudio => {
        const textoEstudio = `${estudio.titulo} - ${estudio.institucion} (${estudio.año})`;
        const nuevoEstudio = document.createElement("li");
        nuevoEstudio.textContent = textoEstudio;
        listaEstudios.appendChild(nuevoEstudio);
    });
}


BOTON_ABRIR.addEventListener("click", function() {
    mostrarDialogo();
});

BOTON_CERRAR.addEventListener("click", function() {
    cerrarDialogo();
});

BOTON_AGREGAR.addEventListener("click", function() {
    const estudio = {
        titulo: titulo.value,
        institucion: descripcion.value,
        año: parseInt(fecha.value)
    };
    const esValido = estudio.titulo && estudio.institucion && !isNaN(estudio.año);
    
    if (!esValido) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    agregarEstudio(estudio);
    renderizarEstudios();
});