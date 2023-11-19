---
title: Diseñando el juego. Añadiendo enemigos
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_tiled_adding_enemies.html
folder: mydoc
---

## Limitación

Puedes añadir hasta **3 enemigos en cada pantalla** y configurar su movimiento.

## Posición inicial

Para ello deberás seleccionar la capa objects y arrastrar el 1er sprite del enemigo a posicionar donde quieras que aparezca inicialmente.

Como truco, si pulsas la tecla Ctrl el enemigo se situará respetado la rejilla.

En la propiedad **type** de este objeto deberás introducir el text **enemy**

Es recomendable que le pongas un nombre al mismo para cuando referencies la posición final a este. E.g. enemy_1

## Posición final

* Haz clic en el botón **Insert point**.
* Pon este punto donde quieras que pare el enemigo manteniendo la tecla Ctrl.
* Añade a este punto una **propiedad personalizada** (custom property) **de tipo objeto** y selecciona el enemigo relacionado con este punto.

![](images/enemy_movement.png)

## Tipos de movimiento

El enemigo permite 3 tipos de movimiento:
* **Horizontal**, el enemigo y su trayecto están a la misma altura, es decir, la y del enemigo y del punto de destino son iguales y las x distintas.

![](images/enemigos_movimiento_horizontal.png)

* **Vertical**, el enemigo y su trayecto están en la misma vertical, es decir, la x del enemigo x del punto de destino son iguales y las y distintas.

![](images/enemigos_movimiento_vertical.png)

* **Diagonal**, el enemigo y el punto final no están a la misma altura ni en la misma vertical, es decir, ni la x del enemigo ni la y coinciden con la del punto de destino.

![](images/enemigos_movimiento_diagonal.png)

## Cantidad de vida

Puedes asignarle la cantidad de vida que tiene cada enemigo, por ejemplo si le pones cantidad de vida 5 el protagonista le tendrá que disparar 5 veces para matarlo.

Para ello solo tienes que añadir una propiedad personalizada **life** **de tipo int** con el valor de la vida. Si no la defines, por defecto, el enemigo tiene una unidad de vida.

![](images/vida_enemigo.png)

![](./images/layers.png)

{% include links.html %}

