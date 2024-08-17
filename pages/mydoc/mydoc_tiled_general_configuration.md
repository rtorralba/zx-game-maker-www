---
title: Diseñando el juego. Configuración general
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_tiled_general_configuration.html
folder: mydoc
---

Puedes añadir configuraciones generales de tu juego en las propiedades personalizadas el mapa.

Propiedades personalizadas:

* **VTPLAYER_INIT** (string). Posición de memoria inicial para la música vortex (Se verá en el capítulo de música en el juego)
* **VTPLAYER_MUTE** (string). Posición de memoria de mute para la música vortex (Se verá en el capítulo de música en el juego)
* **VTPLAYER_NEXTNOTE** (string). Posición de memoria para reproducir la próxima nota para la música vortex (Se verá en el capítulo de música en el juego)
* **animatePeriodEnemy** (int). Número más alto, animación de los enemigos más lenta.
* **animatePeriodMain** (int). Número más alto, animación del personaje principal más lenta.
* **animatePeriodTile** (int). Número más alto, animación de los tiles más lenta.
* **bulletDistance** (int). Distancia que queramos que recorra la bala. Si seteamos una distancia corta como de 2, da el efecto de que el personaje ataca con el arma a corta distancia como una espada.
* **damageAmount** (int). Cuánto daño le hacen al personaje los enemigos.
* **enemiesRespawn** (bool). Si los enemigos (no invencibles) vuelven a aparecer des pués de matarlos al volver a entrar en la habitación.
* **gameName** (string). Nombre del juego. Aparecerá en el título loading cuando carga y el tap se generará con este nombre. 10 carácteres como máximo sin carácteres especiales (acentos, ñ...)
* **goalItems** (int). Número de items necesarios para finalizar el juego.
* **initialLife** (int). Cantidad de vida inicial del personaje.
* **lifeAmount** (int). Cantidad de vida que incrementa al personaje los items **life**.
* **maxEnemiesPerScreen** (int). Se puede configurar la cantidad de enemigos que aparecen en pantalla (hasta 5). Evitar poner más de los que se usan para optimizar espacio.
* **musicEnabled** (bool). Para habilitar o deshabilitar la música AY. Si se habilita la música el juego resultante sólo funcionará en 128K, para hacer una versión 48K tendrás que desmarcar guardar y volver a compilar.
* **shooting** (bool). Con esto habilitamos o deshabilitamos el disparo del personaje.
* **shouldKillEnemies** (bool). Con esta propiedad activa, si una habitación tiene enemigos, no podremos salir de ella hasta que los matemos a todos.
* **backgroundAttribute** (int). Color de fondo del juego en decimal en forma de atributos de spectrum. Por ejemplo para color de fondo negro con sprites en blanco seria 7 (00000111). Para color de fondo azul con sprites en blanco seria 15 (00001111). Si no se define este atributo se pintara fondo negro sprites blancos. Podéis usar la calculadora siguiente para saber que valor tenéis que poner.

<div style="margin: auto; width: 50%">
    <p>Generador de Atributos ZX Spectrum</p>
    <form id="attributeForm">
        <label for="inkColor">Color de Tinta:</label>
        <!-- Añadir color en cada opcion del select -->
        <select id="inkColor">
            <option value="0">Negro</option>
            <option value="1">Azul</option>
            <option value="2">Rojo</option>
            <option value="3">Magenta</option>
            <option value="4">Verde</option>
            <option value="5">Cyan</option>
            <option value="6">Amarillo</option>
            <option value="7" selected>Blanco</option>
        </select><br>
        <label for="paperColor">Color de Papel:</label>
        <select id="paperColor">
            <option value="0">Negro</option>
            <option value="1">Azul</option>
            <option value="2">Rojo</option>
            <option value="3">Magenta</option>
            <option value="4">Verde</option>
            <option value="5">Cyan</option>
            <option value="6">Amarillo</option>
            <option value="7">Blanco</option>
        </select><br>
        <label for="brightness">Brillo:</label>
        <input type="checkbox" id="brightness" name="brightness"><br>
        <label for="flashing">Parpadeo:</label>
        <input type="checkbox" id="flashing" name="flashing"><br>
        <button type="button" onclick="generateAttribute()">Generar Atributo</button>
    </form>
    <br>
    <p id="attributeOutput" style="font-weight: bold"></p>

    <script>
        function generateAttribute() {
            // Leer los valores de los campos de entrada
            var inkColor = document.getElementById('inkColor').value;
            var paperColor = document.getElementById('paperColor').value;
            var brightness = document.getElementById('brightness').checked;
            var flashing = document.getElementById('flashing').checked;

            // Calcular el atributo
            var attribute = calculateAttribute(inkColor, paperColor, brightness, flashing);

            // Mostrar el atributo
            document.getElementById('attributeOutput').innerText = 'Atributo: ' + attribute;
        }

        function calculateAttribute(inkColor, paperColor, brightness, flashing) {
            // Aquí es donde se calcularía el atributo basado en los colores de tinta y papel,
            // el brillo y el parpadeo. Este código es un marcador de posición y debe ser reemplazado
            // con el cálculo real.
            binaryInkColor = decimalToBinary(inkColor).padStart(3, '0');
            binaryPaperColor = decimalToBinary(paperColor).padStart(3, '0');
            binaryBrightness = brightness ? '1' : '0';
            binaryFlashing = flashing ? '1' : '0';

            decimal = parseInt(binaryFlashing + binaryBrightness + binaryPaperColor + binaryInkColor, 2)

            return decimal.toString();
        }

        function decimalToBinary(N) {
            return (N >>> 0).toString(2);
        }
    </script>
</div>

![](images/general_settings.png)


