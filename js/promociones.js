function obtenerValorProducto(elemento){
    let valor = parseFloat(elemento.querySelector(".precio").textContent);
    return valor;
}

function obtenerCantidad(elemento){
    let cantidad = parseInt(elemento.querySelector("input[type='number']").value);
    return cantidad;
}

function obtenerPromocion(elemento){
    return elemento.querySelector("input[promo]").getAttribute("promo");
}

function calcularDescuento(listaProductos){
    let promo3x2 = 0;
    let promo50OFF = 0;
    let promo20OFF = 0;

    let cont3x2 = 0;

    listaProductos.forEach(producto => {
        let [precio, cantidad, promo] = producto;
        console.log(precio, cantidad, promo);

        if (promo === "3x2") {
            cont3x2 += cantidad;
            if (cont3x2 % 3 == 0) {
                promo3x2 += precio;
        }}

        if (promo === "50OFF") {
            promo50OFF += (precio * 0.5) * cantidad
        }

        if (promo === "20OFF") {
            promo20OFF += (precio * 0.2) * cantidad
        }
    });
    let totalDescuentos = promo3x2 + promo50OFF + promo20OFF;
    return totalDescuentos;
}

function calcularTotal(listaProductos){
    let total = 0;
    listaProductos.forEach(producto => {
        let precio = producto[0];
        let cantidad = producto[1];
        total += precio * cantidad;
    });
    return total;
}

function unhide(calculadora){
    calculadora.classList.remove("hidden");
}


let listaProductos = []

let botones = document.querySelectorAll(".boton");
let calculadora = document.getElementById("calculadora-promociones");
let totalSinDescuento = document.getElementById("total-sin-descuento");
let descuento = document.getElementById("descuento-aplicado");
let totalFinal = document.getElementById("total-final");

botones.forEach(boton => {
    boton.addEventListener("click", (event) => {
        event.preventDefault();
        unhide(calculadora);
        let productoCard = event.target.closest(".producto-card");
        let valorProducto = obtenerValorProducto(productoCard);
        let cantidad = obtenerCantidad(productoCard);
        let promo = obtenerPromocion(productoCard);
        listaProductos.push([valorProducto, cantidad, promo]);

        let total = calcularTotal(listaProductos);
        let descuentos = calcularDescuento(listaProductos);
        let totalConDescuento = total - descuentos;

        totalSinDescuento.innerHTML = `$${total}`;
        descuento.innerHTML = `$${descuentos}`;
        totalFinal.innerHTML = `$${totalConDescuento}`;
    });
});
