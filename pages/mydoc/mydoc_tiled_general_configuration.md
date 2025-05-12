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

Para mostrar estás configuraciones tienes que ir al menú Mapa -> Atributos del mapa.

Propiedades personalizadas:

* **128Kenabled**. Habilitar el modo 128K, si está desactivado se generará el juego para 48K.
* **VTPLAYER_INIT**. Posición de memoria inicial para la música vortex (Se verá en el capítulo de música en el juego)
* **VTPLAYER_MUTE**. Posición de memoria de mute para la música vortex (Se verá en el capítulo de música en el juego)
* **VTPLAYER_NEXTNOTE**. Posición de memoria para reproducir la próxima nota para la música vortex (Se verá en el capítulo de música en el juego)
* **ammo**. Cantidad de munición con la que empezará el personaje principal. Si seteas -1 el personaje tendrá munición infinita.
* **ammoIncrement**. Cantidad de munición que se recarga cada vez que el protagonista recoja un item de recarga de munición.
* **animatePeriodEnemy**. Número más alto, animación de los enemigos más lenta.
* **animatePeriodMain**. Número más alto, animación del personaje principal más lenta.
* **animatePeriodTile**. Número más alto, animación de los tiles más lenta.
* **arcadeMode**. Si esta propiedad está activada el juego se comportará en modo arcade. Puedes ver este comportamiento [aqui](https://gm.retrojuegos.org/mydoc_tiled_arcade_mode.html).
* **border**. Color del borde in game. Muy útil cuando se cambia el color de fondo del juego y del hud.
* **bulletDistance**. Distancia que queramos que recorra la bala. El valor 0 se traduce como distancia infinita, la bala no parará hasta que choque con algún obstáculo. Si seteamos una distancia corta como de 2, da el efecto de que el personaje ataca con el arma a corta distancia como una espada.
* **damageAmount**. Cuánto daño le hacen al personaje los enemigos.
* **enemiesPursuit**. Esto permite indicar que enemigos marcados con **followPlayer** persigan a tu personaje.
* **enemiesRespawn**. Si los enemigos (no invencibles) vuelven a aparecer des pués de matarlos al volver a entrar en la habitación.
* **gameName**. Nombre del juego. Aparecerá en el título loading cuando carga y el tap se generará con este nombre. 10 carácteres como máximo sin carácteres especiales (acentos, ñ...)
* **gameView**. Tipo de juego a desarrollar, side es un juego de plataformas lateral, y overhead, un juego de vista cenital.
* **goalItems**. Número de items necesarios para finalizar el juego.
* **hiScore**. Habilita la puntuación in game y el guardado de la misma para que aparezca en la pantalla de menú.
* **idleTime**. Setea el tiempo a esperar a que el personaje haga la animación idle. Si está a 0 no se activará.
* **initialLife**. Cantidad de vida inicial del personaje.
* **ink**. Color de la tinta in game. Muy útil cuando se cambia el color de fondo del juego y del hud.
* **itemsCountdown**. El marcador de items mostrará el número total de items que tiene que conseguir el jugador al principio del juego e irá descendiendo para que veas los items que te quedan por recoger.
* **itemsEnabled**. Si no está habilitado no se mostrará el marcador de items.
* **jetPackFuel**. La cantidad de fuel para el jetPack, se es ditinto de 0 el personaje no saltará y se impulsará con el jetPack.
* **jumpType**. **constant** Salto con una velocidad hacia arriba y hacia abajo constante, el original del motor. **accelerated** Salto con deceleración hacia arriba y acelereción hacia abajo.
* **keysEnabled**. Si no está habilitado no se podrán usar llaves ni puertas de las que se abren con llaves.
* **killJumpingOnTop**. Habilita el poder de matar a los enemigos saltando encima. (Solo juego plataformas)
* **lifeAmount**. Cantidad de vida que incrementa al personaje los items **life**.
* **mainCharacterExtraFrame**. Si está habilitado, la animación del personaje usara el frame extra.
* **maxAnimatedTilesPerScreen**. Máximo de tiles animados por pantalla (10 máximo). Si utilizas menos pon un valor más bajo para ahorrar espacio.
* **maxEnemiesPerScreen**. Se puede configurar la cantidad de enemigos que aparecen en pantalla (hasta 5). Evitar poner más de los que se usan para optimizar espacio.
* **musicEnabled**. Para habilitar o deshabilitar la música AY. Si se habilita la música el juego resultante sólo funcionará en 128K, para hacer una versión 48K tendrás que desmarcar guardar y volver a compilar.
* **newBeeperPlayer**. Para utilizar en nuevo reproductor de beeper mejorado para que el juego se pare mucho menos mientras suena debes activar esta opción. IMPORTANTE: Si quieres aprovechar las bondades de este nuevo player debes hacer los sonidos como se indica en [la sección de FX del manual](/mydoc_sound_fx.html).
* **paper**. Color del papel in game. Muy útil cuando se cambia el color de fondo del juego y del hud.
* **password**. Password que se pedirá al iniciar el juego para poder jugar. Útil para juegos con más de una carga con sistema de passwords. El password debe ser de 8 caracteres y puede ser alfanumérico, pero no utilices carácteres no ingleses como ñ, acentos...
* **redefineKeysEnabled**. Habilita la opción de redefinir teclas.
* **shooting**. Con esto habilitamos o deshabilitamos el disparo del personaje.
* **shouldKillEnemies**. Con esta propiedad activa, si una habitación tiene enemigos, no podremos salir de ella hasta que los matemos a todos.
* **useBreakableTile**. Posibilidad de usar tiles que se rompen. Si está habilitado el tile que se romperá será el que esté definido en la posición 63 del tileset.
* **waitPressKeyAfterLoad**. Si habilitas esta opción, tras la carga el juego esperará que pulses una tecla para mostrar el menú.
* **backgroundAttribute**. Color de fondo del juego en decimal en forma de atributos de spectrum. Por ejemplo para color de fondo negro con sprites en blanco seria 7 (00000111). Para color de fondo azul con sprites en blanco seria 15 (00001111). Si no se define este atributo se pintara fondo negro sprites blancos. Podéis usar la calculadora siguiente para saber que valor tenéis que poner.

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


