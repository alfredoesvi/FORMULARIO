let lista_empleados =[];


const obj_empleado =
{
    id: "",
    nombres: "",
    apellidos: ""
}

let editar =false;

const formulario = document.querySelector("#formulario");

const nombre_imput = document.querySelector("#nombres");

const apellidos_imput = document.querySelector("#apellidos");

const btn_enviar__imput = document.querySelector("#btn_agregar");


formulario.addEventListener('submit', validar_formulario)

function validar_formulario(e){
    e.preventDefault();

    if(nombre_imput.value === "" || apellidos_imput ===""){
        alert("Rellene todos los campos");
        return;
    }

    if(editar){
        editar_persona();

    }else{
        obj_empleado.id = Date.now();
        obj_empleado.nombres = nombre_imput.value;
        obj_empleado.apellidos = apellidos_imput.value;

    } 

    agregando_persona();
}

function agregando_persona(){
    
    lista_empleados.push({...obj_empleado});
    mostrar_persona();
    formulario.reseat();
    limpiar_objeto();
}

function limpiar_objeto(){
    obj_empleado.id = ' ';
    obj_empleado.nombres = ' ';
    obj_empleado.apellidos = ' ';
}

function limpiar_html(){
    const div_empleado = document.querySelector('.div_empleados');
    while (div_empleado.firstChild){
        div_empleado.removeChild(div_empleado.firstChild);
    }
}


function mostrar_persona(){

    limpiar_html();

    const div_empleado = document.querySelector(".div_empleados");

    lista_empleados.forEach(persona => {
        const {id, nombres, apellidos} = persona;
    
        const parrafo = document.createElement("p");
        parrafo.textContent = `${id} - ${nombres} - ${apellidos}-`;

        parrafo.dataset.id = id;
       
        const editar_boton = document.createElement("button");
        editar_boton.onclickv = () => cargar_empleado(persona);
        editar_boton.textContent = 'Editar';
        editar_boton.classList.add('btn', 'btn_editar');
        parrafo.append(editar_boton);

        const eliminar_boton = document.createElement("button");
        eliminar_boton.onclickv = () => eliminar_empleado(id);
        eliminar_boton.textContent = 'Eliminar';
        eliminar_boton.classList.add('btn', 'btn_eliminar');
        parrafo.append(eliminar_boton);

        const hr = document.createElement('hr');

        div_empleado.appendChild(parrafo);
        div_empleado.appendChild(hr);
    })
}





function cargar_empleado(persona){
    const {id, nombres, apellidos} = persona;
    nombre_imput.value = nombres;
    apellidos_imput.value = apellidos;
    obj_empleado.id = id;

    formulario.querySelector("button" [type ="submit"]).textContent = "Actualizar";

    editar = true;
}

function eliminar_empleado(id){
    lista_empleados = lista_empleados.filter(empleado => empleado.id !== id);

    mostrar_persona();
}


function editar_persona(){
    obj_empleado.nombres = nombre_imput.value;
    obj_empleado.apellidos = apellidos_imput.value;

    lista_empleados.map(persona =>{
        if(persona.id === obj_empleado.id){
            persona.id = obj_empleado.id;
            persona.nombres = obj_empleado.nombres;
            persona.apellidos = obj_empleado.apellidos;
        }
    });

    limpiar_html;
}