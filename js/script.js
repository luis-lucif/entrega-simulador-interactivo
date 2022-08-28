function solicitarUsuario() {
  alert("Bienvenido a tu primer setup");
  let usuario = prompt("ingresa tu usuario");
  while (usuario === "") {
    usuario = prompt("ingrese su usuario");
  }
}



function mostrarSetup() {
  let setup;
  do {
    setup = parseInt(prompt("elija su setup : \n1)Teclado\n2)Mouse\n3)Joystick"))
  } while (setup != 1 && setup != 2 && setup != 3)
  switch (setup) {
        case 1:
            return "Teclado";
        case 2: 
            return "Mouse";
        case 3: 
            return "Joystick";        

  }
}




function validarPrecio(setup){
    if(setup==="Teclado"){
        return 3000;
    }
    else if(setup==="Mouse"){
        return 2500;
    }
    else {
        return 4000;
    }
}

function cobrar(nombre,precio){
   alert("usted lleva el siguiente producto para su setup: " + nombre+"\nPrecio: $"+precio) 
    let pago = parseInt(prompt("con cuanto pagas?"))
    if(pago> precio){
        alert("Gracias su vuelto es = "+ "$" + (pago - precio))
    }
            
    else if (pago === precio) {
        alert("Gracias por su compra");
    }
    else {
        alert ("no te alcanza !!!!")
    }
}







solicitarUsuario();
let setupNombre = mostrarSetup();
let precioSetup = validarPrecio(setupNombre);
cobrar(setupNombre,precioSetup);






