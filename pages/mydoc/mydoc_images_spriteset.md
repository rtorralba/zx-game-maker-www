---
title: Imágenes base. Spriteset
tags: [documentation]
keywords:
summary: "Creación de la imagen que contendra el sprite del personaje, enemigos..."
sidebar: mydoc_sidebar
permalink: mydoc_images_spriteset.html
folder: mydoc
---

Debes crear/editar el fichero assets/sprites.zxp de 256x32px añadiendo tus sprites (personaje, enemigos...) y donde cada uno de estos tendrá una dimensión de 16x16px.

## Primera fila

### Vista lateral (Plataformas)

Los primeros 8 sprites están reservados para la animación del protagonista:
* Los 2 primeros para el movimiento hacia la derecha
* El 3ª frame hacia la derecha extra si la opción **mainCharacterExtraFrame** está activada. 
* El 4º para el salto hacia la derecha.
* El 5º y 6º siguientes para el movimiento hacia la izquierda.
* El 7º El 3ª frame hacia la izquierda extra si la opción **mainCharacterExtraFrame** está activada. 
* El 8º para el salto hacia la izquierda.
* 9º y 10º Plataforma 1
* 11º y 12º Plataforma 2
* 13º y 14º Animación idle del personaje si la opción **idleTime** es distinta de 0 o Plataforma 3
* 15º Libre
* El 16, se usará para mostrar la explosión del enemigo cuando lo mates.

![](./images/sprites.png)

### Vista cenital

Los primeros 8 sprites están reservados para la animación del protagonista:
* 1 y 2 movimiento hacia la derecha.
* 3 y 4 movimiento hacia la izquierda.
* 5 y 6 movimiento hacia arriba.
* 7 y 8 movimiento hacia abajo.
* 9 - 15 libres

El último sprite, el 16, se usará para mostrar la explosión del enemigo cuando lo mates.

## Segunda fila
Los 16 sprites de la segunda fila se usarán para los enemigos, 2 para cada enemigo, 2 frames de animación, es decir, podrás definir un total de 8 enemigos. Tiene que dibujar solamente los frames del enemigo hacia la derecha.

![](./images/sprites_cenital.png)

## Enemigos hacia la izquierda
El motor si solo tienes 2 filas de sprites **generará los sprites de los enemigos automáticamente hacia la izquierda** debajo de lo que se han definido quedando de la siguiente manera:

![](./images/sprites_izquierda_automated.png)

Si quieres customizar los enemigos hacia la izquierda lo único que tienes que hacer es añadir al PNG una fila más al spriteset, entonces el motor entenderá que prefieres definir tu el espejo de los sprites y no lo hará automáticamente. Por ejemplo en la siguiente imagen de manera manual hemos definido que el primer enemigo hacia la izquierda tiene el mismo sprite, por lo tanto no girará.

![](./images/sprites_izquierda_manual.png)

![](./images/sprites_izquierda_manual.gif)

Para añadir una fila debajo del spriteset solo tendremos de aumentar el tamaño en altura de 32 a 48 diciendole que crezca hacía abajo. Para hacerlo desde ZX Paintbrush iremos al menú View -> Resize picture y en **Select dest. orientation** seleccionaremos la 2ª opción y en **height pondremos 48**

![](./images/zx-paintbrush-resize-picture-menu.png)
![](./images/zx-paintbrush-resize-picture-options.png)

