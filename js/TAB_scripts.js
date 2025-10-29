
// Empiezo con un array para almacenar los productos del carrito
let carrito = [];

function inicializarCarrito() {
    // Cargar carrito desde localStorage si existe
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarContadorCarrito();
    }

    const botonesAgregar = document.querySelectorAll('.Agregar');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });
}

function agregarAlCarrito(event) {
    const boton = event.target;
    const comidaDiv = boton.closest('.comida');
    
    // Obtener información del producto
    const nombre = comidaDiv.querySelector('h2').textContent;
    const descripcion = comidaDiv.querySelector('p:last-of-type').textContent;
    
    // Buscar si el producto ya existe en el carrito
    const productoExistente = carrito.find(item => item.nombre === nombre);
    
    if (productoExistente) {
        // Si existe, incrementar cantidad (validación: máximo 10 unidades)
        if (productoExistente.cantidad < 10) {
            productoExistente.cantidad++;
            mostrarMensaje(`Se agregó otra ${nombre} al carrito (${productoExistente.cantidad} unidades)`);
        } else {
            mostrarMensaje('Máximo 10 unidades por producto', 'error');
            return;
        }
    } else {
        const producto = {
            nombre: nombre,
            descripcion: descripcion,
            cantidad: 1,
            precio: obtenerPrecio(nombre) // Función auxiliar para simular precios
        };
        carrito.push(producto);
        mostrarMensaje(`${nombre} agregada al carrito`);
    }
    
    // Guardar en localStorage y actualizar contador
    guardarCarrito();
    actualizarContadorCarrito();
    
    // Animación del botón
    boton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        boton.style.transform = 'scale(1)';
    }, 100);
}

// Función para eliminar producto del carrito
function eliminarDelCarrito(nombre) {
    const index = carrito.findIndex(item => item.nombre === nombre);
    
    if (index !== -1) {
        carrito.splice(index, 1);
        guardarCarrito();
        actualizarContadorCarrito();
        mostrarMensaje(`${nombre} eliminada del carrito`);
        return true;
    }
    return false;
}

// Función para actualizar cantidad de un producto
function actualizarCantidad(nombre, nuevaCantidad) {
    // Validación: cantidad entre 1 y 10
    if (nuevaCantidad < 1 || nuevaCantidad > 10) {
        mostrarMensaje('La cantidad debe ser entre 1 y 10');
        return false;
    }
    
    const producto = carrito.find(item => item.nombre === nombre);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        guardarCarrito();
        actualizarContadorCarrito();
        return true;
    }
    return false;
}

// Función para calcular subtotal de un producto
function calcularSubtotal(producto) {
    return producto.precio * producto.cantidad;
}

// Función para calcular total del carrito
function calcularTotal() {
    return carrito.reduce((total, producto) => {
        return total + calcularSubtotal(producto);
    }, 0);
}

// Función para obtener cantidad total de items
function obtenerCantidadItems() {
    return carrito.reduce((total, producto) => {
        return total + producto.cantidad;
    }, 0);
}

// Función para actualizar el contador visual en el navbar
function actualizarContadorCarrito() {
    const contador = document.getElementById('carrito-contador');
    if (contador) {
        const cantidadTotal = obtenerCantidadItems();
        contador.textContent = cantidadTotal;
        
        // Mostrar/ocultar badge según cantidad
        if (cantidadTotal > 0) {
            contador.style.display = 'inline-block';
        } else {
            contador.style.display = 'none';
        }
    }
}

// Función para guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    actualizarContadorCarrito();
    mostrarMensaje('Carrito vaciado');
}

// Función para obtener el carrito completo (útil para mostrar en otra página)
function obtenerCarrito() {
    return carrito;
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarCarrito);

// Exportar funciones para uso global
window.carritoFunciones = {
    obtenerCarrito,
    eliminarDelCarrito,
    actualizarCantidad,
    vaciarCarrito,
    calcularTotal,
    calcularSubtotal,
    obtenerCantidadItems
};

// Funciones auxiliares
function obtenerPrecio(nombre) {
    const precios = {
        'Hamburguesa': 8.50,
        'Pizza Muzzarella': 12.00,
        'Ensalada César': 7.50
    };
    return precios[nombre] || 10.00;
}

function mostrarMensaje(mensaje, tipo = 'success') {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = `mensaje-carrito ${tipo}`;
    mensajeDiv.textContent = mensaje;
    document.body.appendChild(mensajeDiv);
    
    setTimeout(() => mensajeDiv.classList.add('show'), 10);
    setTimeout(() => {
        mensajeDiv.classList.remove('show');
        setTimeout(() => mensajeDiv.remove(), 300);
    }, 3000);
}

// Vista del carrito (carrito.php)
if (document.getElementById('carrito-items')) {
    document.addEventListener('DOMContentLoaded', cargarVistaCarrito);
    
    document.getElementById('btn-vaciar')?.addEventListener('click', function() {
        if (confirm('¿Vaciar todo el carrito?')) {
            vaciarCarrito();
            cargarVistaCarrito();
        }
    });
    
    document.getElementById('btn-finalizar')?.addEventListener('click', function() {
        const total = calcularTotal();
        const items = obtenerCantidadItems();
        if (confirm(`¿Finalizar compra por $${total.toFixed(2)} (${items} items)?`)) {
            alert('Gracias por tu compra');
            vaciarCarrito();
            window.location.href = '/TAB_PARCIAL_PLP3/';
        }
    });
}

function cargarVistaCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const carritoVacio = document.getElementById('carrito-vacio');
    const carritoResumen = document.getElementById('carrito-resumen');
    
    if (!carritoItems) return;
    
    carritoItems.innerHTML = '';
    
    if (carrito.length === 0) {
        carritoVacio.style.display = 'block';
        carritoResumen.style.display = 'none';
    } else {
        carritoVacio.style.display = 'none';
        carritoResumen.style.display = 'block';
        
        carrito.forEach(producto => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'carrito-item';
            itemDiv.innerHTML = `
                <div class="item-info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p class="item-precio">$${producto.precio.toFixed(2)} c/u</p>
                </div>
                <div class="item-controles">
                    <div class="cantidad-control">
                        <button class="btn-cantidad" onclick="cambiarCantidad('${producto.nombre}', -1)">-</button>
                        <input type="number" value="${producto.cantidad}" min="1" max="10" 
                               class="input-cantidad" 
                               onchange="actualizarCantidadDirecta('${producto.nombre}', this.value)">
                        <button class="btn-cantidad" onclick="cambiarCantidad('${producto.nombre}', 1)">+</button>
                    </div>
                    <div class="item-subtotal">
                        Subtotal: $${(producto.precio * producto.cantidad).toFixed(2)}
                    </div>
                    <button class="btn-eliminar" onclick="eliminarProductoVista('${producto.nombre}')">X Eliminar</button>
                </div>
            `;
            carritoItems.appendChild(itemDiv);
        });
        
        actualizarResumenVista();
    }
}

function cambiarCantidad(nombre, cambio) {
    const producto = carrito.find(item => item.nombre === nombre);
    if (producto) {
        const nuevaCantidad = producto.cantidad + cambio;
        if (nuevaCantidad >= 1 && nuevaCantidad <= 10) {
            actualizarCantidad(nombre, nuevaCantidad);
            cargarVistaCarrito();
        } else if (nuevaCantidad < 1) {
            if (confirm('¿Eliminar este producto?')) {
                eliminarProductoVista(nombre);
            }
        } else {
            alert('Máximo 10 unidades');
        }
    }
}

function actualizarCantidadDirecta(nombre, valor) {
    const cantidad = parseInt(valor);
    if (isNaN(cantidad) || cantidad < 1) {
        alert('Cantidad mínima: 1');
        cargarVistaCarrito();
        return;
    }
    if (cantidad > 10) {
        alert('Cantidad máxima: 10');
        cargarVistaCarrito();
        return;
    }
    actualizarCantidad(nombre, cantidad);
    cargarVistaCarrito();
}

function eliminarProductoVista(nombre) {
    if (confirm(`¿Eliminar ${nombre}?`)) {
        eliminarDelCarrito(nombre);
        cargarVistaCarrito();
    }
}

function actualizarResumenVista() {
    const totalItems = obtenerCantidadItems();
    const totalPrecio = calcularTotal();
    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-precio').textContent = `$${totalPrecio.toFixed(2)}`;
}
