---
title: Release notes. 2025-10-119
tags: [documentation]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_release_notes_2025_10_19.html
folder: mydoc
---

# Nuevas funcionalidades
## General
- **Pixel perfect collide**. Posibilidad de habilitar la colisión de los enemigos con el protagonista al pixel. Anteriormente, y continua siendo la opción por defecto si no habilitas esta propiedad, era más "benevola" con el jugador.
- **Plataformas mimetizadas**. Posibilidad de mimetizar las plataformas atravesables para no tener que usar tiles adicionales porque hay distintos fondos.
- **Nuevas músicas**. Se ha añadido la posibilidad de especificar nuevas músicas, para la pantalla de intro y para cuando consigues el objetivo en el modo arcade.
- **Tile de ammo disponible**. Cuando el ammo no está habilitado podemos usar ese tile para el fondo.
- **Hi Score mimetizado**. El mensaje de HI Score del menú se mimetiza con el fondo elegido para que quede integrado.
- **Flash en mensajes**. Posibilidad de establecer si los mensajes tienen flash o no.

## Arcade
- **Tiempo que duran los tiles**. Posibilidad de configurar el tiempo que duran los tiles que se rompen al tocar.
- **Reset on kill**. Posibilidad de resetear la pantalla al morir.
- **Papel y tinta de mensajes por defecto**. Posibilidad de configurar el papel y la tinta de los mensajes por defecto.
- **Pantalla de recuento**. Pantalla intermedia de recuento donde se suman los puntos conseguidos en la pantalla que acabas de finalizar.
- **Posibilidad de usar sprite como objetivo**. En el modo arcade ahora se puede usar un sprite en vez de la llave para pasar a la siguiente pantalla.
- **Current Stage**. Posibilidad de mostrar la pantalla actual en el HUD y configurar donde se muestra de manera visual.
- **Hurry up**. Cuando el juego llega al segundo que se haya configurado se activa el Hurry up mostrando un mensaje y acelerando la música.
- **Música por pantalla**. Puedes establecer una de las 3 músicas ingame disponibles en el juego en cada pantalla.
- **Mensajes Hurry up y Arcade Goal**. Nuevos mensajes para personalizar/traducir cuando entra el juego en Hurry up o cuando tienes que ir al objetivo para finalizar la pantalla.

# Mejoras
- Revisar permisos de juegos generados.
- Optimización de pintado de pantalla con tiles animados "ilimitados".
- Usar el tile de arriba para mimetizar objetos.
- En modo jetpack arrglada animación cuando el prota colisiona.
- Arreglada primera posición del prota en modo plataformas con varios punteros.
- Mejorado cambio de música.
- Optimizado codigo cuando no se usan disparos.
- Ajustado el tamaño de vidas y fuel de jetpack en el HUD.
- Arreglados atributos del tile vacio del ejemplo del motor.
- Mejorada la pantalla de redefinir teclas.
- Arreglado primer tile de animación de los tiles animados.
- Arreglado aplicación de papel y tinta en algunos mensajes.
- Al decrementar vida/energia solo se actualiza esta enel HUD.
- Uso de salvador en vez zx0 para comprimir ganando en velocidad de generación del juego.
- Eliminado botón disparo al redefinir teclas cuando no está habilitado el disparo en el juego.


