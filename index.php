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
        <div class="filtros-container">
            <button class="filtro-btn active" data-categoria="todas">Todas</button>
            <button class="filtro-btn" data-categoria="principales">Principales</button>
            <button class="filtro-btn" data-categoria="postres">Postres</button>
            <button class="filtro-btn" data-categoria="ensaladas">Ensaladas</button>
        </div>
        
        <section id="comidas-list" class="section">
            <!-- Aquí se mostrarán los comidas -->
            
            <div class="comida" data-categoria="principales">
                <h2>Hamburguesa</h2>
                <p><img src="https://picsum.photos/id/237/100/100" alt = hamburguesa width="100%"></p>
                <p>Contiene tomate, lechuga, carne, huevo y cebolla</p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            <div class="comida" data-categoria="principales">
                <h2>Pizza Muzzarella</h2>
                <p><img src="https://picsum.photos/id/237/100/100" alt = pizza width="100%"></p>
                <p>Contiene muzarella, oregano y salsa de tomate</p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            <div class="comida" data-categoria="ensaladas">
                <h2>Ensalada César</h2>
                <p><img src="https://picsum.photos/id/237/100/100" alt= ensaladawidth="100%"></p>
                <p>Contiene lechuga, pollo, croutones y salsa césar</p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            <div class="comida" data-categoria="postres">
                <h2>Helado al peso</h2>
                <p><img src="https://picsum.photos/id/237/100/100" alt= ensaladawidth="100%"></p>
                <p>Contiene vainilla, chocolate y frutilla</p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            <div class="comida" data-categoria="principales">
                <h2>Asado</h2>
                <p><img src="https://picsum.photos/id/237/100/100" alt= ensaladawidth="100%"></p>
                <p>Contiene Vacio, chorizo, morcilla</p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            <div class="comida" data-categoria="principales">
                <h2>Hamburguesa Bacon</h2>
                <p><img src="https://picsum.photos/id/237/100/100" alt= ensaladawidth="100%"></p>
                <p>Contiene Bacon, carne, cebolla caramelizada y pan de papa</p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            <div class="comida" data-categoria="principales">
                <h2>Pizza Napolitana</h2>
                <p><img src="https://picsum.photos/id/237/100/100" alt= ensaladawidth="100%"></p>
                <p>Contiene queso muzarella, jamon, tomae y ajo</p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            <div class="comida" data-categoria="postres">
                <h2>Helado palito</h2>
                <p><img src="https://picsum.photos/id/237/100/100" alt= ensaladawidth="100%"></p>
                <p>Contiene anana, durazno y limon</p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            <div class="comida" data-categoria="ensaladas">
                <h2>Ensalada Griega</h2>
                <p><img src="https://picsum.photos/id/237/100/100" alt="ensalada griega" width="100%"></p>
                <p>Contiene tomate, pepino, cebolla, queso feta y aceitunas</p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            <div class="comida" data-categoria="ensaladas">
                <h2>Ensalada Caprese</h2>
                <p><img src="https://picsum.photos/id/237/100/100" alt="ensalada caprese" width="100%"></p>
                <p>Contiene tomate, mozzarella, albahaca y aceite de oliva</p>
                <button class="Agregar">Agregar al Carrito</button>
            </div>
            

        
        </section>
    </main>
    <script src="js/TAB_scripts.js"></script>
</body>
</html>
