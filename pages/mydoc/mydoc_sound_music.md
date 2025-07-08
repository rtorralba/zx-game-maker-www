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

## Que música puedes añadir en tu juego (128K)

Para tu juego puedes añadir 6 músicas distintas, para diferenciarlas tentras que nombrarlas como aparece a continuación entre paréntesis:
* Title o Menú (title.tap)
* In Game 1 (music.tap)
* In Game 2 (music2.tap)
* In Game 3 (music3.tap)
* Ending o final del juego (ending.tap)
* Game Over (gameover.tap)

De todas lás músicas anteriores el motor sabe perfectamente cuando han de sonar menos 2, In Game 2 y In Game 3, para indecarselo al motor, solo tendrás que aádir un puntero en **Tiled** como los que usas para delimitar el movimiento de los enemigos, pero con class o type, depende de la versión de Tiled **music2** para la música In Game 2 y music3 para la música In Game 3.

Con ese puntero le estarás diciendo al motor a partir de que pantalla debe sonar esa música.

Una vez suene esa musica no podrás volver a una anterior, solo podrás cambiar a la siguiente o Ending o Game Over si terminas el juego o termina tu energía.

## Como crear los TAP de música

El motor funciona con el player Vortex Tracker II de Bulba como hemos comentado, por lo que tendrás que crear o buscar ficheros para este programa, PT3, VT o VT2.

Una vez ya con la música hecha, hay que **exportar el proyecto** a un fichero music.tap dentro de la carpeta assets/music con los nombres anteriormente explicados

Para exportar iremos a la opción File > Exports > Save with ZX Spectrum player

![](images/vortex_export_menu.png)

Sólo tenéis que seleccionar para exportar la opción **TAP-file (player and module separately** y OK.

Recodad que para que la música suene tebéis que activar la propiedad en nuestro mapa **musicEnabled**

![](images/tiled_music_enabled.png)

