---
title: Release notes. 2026-01-07
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_release_notes_2026_01_07.html
folder: mydoc
---

# Funcionalidades
## Textos en pantalla
Posibilidad de definir textos para mostrar en pantalla en 3 idiomas y de gran longitud. Tanto tamaño como posición de la ventana, como paper e ink de la misma son configurables.

<iframe width="560" height="315" src="https://www.youtube.com/embed/txZfJtzWNRQ?si=9WwVzP5Ep-05_6L4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Dash
El personaje principal puede hacer un impulso rápido mientras está en el aire. Puede tenerlo habilitado desde el principio o cuando recoja el elemento para activarlo.

## Wall Jump
Si se activa esta opción, el personaje podrá saltar rebotando contra las paredes.

## Arma de corto alcance
Posibilidad de definir una arma de corto alcance, como por ejemplo una espada.

## Enemigos casi indestructibles
Posibilidad de definir enemigos solo eliminables con el arma corta.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zz_WrW2YMB8?si=wB6wgUwuwFttCuZi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Optimizaciones

* Optimización de uso de memoria "contended". El ZXSGM situa los datos que necesitan un acceso rápido como los FX en los bancos no "contended" dinámicamente en función del modelo de ZX Spectrum.

* Arreglado el uso del password.

* Optimizado espacio.

* Cambiar el uso de pasmo por el compilador ASM de Boriel para evitar una descarga adicional.

* Mejora de estabilidad de la aplicación de escritorio. Gracias de nuevo a [BTCO](https://btco-original.itch.io/) por encargarse del la parte de MacOS.

* Mejora de la animación en escaleras.

