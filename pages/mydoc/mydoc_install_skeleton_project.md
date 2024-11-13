---
title: Instalación. Tu Proyecto.
tags: [getting_started, troubleshooting]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_install_skeleton_project.html
folder: mydoc
---

Una vez instaladas las herramientas ya solo tienes que descargarte el engine para crear tu juego, que es como una plantilla con un juego muy sencillo para que ya tengas todo preconfigurado, y que puedes cambiarlo para hacer tu juego.

Al descargar el proyecto, descomprimirlo y cambiar el nombre de la carpeta por el nombre de tu juego no uses espacios ni acentos, diéresis... para este. Por ejemplo podéis usar guiones medios y nombrar a la carpeta como **mi-juego-super-molon**.

[DESCARGAR EL ENGINE](https://github.com/rtorralba/zx-game-maker/archive/refs/heads/main.zip)

Todo lo que influye a la hora de generar tu juego se encuentra en la carpeta **assets**, con lo que os recomiendo que vayáis haciendo copia de esa carpeta por el método que prefiáis (Copia manual, control de versiones...).

La manera de trabajar es simplemente modificar los elementos dentro de la carpeta assets, maps.tiled-project, tiles.zxp... Y después ejecutar el script de generación del juego correspondiente de tu sistema operativo que se encuentra en la carpeta raiz.

**Windows**

Botón derecho sobre **make-game.bat**, ejecutar con Power Shell

**Linux y MacOS**

Ejecutar script en la consola 

```bash
./make-game.sh
```

Después de ejecutarlo, si todo ha ido bien, **el juego estará en dist/game.tap**

Además para ayudarte en revisar cuanta memoria estás utilizando en tu juego y cuanta tienes todavía libre, dentro de la carpeta dist tendrás una imagen con una gráfica del uso de memoria.

* En el caso de los juegos en 48k la imagen es memory-bank-0.png
* En el caso de los juegos de 128k se añadiran a la imagen anterior las gráficas de los otros bancos de memoria en uso como por ejemplo el memory-bank-3.png 

Los ficheros de la carpeta output los puedes borrar sin problema porque son todos generados.

Presta atención al resultado de la ejecución para ver si habéis tenido algún error.

![](images/project_tree.png)