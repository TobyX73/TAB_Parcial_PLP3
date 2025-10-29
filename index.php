<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mamelodies Fast Food</title>
    <link rel="stylesheet" href="css/TAB_estilos.css">
</head>
<body>
    <?php include 'includes/TAB_navbar.php'; ?>
    <header>
        <h1>Menu de comida Rapida</h1>
    </header>
    <main>
        <section id="comidas-list" class="section">
            <!-- Aquí se mostrarán los comidas -->
            
            <div class="comida">
                <h2>Hamburguesa</h2>
                <p>Contiene tomate, lechuga, carne, huevo y cebolla</p>
                <p><img src="https://picsum.photos/id/237/100/100" alt = hamburguesa width="100%"></p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            <div class="comida">
                <h2>Pizza Muzzarella</h2>
                <p>Contiene muzarella, oregano y salsa de tomate</p>
                <p><img src="https://picsum.photos/id/237/100/100" alt = pizza width="100%"></p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            <div class="comida">
                <h2>Ensalada César</h2>
                <p>Contiene lechuga, pollo, croutones y salsa césar</p>
                <p><img src="https://picsum.photos/id/237/100/100" alt= ensaladawidth="100%"></p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>

        
        </section>
    </main>
    <script src="js/TAB_script.js"></script>
</body>
</html>
