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

Tienes que crear (o editar) una imagen de 256x48px (assets/tiles.png) que se usará para diseñar tus pantallas.

ZX Game Maker trabaja con tiles de 8x8px, en consecuencia tienes disponibles 256 tiles para diseñar tus escenarios.

Para crear tu tileset debes tener en cuenta algunas regla, recuerda que tienes uno de ejemplo para simplemente editarlo.

* El **primer tile** está reservado para el **fondo**.
* El **segundo tile** está reservado para **"la bala"** que disparará tu protagonista. El motor hace volteado horizontal automático para cuando disparas a un sentido u otro. Si tu "bala" tiene sentido solo tienes que diseñarla en este tile hacia la derecha.
* Los **siguientes 62 tiles** serán considerados como **sólidos**, es decir, cuando lo coloques en tu mapa, el protagonista no podrá traspasarlos, son los típicos que se usan para paredes, plataformas... Si quieres añadir tiles que le causen daño al personaje principal tiene que estar en estos 62 tiles.
* Los **siguientes 16 tiles** serán considerados plataformas estáticas. Estas seran traspasables por el protagonirsta desde abajo.

![](./images/tiles.png)

{% include links.html %}

