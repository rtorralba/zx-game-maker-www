---
title: Release notes. 2025-02-09
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_release_notes_2025_02_09.html
folder: mydoc
toc: false
---

## Mejoras técnicas
### Mejor reproductor de beeper

#### Introducción

Uno de los problemas en ZX Spectrum a la hora de utilizar el beeper es que como utiliza la CPU todo lo demás queda a la espera de que el sonido termine.
Usando el reproductor que exporta la aplicación BeepFX el efecto se notaba bastante en el juego porque reproduce cada sonido de principio a fin.

#### Nuevo reproductor

Para paliar el problema anteriormente descrito [@JuanAntonio1072](https://x.com/JuanAntonio1072) ha hecho una modificación sobre el player original para que cuando le pases un sonido solo guarde el sonido a reproducir y después puedes ir diciendole que reproducca el mismo liea a linea devolviendo así el control al juego del Z80.

#### Ejemplo con el player original

<iframe width="560" height="315" src="https://www.youtube.com/embed/WH4L410GWDQ?si=SQyMa2K9BPc-il9Q" title="Ejemplo con el player original" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Ejemplo con el player mejorado

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZcGE2lcqpXk?si=L18OA7NAPzN8VRYc" title="Ejemplo con el player mejorado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>










