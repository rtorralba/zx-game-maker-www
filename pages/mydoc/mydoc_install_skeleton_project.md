---
title: Instalación. Tu Proyecto.
tags: [getting_started, troubleshooting]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_install_skeleton_project.html
folder: mydoc
---

Una vez instaladas las herramientas ya solo tienes que descargarte el "skeleton" de tu juego/proyecto, que es como una plantilla con un juego muy sencillo para que ya tengas todo preconfigurado, y que puedes cambiarlo para hacer tu juego.

[DESCARGAR EL SKELETON DEL PROYECTO](https://github.com/rtorralba/zx-game-maker-skeleton/archive/refs/heads/main.zip)

Todo lo que influye a la hora de generar tu juego se encuentra en la carpeta **assets**, con lo que os recomiendo que vayáis haciendo copia de esa carpeta por el método que prefiáis (Copia manual, control de versiones...).

La manera de trabajar es simplemente modificar los elementos dentro de la carpeta assets, maps.tmx, tileset.png... Y después ejecutar el script de generación del juego correspondiente de tu sistema operativo que se encuentra en la carpeta raiz.

**Windows**

Doble clic en **game-game.bat**

**Linux y MacOS**

Ejecutar script en la consola 

```bash
./game-game.sh
```

Después de ejecutarlo, si todo ha ido bien, **el juego estará en output/game.tap**

Los ficheros de la carpeta output los puedes borrar sin problema porque son todos generados.

Presta atención al resultado de la ejecución para ver si habéis tenido algún error.

![](images/project_tree.png)

{% include links.html %}