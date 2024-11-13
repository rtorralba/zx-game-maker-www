---
title: Estructura
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_engine_structure.html
folder: mydoc
toc: true
---

## Introducción

El motor tiene el siguiente flujo de trabajo:

* Exporta lo diseñado en Tiled a un fichero output/maps.json
* Traduce todo lo editado en ese fichero a maps y configuración en ZX Basic que se guardará en el fichero output/config.bas
* Comprueba si has añadido unos FX y si no te añade unos por defecto en assets/fx/fx.tap
* Crear las pantallas, sprites, tiles, los convierte en tap para cargarlos en el juego y crea los graficos de memoria orientativos en dist/
* Compila el juego incluyendo lo exportado de Tiled
* Comprueba que no te hayas pasado de memoria añadiendo cosas
* Construye el tap resultante en dist/como_hayas_llamado_al_juego.tap
* Borra los ficheros temporales

## Estructura del código

Dentro de la carpeta src encontrarás el código del motor.
* En la misma tenemos a primer nivel la gran parte de los ficheros que controlan el juego en .bas, que con el nombre te puedes hacer una idea de que se encargan.
* Carpeta bin donde están las utilidades que se usan durante el flujo de creación del juego la mayoría en python.
* Carpeta default que solo tiene el tap de los FX por defecto.
* Carpeta 128 que tiene el código que maneja cosas que solo funcionaran para 128K

![](images/project_src_structure.png)









