# Mini Dashboard & REST API (Vanilla JS + Node.js)

Este proyecto es mi primera aplicación full-stack construida desde cero **sin frameworks**

El objetivo principal de este desarrollo es comprender de forma profunda y transparente cómo se comunican el navegador y el servidor, manejando peticiones HTTP (`GET`, `POST`), flujos de datos asíncronos (`fetch`, streams) y CORS sin depender de librerías de terceros como Express.

---

## Tecnologías Utilizadas

- **FRONTEND** HTML5, CSS, JavaScript (Vanilla) con Fetch API y `async/await`.
- **BACKEND** Node.js, (Módulo nativo `http`).
- **PERSISTENCIA** En memoria (Array global de datos con generación de IDs mediante `crypto.randomUUID()`).

---

## Funcionalidades

- **Lectura de datos (`GET`):** El cliente solicita y renderiza la lista de productos actualizada desde el servidor.
- **Creación de recursos (`POST`):** Envío de un nuevo producto desde el formulario del cliente, procesado y almacenado de forma segura en el servidor.
- **Manejo de CORS:** Configuración manual de cabeceras en el servidor nativo para permitir la sincronización fluida entre cliente y servidor.
- **Control de Errores:** Bloques `try...catch` en el servidor para evitar caídas ante datos malformados (`400 Bad Request`).

---

## Cómo ejecutar el proyecto localmente

1. Clona este repositorio en tu computador.
2. Inicia el servidor ejecutando el script de Node.js en tu terminal:
   ````bash
   node index.js```
   ````
3. Abre el archivo principal del cliente (index.html) en tu navegador o mediante un servidor local (como Live Server) para interactuar con la aplicación.

---

## Versión 0.1.0

La versión siguiente tendrá validaciones tanto en frontend como en el backend.
