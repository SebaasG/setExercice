const setInvitados = new Set();

function agregarInvitado(){
    const name = prompt("Ingrese el nombre del invitado");
    setInvitados.add(name);
}

function eliminarInvitado(){
    const name = prompt("Ingrese el nombre del invitado que quiere eliminar");
    setInvitados.delete(name);
}

function mostrarInvitados(){
    console.log(setInvitados);
}

function menu(){
    let opcion;
    do {
        console.log("1. Agregar invitado");
        console.log("2. Eliminar invitado");
        console.log("3. Mostrar invitados");
        console.log("4. Salir");
        opcion = parseInt(prompt("Elija una opción"));

        switch(opcion){
            case 1:
                agregarInvitado();
                break;
            case 2:
                eliminarInvitado();
                break;
            case 3:
                mostrarInvitados();
                break;
            case 4:
                console.log("Hasta luego");
                break;
            default:
                console.log("Opción no válida");
        }
    } while(opcion !== 4);
}

menu();
