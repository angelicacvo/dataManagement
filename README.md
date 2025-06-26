# Vegan Sushi Menu - Gestión de Productos

Este proyecto es una aplicación web básica desarrollada en **JavaScript, HTML y Bootstrap**, que permite **gestionar el menú de un restaurante vegano de sushi**. Los usuarios pueden buscar productos por nombre o ver todos los productos disponibles en una tabla.

##  Características

- Visualización de todos los productos del menú.
- Búsqueda de productos por nombre exacto.
- Uso de estructuras como `Object`, `Set`, y `Map` para representar y organizar los datos.
- Interfaz sencilla usando Bootstrap.

## 📦 Estructura del Menú

Los productos del menú se almacenan como un objeto con claves numéricas. Cada producto tiene:

- `id`: identificador único
- `name`: nombre del producto
- `price`: precio en pesos colombianos

Ejemplo:
```js
const menu = {
  1: { id: 1, name: "tofu sushi burrito", price: 28000 },
  2: { id: 2, name: "pepita roll", price: 30000 },
  ...
};

https://github.com/angelicacvo/dataManagement
