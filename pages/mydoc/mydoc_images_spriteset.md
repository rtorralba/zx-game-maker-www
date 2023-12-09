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

Los primeros 8 sprites están reservados para la animación del protagonista, los 3 primeros para el movimiento hacia la derecha, el 4º para el salto hacia la derecha, los 3 siguientes para el movimiento hacia la izquierda, y por último, el 8º para el salto hacia la izquierda.

Los siguientes 6 sprites (9 - 14) se usarán para las plataformas en movimiento encima de las cuales el protagonista podrá saltar. 3 plataformas con 2 sprites de animación para cada una.

El siguiente sprite se usará para mostrar la explosión del enemigo cuando lo mates.

Los 16 sprites restantes se usarán para los enemigos, 2 para cada enemigo, 2 frames de animación, es decir, podrás definir un total de 8 enemigos. Tiene que dibujar solamente los frames del enemigo hacia la derecha, hacia la izquierda ya los genera ZX Game Maker automáticamente.


![](./images/sprites.png)
{% include links.html %}

