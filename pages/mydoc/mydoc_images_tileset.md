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
* El **segundo tile** está reservado para **"la bala"** que disparará tu protagonista. El motor hace volteado horizontal automático para cuando disparas a un sentido u otro. Si tu "bala" tiene sentido solo tienes que diseñarla en este tile hacia la derecha.
* Los **siguientes 62 tiles** serán considerados como **sólidos**, es decir, cuando lo coloques en tu mapa, el protagonista no podrá traspasarlos, son los típicos que se usan para paredes, plataformas... Puerta shouldKillEnemies. El último tile de los solidos seá considerada puerta que se abrirá cuando mates a todos los enemigos de esa habitación.
* Los **siguientes 16 tiles** serán considerados plataformas estáticas. Estas seran traspasables por el protagonirsta desde abajo.
* Los **tiles restantes**, salvo los 5 últimos, serán considerados no sólidos. Si quieres añadir tiles que le causen daño al personaje principal tiene que estar en estos tiles.
** Los **Últimos 5 tiles** son tiles especiales para objetos cuyo funcionamiento se definira en Tiled.

![](./images/tiles.png)


