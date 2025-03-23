---
title: Release notes. 2025-03-23
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_release_notes_2025_03_23.html
folder: mydoc
toc: false
---

## Nuevas funcionalidades

* Posibilidad de añadir música AY en el menú (128K)
* Mejorada la salida resultado de la compilación para que se vea que ha tardado cada proceso y un resumen de ocupación de memoría por banco.

![](images/consola_salida_128K.jpg)

![](images/consola_salida_48K.jpg)

## Mejoras técnicas

* Refactorizada gran parte del código de generación de ficheros a cargar desde ZX Basic Boriel para mejor organización
* Utilizamos un banco de memoria nuevo donde hemos movido los FX, de manera que la distribución de la memoría ahora queda de la siguiente manera:

### 128K

#### Banco 0
* Mapas
* Enemigos
* Tileset
* Atributos
* Spriteset
* Objetos
* Tiles que hacen daño
* Tiles animados

![](images/memory-bank-0-128K.png)

#### Banco 3
* Pantalla de inicio (Menú)
* Pantalla de fin
* HUD
* Pantalla de introducción
* Pantalla de game over

![](images/memory-bank-3.png)

#### Banco 4
* Música del inicio
* Música in game

![](images/memory-bank-4.png)

#### Banco 6
* FX

![](images/memory-bank-6.png)

### 48K

#### Banco 0
* FX
* Pantalla de inicio (Menú)
* Pantalla de fin
* HUD
* Mapas
* Enemigos
* Tileset
* Atributos
* Spriteset
* Objetos
* Tiles que hacen daño
* Tiles animados

![](images/memory-bank-0-48K.png)