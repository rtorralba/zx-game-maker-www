---
title: Sonido. Música
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_sound_music.html
folder: mydoc
---

## Descarga de Vortex Tracker II

Para hacer nuestra música usaremos el Vortex Tracker II.

[DESCARGA](https://bulba.untergrund.net/vortex_e.htm)

La podéis hacer vosotros mismos o tal vez alguien que entienda de musiquilla os lo puede pasar en forma de proyecto.pt3.

## Música in game

Una vez ya con la música hecha, hay que **exportar el proyecto** a un fichero music.tap dentro de la carpeta assets/music, es decir la ruta quedará **assets/music/music.tap**

Para exportar iremos a la opción File > Exports > Save with ZX Spectrum player

![](images/vortex_export_menu.png)

Tenéis que poner en la opción **Compilation address** el valor que os da en el título como máximo. No le des a OK de momento que tienes que copiar unos valores en tu proyecto.

![](images/vortex_compilation_address.png)

Ahora antes de cerrar tenéis que copiar los valores que os ha dado a la derecha en las propiedades de tu mapa en tiled (tienen que ser de tipo string).

![](images/vortex_custom_properties.png)

Ahora tenéis que **seleccionar la opción .TAP-file (player and module separately), darle a OK y guardar el fichero como music.tap en la carpeta **assets/music**

![](images/vortex_tap_file.png)

Ya finalmente hay que crear una propiedad en nuestro mapa de tipo bool para activar o desactivar la música que llamaremos **musicEnabled**

![](images/tiled_music_enabled.png)

## Música de la pantalla de título (menú)

Una vez ya con la música hecha, hay que **exportar el proyecto** a un fichero **title.tap** dentro de la carpeta assets/music, es decir la ruta quedará **assets/music/title.tap**

Para exportar iremos a la opción File > Exports > Save with ZX Spectrum player

![](images/vortex_export_menu.png)

Tenéis que poner en la opción **Compilation address** el valor **$C000** (Cuidado que es distinto de la música in game).

Ahora tenéis que **seleccionar la opción .TAP-file (player and module separately), darle a OK y guardar el fichero como title.tap en la carpeta **assets/music**

Con esto es suficiente, para la música del menú no es necesario configurar los valores en Tiled. ZX Spectrum Game Maker solo con ver el fichero ya te añadirá la música en el menú.

