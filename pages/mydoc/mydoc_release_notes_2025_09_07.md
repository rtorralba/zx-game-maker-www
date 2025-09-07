---
title: Release notes. 2025-09-07
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_release_notes_2025_09_07.html
folder: mydoc
---

# Nuevas funcionalidades
## Generación del juego en MacOS
Hasta ahora al compilar se generaban las versiones normal y RF (CRT) del juego para Windows y Linux, ahora se genera también para MacOS.

Debemos esta nueva funcionalidad a [BTCO](https://btco-original.itch.io/), autor de juegos destacado y además de realizar esta mejora, se ha brindado a testear la plataforma en todos los sistemas operativos.

También agradecer a [Metsuke](https://x.com/metsuke) el testeo en MacOS y su ayuda en varios temas.

Esto demuestra que gran comunidad rodea al ZX Spectrum Game Maker y que va haciendo que crezca cada día más.

## Items con fondo del entorno
Los tiles cogen el fondo de los del entorno para que se puedan añadir a cualquier fondo y no queden como un "pegote" ni al visualizarlos
ni al recogerlos.

![](images/items_with_environment_background.jpg)

## Atajos para acciones frecuentes
Se han añadido atajos para las acciones más frecuentes como, compilar en los distintos idiomas, abrir juego...

![](images/frequent_shortcuts.jpg)

# Mejoras
## Simplicado y estabilizado launcher del motor
En algunos PCs daba ciertos problemas la primera ejecución del motor. Se ha arreglado y simplificado y ahora con solo ejecutar **zxsgm.py** en
todos los sistemas operativos (Windows, Linux, MacOS), funciona a la primera.

## Optimizados tiles animados
Se han optimizado los tiles animados para que no ocupen tanto espacio y permita añadir muchos más por pantalla.

## Corregidos errores varios
* Velocidad de sprites y pintado de movimiento "noReturn"
* Colision con libreria bin2tap de Skoolkit
* Permisos de juego linux
* Previsualización de sprites...
