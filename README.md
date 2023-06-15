# Meit-Properties App

Esta aplicación llamada Meit-Properties te permite gestionar la adición y eliminación de propiedades en una lista, y además te brinda la opción de descargar un PDF de dicha lista.

## Funcionalidades

- Agregar propiedades a la lista.
- Eliminar propiedades de la lista.
- Generar y descargar un PDF con la lista de propiedades.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

### `npm start`

Inicia la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### `npm run build`

Compila la aplicación para producción en la carpeta `build`.\
Empaqueta correctamente la aplicación para obtener el mejor rendimiento.

El resultado se guarda en la carpeta `build`.\
La aplicación está lista para ser desplegada.

### `npm test`

Ejecuta los casos de prueba de la aplicación.

## Personalización

Puedes personalizar la apariencia y el comportamiento de la aplicación mediante la modificación de los siguientes archivos:

- `src/App.js`: Contiene la lógica principal de la aplicación.
- `src/components/PropertyList.js`: Componente que muestra la lista de propiedades.
- `src/components/PropertyForm.js`: Componente que permite agregar nuevas propiedades.
- `src/components/PropertyItem.js`: Componente que representa un elemento de la lista de propiedades.
- `src/styles`: Carpeta que contiene los estilos de la aplicación.

## Dependencias

La aplicación utiliza las siguientes dependencias principales:

- React: Librería de JavaScript para construir interfaces de usuario.
- pdfmake: Librería para generar archivos PDF en el navegador.

Asegúrate de instalar las dependencias necesarias antes de ejecutar la aplicación:

```shell
npm install
```
