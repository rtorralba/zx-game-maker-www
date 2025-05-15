---
title: Explicación de la memoria
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_memory_explanation.html
folder: mydoc
---

## Explicación de la memória

Una de las cosas que tenemos que tenr en cuenta a la hora de diseñar un juego es la memoria que disponermos para alojar los elementos del mismo.
Para vigilar no pasarnos de memoria vamos a diferenciar 5 zonas de memória:
* Nucleo del motor
* Banco de memoria 0
* Banco de memoria 3
* Banco de memoria 4
* Banco de memoria 6 

### Zonas de memoria
#### Nucleo del motor
En esta zona se aloja el código del motor que podemos dividir en 2 partes, una fija y con lo cual no nos debe preocupar porque no crece, y otra variable donde se alojan las opciones que vamos activando (HI-Score, Tiles rompibles...). Si superamos esa zona lo sabremos porque cuand compilemos (verbose) en la ventana nos aparecera el siguiente error, y para solucionarlo deberemos desactivar alguna de las opciones de las que haya seleccionado en Tiled.

![](images/explicacion_memoria_ko_nucleo_log.png)

#### Banco de memoria 0
En este banco se almacenan datos como mapas, tiles, atributos (colores), enemigos, tiles que hacen daño... Podréis ver el uso de este banco en el menú del motor Memory usage > Bank 0 128K. Si este espacio está sobrepasado deberás eliminar pantallas del mapa, enemigos...

![](images/memory-bank-0-128K.png)

#### Banco de memoria 3
En este banco se almecena la música de la pantalla inicial/menú y la música in-game. Como en el anterior caso podrás ver el uso que estás haciendo de este banco a través del engine (Memory usage > Bank 3). Si sobrepasas este banco deberias acortar alguna de las dos músicas.

![](images/memory-bank-3.png)

#### Banco de memoria 4
En este banco se guardan las distintas pantallas (scr) del juego, inicio/menú, intro, ending, game-over... También podrás verlo a travñes del menú del engine (Memory usage > Bank 4), y so lo sobrepasas tendrás que simplificar alguna de las pantallas para que se puedan comprimir más.

![](images/memory-bank-4.png)

#### Banco de memoria 6
En este banco solo guardamos los FX, también podremos verlo a través del engine (Memory usage > Bank 6), y si los sobrepasas tendrás que hacer los FX más cortos.

![](images/memory-bank-6.png)

### Explicación gráfica de la memoria
#### Memoria OK
![](images/explicacion_memoria_ok.png)
#### Memoria KO por exceso de opciones activadas (Núcleo del motor)
![](images/explicacion_memoria_ko_nucleo.png)
#### Memoria KO por música de duración excesiva
![](images/explicacion_memoria_ko_banco.png)
