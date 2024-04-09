---
title: Instalación. ZX Paintbrush
tags: [getting_started, troubleshooting]
keywords:
summary: "Necesitas un editor de imágenes para diseñar algunas pantallas de tu juego como la pantalla inicial, carga, principal... Y el conjunto de tiles (los cuadraditos que sirven para diseñar las pantallas) y sprites (Personaje principal, enemigos...)."
sidebar: mydoc_sidebar
permalink: mydoc_install_image_editor.html
folder: mydoc
---

# ZX Paintbrush

Necesitas un editor de imágenes para diseñar algunas pantallas de tu juego como la pantalla inicial, carga, principal... Y el conjunto de tiles (los cuadraditos que sirven para diseñar las pantallas) y sprites (Personaje principal, enemigos...).

Cada una de las imágenes del engine tiene su fichero .zxp (loading.zxp, title.zxp, hud.zxp, ending.zxp) para que lo edites desde ZX Paintbrush y exportes a png cuando tengas que generar el juego.

[ZX PAINTBRUSH](https://sourcesolutions.itch.io/zx-paintbrush)

Si eres usuario de linux lo podrás ejecutar perfectamente con wine.

## ¿Porque el ZX Paintbrush?

Inicialmente el motor trabajaba con png, pero las imágenes para zx paintbrush tiene más datos de los que un png puede guardar:
* De los dos colores de un caracter cual es el "paper" o el "ink"
* Brillo del caracter activado o desactivado
* Flash del caracter activado o desactivado

Podriamos haber seleccionado otro programa que tambien maneje estos datos, pero por secillez de uso, funcionalidades y facilidad de manejo de ficheros del proyecto hemos elegido el ZX Paintbrush de **Claus Jahn**