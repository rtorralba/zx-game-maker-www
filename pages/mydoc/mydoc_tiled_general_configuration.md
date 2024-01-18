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
* **backgroundAttibute** (int). Color de fondo del juego en decimal en forma de atributos de spectrum. Por ejemplo para color de fondo negro con sprites en blanco seria 7 (00000111). Para color de fondo azul con sprites en blanco seria 15 (00001111). Si no se define este atributo se pintara fondo negro sprites blancos.
* **bulletDistance** (int). Distancia que queramos que recorra la bala. Si seteamos una distancia corta como de 2, da el efecto de que el personaje ataca con el arma a corta distancia como una espada.
* **gameName** (string). Nombre del juego. Aparecerá en el título loading cuando carga y el tap se generará con este nombre. 10 carácteres como máximo sin carácteres especiales (acentos, ñ...)
* **damageAmount** (int). Cuánto daño le hacen al personaje los enemigos.
* **goalItems** (int). Número de items necesarios para finalizar el juego.
* **initialLife** (int). Cantidad de vida inicial del personaje.
* **lifeAmount** (int). Cantidad de vida que incrementa al personaje los items **life**.
* **maxEnemiesPerScreen** (int). Se puede configurar la cantidad de enemigos que aparecen en pantalla (hasta 5). Evitar poner más de los que se usan para optimizar espacio.
* **musicEnabled** (bool). Para habilitar o deshabilitar la música AY. No es necesario que la deshabilites para generar el juego en 48k, el mismo juego con música funciona tanto en 48k como en 128k , simplemente en el 48k no suena la música.
* **shooting** (bool). Con esto habilitamos o deshabilitamos el disparo del personaje.
* **shouldKillEnemies** (bool). Con esta propiedad activa, si una habitación tiene enemigos, no podremos salir de ella hasta que los matemos a todos.

![](images/general_settings.png)

{% include links.html %}

