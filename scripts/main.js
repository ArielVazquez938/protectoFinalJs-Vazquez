//PRODUCTOS
const productos = [
    //Abrigos
    {
        id: "#2357",
        titulo: "Abrigo 01",
        imagen: "./img/buzos/01.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "#2364",
        titulo: "Abrigo 02",
        imagen: "./img/buzos/02.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "#2330",
        titulo: "Abrigo 03",
        imagen: "./img/buzos/03.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "#2327",
        titulo: "Abrigo 04",
        imagen: "./img/buzos/04.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "#2381",
        titulo: "Abrigo 05",
        imagen: "./img/buzos/05.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "#2399",
        titulo: "Abrigo 06",
        imagen: "./img/buzos/06.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },

    //Camisetas
    {
        id: "#4708",
        titulo: "Camiseta 01",
        imagen: "./img/remeras/01.webp",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "#4721",
        titulo: "Camiseta 02",
        imagen: "./img/remeras/02.webp",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "#4737",
        titulo: "Camiseta 03",
        imagen: "./img/remeras/03.webp",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "#4708",
        titulo: "Camiseta 04",
        imagen: "./img/remeras/04.webp",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },

    //Pantalones
    {
        id: "#1615",
        titulo: "Pantalon 01",
        imagen: "./img/pantalones/01.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "#1622",
        titulo: "Pantalon 02",
        imagen: "./img/pantalones/02.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "#1637",
        titulo: "Pantalon 03",
        imagen: "./img/pantalones/03.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "#1647",
        titulo: "Pantalon 04",
        imagen: "./img/pantalones/04.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "#1668",
        titulo: "Pantalon 05",
        imagen: "./img/pantalones/05.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "#1671",
        titulo: "Pantalon 06",
        imagen: "./img/pantalones/06.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "#1688",
        titulo: "Pantalon 07",
        imagen: "./img/pantalones/07.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "#1693",
        titulo: "Pantalon 08",
        imagen: "./img/pantalones/08.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = ""

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML=`
                    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
        `;

        contenedorProductos.append(div);
    })
        actualizarBotonesAgregar()
}

cargarProductos(productos)

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))

        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)        
            cargarProductos(productosBoton)
        } else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }        
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito()
} else {
    productosEnCarrito = []
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }

    actualizarNumerito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))

}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito
}