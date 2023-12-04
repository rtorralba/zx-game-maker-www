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

* **bulletDistance**. (int) Distancia que queramos que recorra la bala. Si seteamos una distancia corta como de 2, da el efecto de que el personaje ataca con el arma a corta distancia como una espada.
* **damageAmount**. (int) Cuánto daño le hacen al personaje los enemigos.
* **enemiesRespawn**. (int) Con esto seteamos si queremos que los enemigos vuelvan a aparecer, aunque los hayamos matado, cuando volvemos a la habitación.
* **goalItems**. (int) Número de items necesarios para finalizar el juego.
* **initialLife**. (int) Cantidad de vida inicial del personaje.
* **lifeAmount**. (int) Cantidad de vide que incrementa al personaje los items **life**.
* **maxEnemiesPerScreen** (int). Se puede configurar la cantidad de enemigos que aparecen en pantalla (hasta 5). Evitar poner más de los que se usan para optimizar espacio.
* **musicEnabled** (bool). Para habilitar o deshabilitar la música AY. No es necesario que la deshabilites para generar el juego en 48k, el mismo juego con música funciona tanto en 48k como en 128k , simplemente en el 48k no suena la música.
* **shooting**. (bool) Con esto habilitamos o deshabilitamos el disparo del personaje.
* **shouldKillEnemies** (bool). Con esta propiedad activa, si una habitación tiene enemigos, no podremos salir de ella hasta que los matemos a todos.

![](images/general_settings.png)

{% include links.html %}

