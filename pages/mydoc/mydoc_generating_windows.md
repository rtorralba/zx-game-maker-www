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

**make-game-win.bat**

Para actualizar el motor solo habrá que hacer docle clic en el fichero update.bat

**update.bat**

Al generar el juego también se generará en la carpeta **dist** una imágen con una representación gráfica de la memoria que ocupa tu proyecto para poder saber que ocupa cada elemento.

Nota: Asegurate de tener el docker ejecutándose antes de ejecutar el archivo make-game-win.bat.

![](images/memory.png)

