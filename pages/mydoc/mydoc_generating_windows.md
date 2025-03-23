---
title: Generando el juego. Windows
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_generating_windows.html
folder: mydoc
---

Todo lo relativo a tu proyecto está dentro de la carpeta assets, te recomiendo que vayas haciendo copia de esta carpeta de manera manual o con un sistema versionado.

Hacer doble click en el siguiente archivo. El juego se generará en la carpeta **dist** junto con el mapa de memoria para que veas como vas de recursos.

**make-game.ps1**

Al generar el juego también se generarán en la carpeta **dist** unas imágenes con una representación gráfica de la memoria que ocupa tu proyecto para poder saber que ocupa cada elemento.

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

