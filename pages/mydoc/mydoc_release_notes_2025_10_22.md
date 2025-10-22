---
title: Release notes. 2025-10-22
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_release_notes_2025_10_22.html
folder: mydoc
---

# Mejor integración con Tiled II

Continuamos en las mejoras de usabilidad del motro con Tiled para facilitar la creación y diseño del juego y evitar errores:

## Uso del sprite de prota para marcar la posición de este al iniciar el juego
Mucho más intuitivo y visual que usar un puntero y evitamos confundir este con los demás punteros.

![](images/mainCharacter.png)

## Eliminamos del sprite set los sprites que el usuario no debe seleccionar
En versiones anteriores en el sprite set desde tiled veías todos los sprites incluyendo por ejemplo lso frames de animación que no debían ser seleccionados.
Eliminándolos es más complicado seleccionar uno incorrecto.

![](images/allowed_spriteset.png)

## No te permite usar sprites incorrectos
Además de la mejora anterior, por si alguien por error intenta añadir un sprite no permitido, que en este caso seria todo negro, Tiled te avisa y te lo borra.

![](images/not_allowed_sprite.gif)

## Alineado a rejilla aunque intentes desalinearlo
El tiled tiene la posibilidad de alinear los elementos a rejilla, cosa que es necesaria para el motor, si no usas esa funcionalidad de tiled y colocas un objeto desalineado, de lo alinea automáticamente.

![](images/align_sprites.gif)

Aprovecho para recomendar esta fenomenal herramienta si alguien no la conoce ya o si quiere donar algo para su mantenimiento.

[https://www.mapeditor.org/](https://www.mapeditor.org/)
[https://thorbjorn.itch.io/tiled](https://thorbjorn.itch.io/tiled)

Y por supuesto agradecer a su autor [Thorbjørn Lindeijer](https://thorbjorn.itch.io/) y todos los contribuidores que mejoran cada dia esta increíble utilidad.

<iframe width="560" height="315" src="https://www.youtube.com/embed/NPAniomFQDg?si=K1AqbP4yWtJkV58y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


