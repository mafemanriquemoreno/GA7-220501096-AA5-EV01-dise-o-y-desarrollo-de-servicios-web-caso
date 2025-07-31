🚀 API de Autenticación de Usuarios
📝 Descripción

Este proyecto corresponde a la evidencia GA7-220501096-AA5-EV01, que se enfoca en el diseño y desarrollo de un servicio web (API) para gestionar el registro y el inicio de sesión de usuarios. El objetivo principal es proporcionar una interfaz robusta y segura para la autenticación, recibiendo un usuario y una contraseña y respondiendo con un mensaje de éxito o un error de autenticación.

Esta API es un componente fundamental para la codificación de software, siguiendo las mejores prácticas en la construcción de servicios web y garantizando una base sólida para futuras integraciones.

🎯 Estado del Proyecto

El proyecto se encuentra actualmente en desarrollo y cumple con los requisitos especificados para la actividad de aprendizaje del programa Análisis y Desarrollo de Software (ADSO) del Servicio Nacional de Aprendizaje (SENA).

✨ Características Principales

Autenticación de Usuarios: Permite a los usuarios iniciar sesión con sus credenciales (usuario y contraseña).

Registro de Usuarios (funcionalidad a implementar): Ofrecerá la capacidad de registrar nuevos usuarios en el sistema.

Respuestas Claras: Proporciona mensajes de autenticación satisfactoria o de error, facilitando la integración con otras aplicaciones.

Código Comentado: El código fuente incluye comentarios detallados para una mejor comprensión y mantenimiento.

Versionamiento: El proyecto está gestionado con herramientas de control de versiones para un desarrollo colaborativo y ordenado.

🛠️ Tecnologías Utilizadas

Lenguaje de Programación: (Aquí puedes especificar el lenguaje que uses, por ejemplo, PHP, Node.js, Python, etc.)

Framework/Librería (Opcional): (Si usas un framework como Laravel, Express.js, Flask, etc.)

Base de Datos (Opcional): (Si la API interactúa con una base de datos, como MySQL, PostgreSQL, MongoDB, etc.)

Git y GitHub: Para el control de versiones y el alojamiento del código fuente.

🚀 Instalación y Puesta en Marcha

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

Clona el repositorio:

Bash

git clone https://github.com/FelipeRyu/GA7-220501096-AA5-EV01-API_Auth.git
(Asegúrate de reemplazar https://github.com/FelipeRyu/GA7-220501096-AA5-EV01-API_Auth.git con la URL real de tu repositorio.)

Navega a la carpeta del proyecto:

Bash

cd GA7-220501096-AA5-EV01-API_Auth
Instala las dependencias:
(Los comandos de instalación varían según el lenguaje y framework que uses. Aquí tienes ejemplos, elige el que aplique o añade el tuyo):

Si usas Node.js:

Bash

npm install
o

Bash

yarn install
Si usas PHP con Composer:

Bash

composer install
Si usas Python con pip:

Bash

pip install -r requirements.txt
Configura las variables de entorno (si aplica):
(Si tu API necesita variables de entorno para la base de datos, claves API, etc., explica cómo configurarlas. Por ejemplo, crear un archivo .env.)

Inicia el servidor de desarrollo:
(Los comandos para iniciar el servidor también varían. Aquí tienes ejemplos):

Si usas Node.js con nodemon:

Bash

npm run dev
o

Bash

node server.js
Si usas PHP con un servidor web local (Apache/Nginx) o el servidor integrado:

Bash

php -S localhost:8000
Si usas Python con Flask/Django:

Bash

flask run
o

Bash

python manage.py runserver
Prueba la API:
Una vez que el servidor esté en ejecución, puedes probar los endpoints de la API utilizando herramientas como Postman, Insomnia, o curl.
(Aquí puedes añadir ejemplos de endpoints y cómo hacer las peticiones, por ejemplo:)

Endpoint de inicio de sesión (POST): http://localhost:PUERTO/api/login

JSON

{
    "usuario": "ejemplo@correo.com",
    "contrasena": "password123"
}
Endpoint de registro (POST - si ya está implementado): http://localhost:PUERTO/api/register

JSON

{
    "usuario": "nuevo_usuario@correo.com",
    "contrasena": "nueva_password"
}
🖼️ Uso de la API

Esta API está diseñada para ser consumida por aplicaciones cliente (Frontend, móviles, etc.) que requieran autenticación de usuarios. Al enviar las credenciales a los endpoints correspondientes, la API responderá con el estado de la autenticación.

👤 Autor

Desarrollado con dedicación por:

LUIS FELIPE VELEZ MARTINEZ
GitHub: @FelipeRyu

MARIA FERNANDA MANRIQUE MORENO
GitHub: @mafemanriquemoreno

📜 Agradecimientos

Este proyecto fue desarrollado como parte del programa de formación Análisis y Desarrollo de Software (ADSO) del Servicio Nacional de Aprendizaje (SENA) en Colombia.

Julio de 2025.

Consideraciones adicionales:

Reemplaza los marcadores de posición: Asegúrate de llenar los campos (Aquí puedes especificar el lenguaje que uses...), (Si usas un framework como...), y los ejemplos de comandos de instalación y ejecución con los detalles específicos de tu proyecto.

URL del repositorio: No olvides cambiar la URL de git clone por la dirección real de tu repositorio en GitHub.

Endpoints: Detalla los endpoints exactos de tu API (ej. /api/login, /api/register) y el formato esperado de las solicitudes y respuestas. Esto es crucial para quienes consumirán tu API.

Capturas de pantalla: Aunque es una API y no una interfaz visual, si tienes herramientas de prueba (como Postman o Insomnia) configuradas con tus solicitudes, podrías incluir capturas de pantalla de esas herramientas mostrando las respuestas exitosas y fallidas para ilustrar el uso de la API.

Espero que esto te sea de gran ayuda. ¡Mucho éxito con tu proyecto!
