---
title: Release notes. 2025-08-16
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_release_notes_2025_08_16.html
folder: mydoc
---

# Nuevas funcionalidades
## Configuración de textos del HUD
Posibilidad de establecer los textos que aparecen en el HUD y añadidos algunos eventos que no mostraban texto.

## Localización (traducción)
Posibilidad de establecer los distitos textos y pantallas (scr) en distintos idiomas, totalmente opcional y manteniendo la retrocompatibilidad.
Si el motor detecta que se ha definido carpeta/s de idioma/s preguntará al compilar en que idioma de desea compilar y generará los ficheros (tap, exe, linux, z80...) en la carpeta del idioma correspondiente en dist.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZL1FOGTpVCo?si=hzGDjd6ZgozMqLMz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Mejoras
## Optimización en general
Optimización en general llegando a poder poner hasta 5 enemigos por pantalla con tiles animados y que funcione de manera fluida

## Arreglado comportamiento tiles animados
Los tiles animados tenian un comportamiento incorrecto cuando se acercaban los sprites, gracias a una mejora de [Conrado Badenas](https://conradobadenas.wordpress.com/) ahora mantienen la animación perfectamente.

## Arreglada compatibilidad con MacOS
Después de alguna actualizaciones en MacOs no terminaba de funcionar correctamente. Gracias a la aportación de [Metsuke](https://x.com/metsuke) ya vuelve a funcionar con normalidad.