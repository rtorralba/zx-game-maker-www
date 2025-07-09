---
title: Imágenes base. Tileset
tags: [documentation]
keywords:
summary: "Creación de la imagen que contendrá los tiles para pintar tus pantallas"
sidebar: mydoc_sidebar
permalink: mydoc_images_tileset.html
folder: mydoc
---

## Tileset

Tienes que crear (o editar) una imagen de 256x48px (assets/tiles.zxp) que se usará para diseñar tus pantallas.

ZX Spectrum Game Maker trabaja con tiles de 8x8px, en consecuencia tienes disponibles 256 tiles para diseñar tus escenarios.

Para crear tu tileset debes tener en cuenta algunas regla, recuerda que tienes uno de ejemplo para simplemente editarlo.

* El **primer tile** está reservado para el **fondo**.
* Los **siguientes 63 tiles** serán considerados como **sólidos**, es decir, cuando lo coloques en tu mapa, el protagonista no podrá traspasarlos, son los típicos que se usan para paredes, plataformas... Puerta shouldKillEnemies. El último tile de los solidos seá considerada puerta que se abrirá cuando mates a todos los enemigos de esa habitación. El penúltimo, si está activada la opción se considerará tile rompible.
* Los **siguientes 16 tiles** serán considerados plataformas estáticas. Estas seran traspasables por el protagonirsta desde abajo y desde arriba.
* Los **tiles restantes**, salvo los 5 últimos, serán considerados no sólidos. Si quieres añadir tiles que le causen daño al personaje principal o que sean animados tienen que estar en estos tiles.
** Los **Últimos 5 tiles** son tiles especiales para objetos cuyo funcionamiento se definira en Tiled.

![](./images/tiles.png)


