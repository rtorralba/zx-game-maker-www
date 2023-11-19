---
title: Imágenes base. Pantallas
tags: [documentation]
keywords:
summary: "Creación de imágenes base que utilizarás para crear tu juego"
sidebar: mydoc_sidebar
permalink: mydoc_images_screens.html
folder: mydoc
---

Para crear tus juegos para ZX Spectrum necesitas crear/editar algunas imágenes.

**Pantallas** como la principal, de carga, HUD... y el **Tileset** o conjunto de tiles que usarás para diseñar tu mapa y el **Spriteset** o conjunto de sprites como el personaje principal, enemigos...

Tienes que crear 4 pantallas en PNG en la carpeta assets/screens loading.png, title.png, ending.png y hud.png

Para el diseño de las mismas sólo podéis utilizar la paleta de colores del ZX Spectrum, si usáis programas especializados como [ZX Paintbrush](https://sourcesolutions.itch.io/zx-paintbrush) ya lo tienen en cuenta.

Tenéis ejemplos en la misma carpeta para simplemente modificar las pantallas existentes y ver que requisitos tienen (tamaño...)

## Carga

Esta imagen (assets/screens/loading.png) será usada en la pantalla de carga. Es la que se muestra mientras tu juego está cargando.

![](images/loading.png)

## Pantalla principal

Esta imagen (assets/screens/title.png) es la que se muestra nada más cargar el juego y que debe contener las opciones que puede seleccionar el usuario.

1. Teclado
2. Kempston
3. Sinclair

Nos ayudaría bastante que en la pantalla de inicio añadieras nuestro logo. Puedes encontrar una versión para spectrum [aquí](images/logo_spectrum.png)

![](images/title.png)

## Ending

Esta imagen (assets/screens/ending.png) se mostrará cuando el usuario se pase el juego.

![](images/ending.png)

## HUD


Esta imagen (assets/screens/hud.png) se mostrará debajo de tu juego para indicarle al usuario cuanta vida le queda y cuantas llaves e items ha recolectado.

Tiene el mismo tamaño que las anteriores pero solo necestas diseñar la parte de abajo.

![](images/hud.png)

{% include links.html %}

