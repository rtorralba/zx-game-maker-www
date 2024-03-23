---
title: Generando el juego. Linux y MacOS
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_generating_linux.html
folder: mydoc
---

Todo lo relativo a tu proyecto está dentro de la carpeta assets, te recomiendo que vayas haciendo copia de esta carpeta de manera manual o con un sistema versionado.

En la consola de comandos dentro de la carpeta de tu juego. El juego se generará en la carpeta **dist** junto con el mapa de memoria para que veas como vas de recursos.

```bash
./make-game.sh
```

Si se quiere actualizar el motos solo tendremos que añadir la opción --update

```bash
./make-game.sh --update
```

Al generar el juego también se generará en la carpeta **dist** una imágen con una representación gráfica de la memoria que ocupa tu proyecto para poder saber que ocupa cada elemento.

![](images/memory.png)
