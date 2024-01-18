---
title: Imágenes base. Spriteset
tags: [documentation]
keywords:
summary: "Creación de la imagen que contendra el sprite del personaje, enemigos..."
sidebar: mydoc_sidebar
permalink: mydoc_images_spriteset.html
folder: mydoc
---

Debes crear/editar el fichero assets/sprites.png de 256x32px añadiendo tus sprites (personaje, enemigos...) y donde cada uno de estos tendrá una dimensión de 16x16px.

### Primera fila
Los primeros 8 sprites están reservados para la animación del protagonista:
* Los 2 primeros para el movimiento hacia la derecha
* El 3ª 1er frame de subir/bajar escaleras. 
* El 4º para el salto hacia la derecha.
* El 5º y 6º siguientes para el movimiento hacia la izquierda.
* El 7º 2º frame de subir/bajar escaleras
* El 8º para el salto hacia la izquierda.

Los siguientes 6 sprites (9 - 14) se usarán para las plataformas en movimiento encima de las cuales el protagonista podrá saltar. 3 plataformas con 2 sprites de animación para cada una.

El 15 de momento queda libre.

El último sprite, el 16, se usará para mostrar la explosión del enemigo cuando lo mates.

### Segunda fila
Los 16 sprites de la segunda fila se usarán para los enemigos, 2 para cada enemigo, 2 frames de animación, es decir, podrás definir un total de 8 enemigos. Tiene que dibujar solamente los frames del enemigo hacia la derecha, hacia la izquierda ya los genera ZX Game Maker automáticamente.


![](./images/sprites.png)
{% include links.html %}

