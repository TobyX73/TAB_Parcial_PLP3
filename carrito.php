<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Carrito - Mamelodies Fast Food</title>
    <link rel="stylesheet" href="css/TAB_estilos.css">
</head>
<body>
    <?php include 'includes/TAB_navbar.php'; ?>
    <header>
        <h1>Mi Carrito de Compras</h1>
    </header>
    <main>
        <section class="carrito-container">
            <div id="carrito-items"></div>
            
            <div id="carrito-vacio" style="display:none;">
                <p>Tu carrito está vacío</p>
                <a href="/TAB_PARCIAL_PLP3/" class="btn-volver">Volver al menú</a>
            </div>
            
            <div id="carrito-resumen" style="display:none;">
                <div class="resumen-box">
                    <h3>Resumen del Pedido</h3>
                    <div class="resumen-linea">
                        <span>Total de items:</span>
                        <span id="total-items">0</span>
                    </div>
                    <div class="resumen-linea total">
                        <span>Total a pagar:</span>
                        <span id="total-precio">$0.00</span>
                    </div>
                    <button id="btn-finalizar" class="btn-finalizar">Finalizar Compra</button>
                    <button id="btn-vaciar" class="btn-vaciar">Vaciar Carrito</button>
                </div>
            </div>
        </section>
    </main>
    <script src="js/TAB_scripts.js"></script>
</body>
</html>
