```markdown
# IP Logger con Js y Ngrok

¡Bienvenido al **IP Logger**! Este proyecto te permite generar enlaces cortos que redirigen a una URL de destino específica.
Además, podrás ver la **IP** de la persona que hace clic en el enlace. Aquí te dejamos los pasos para que puedas utilizarlo fácilmente.

---

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes paquetes:

- **Node.js**: Asegúrate de tener Node.js instalado en tu máquina. Si no lo tienes, puedes descargarlo [aquí](https://nodejs.org/).
- **Ngrok**: Necesitarás [Ngrok](https://ngrok.com/) para exponer tu servidor local a internet.

## Instalación

1. **Clonar el repositorio**:

   Si aún no tienes el proyecto en tu máquina, clónalo desde GitHub:

   ```bash
   git clone (https://github.com/Duszafir/Ip-Logger)
   cd ip-logger
   ```

2. **Instalar dependencias**:

   Asegúrate de tener todas las dependencias necesarias con:

   ```bash
   npm install
   ```

---

## Uso

1. **Ejecutar el servidor**:

   Abre una terminal y navega a la carpeta del proyecto. Luego, ejecuta el siguiente comando:

   ```bash
   node index.js
   ```

2. **Proporcionar la URL de destino**:

   Al ejecutar el script, se te pedirá que ingreses una **URL de destino**. Asegúrate de escribirla **correctamente** con `https://` al principio, ya que si no lo haces, obtendrás un error 404.

   Ejemplo:

   ```
   https://www.example.com
   ```

   Si la URL no es válida o falta, el servidor mostrará un mensaje de error y se cerrará.

3. **Generación del enlace corto**:

   Después de proporcionar la URL de destino, se generará un enlace corto. Este enlace será algo como:

   ```
   https://<tu-url-publica-ngrok>/abcdefg
   ```

   ¡Este es el enlace que puedes compartir con tus amigos!

4. **Enviar el enlace corto**:

   Comparte el enlace corto generado con un amigo o familiar para que lo abran. **¡Recuerda!** Si el enlace no funciona o aparece un error 404, revisa la URL de destino que ingresaste.

5. **Ver la IP**:

   Una vez que tu amigo abra el enlace, en la terminal podrás ver su **IP pública**. Esto te ayudará a saber quién está accediendo al enlace.

   Ejemplo de salida en la terminal:

   ```
   ----------------------------------------------------------
   IP: 123.456.7.8 - URL: https://www.example.com
   ----------------------------------------------------------
   ```

---

## Recomendaciones

- Si deseas cambiar el puerto por defecto, simplemente edita el archivo `index.js` y cambia el valor de `PORT`.
  
---

¡Disfruta del IP Logger y comparte el enlace con tus amigos! 😎

```

