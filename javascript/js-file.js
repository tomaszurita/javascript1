class producto{
    constructor(id, precio) {
        this.id = id;
        this.precio = precio;
    }
}
let producto1 = new producto(1, parseFloat(4700));
let producto2 = new producto(2, parseFloat(7500));
let producto3 = new producto(3, parseFloat(12300));


let compra = parseInt(prompt("¿En que producto está interesado? ¿1,2 o 3?"));

switch(compra){
    case 1:
        producto.producto2 = false;
        producto.producto3 = false;
        alert("El precio de su producto es $"+producto1.precio)
        break;
    case 2:
        producto.producto1 = false;
        producto.producto3 = false;
        alert("El precio de su producto es $"+producto2.precio)
        break;
    case 3:
        producto.producto1 = false;
        producto.producto2 = false;
        alert("El precio de su producto es $"+producto3.precio)
        break;
    default:
        alert("No se encuentra el producto seleccionado")
}

let cuotas = confirm("¿Desea pagar en cuotas sin interés?");
switch(cuotas){
    case false:
        alert("Gracias por su compra!");
        break;
    case true:
        cuotas=parseInt(prompt("¿En cuantas cuotas desea abonar? ¿3, 6, 9 o 12?"));
        break;
}

if(producto.producto1=true){
    switch(cuotas){
        case 3:
            alert("Se realizarán 3 pagos de $"+producto1.precio/3)
            break;
        case 6:
            alert("Se realizarán 6 pagos de $"+producto1.precio/6)
            break;
        case 9:
            alert("Se realizarán 9 pagos de $"+producto1.precio/9)
            break;
        case 12:
            alert("Se realizarán 12 pagos de $"+producto1.precio/12)    
            break;
        default:
            alert("No contamos con esa cantidad de cuotas.")
    }
    producto.producto2=false;
    producto.producto3=false;
}

if(producto.producto2=true){
    switch(cuotas){
        case 3:
            alert("Se realizarán 3 pagos de $"+producto2.precio/3)
            break;
        case 6:
            alert("Se realizarán 6 pagos de $"+producto2.precio/6)
            break;
        case 9:
            alert("Se realizarán 9 pagos de $"+producto2.precio/9)
            break;
        case 12:
            alert("Se realizarán 12 pagos de $"+producto2.precio/12)    
            break;
        default:
            alert("No contamos con esa cantidad de cuotas.")
    }
    producto.producto1=false;
    producto.producto3=false;
}
if(producto.producto3=true){
    switch(cuotas){
        case 3:
            alert("Se realizarán 3 pagos de $"+producto3.precio/3)
            break;
        case 6:
            alert("Se realizarán 6 pagos de $"+producto3.precio/6)
            break;
        case 9:
            alert("Se realizarán 9 pagos de $"+producto3.precio/9)
            break;
        case 12:
            alert("Se realizarán 12 pagos de $"+producto3.precio/12)    
            break;
        default:
            alert("No contamos con esa cantidad de cuotas.")
    }
    producto.producto1=false;
    producto.producto2=false;
}
