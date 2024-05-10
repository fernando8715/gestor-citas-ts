## Proyecto administrador de pacientes de una veterinaria, creado durante el curso en Udemy - React y TypeScript la guia completa, con el profesor Juan de la Torre. 03-may-2024

En este proyecto se utiliza Zustand para manejar el estado como el reducer pero hacerlo de forma global 

-- instalar las dependencias de node
npm i

-- correr el proyecto en desarrollo
npm run dev


-- Utilizar una libreria de formularios cuando son muy grandes y me sirve para manejar las validaciones cuando estas son muchas y complejas. en este proyecto se utilizo la libreria de Reack hook form

-- Utilizo uuid y los types de uuid para generar id's aleatorios para cada paciente
// al instalar uuid se debe instalar los types cuando se trabaja con TS

-- la libreria de Zustand requiere crear un store donde va a estar el state y las funciones.
-- Zustand maneja una herramienta de desarrollo que es *Redux* con la que podras mirar los cambios en el state y ver lo que esta pasando, para utilizarla hay que importar devtools de 'zustand/middleware'
-- Zustand maneja de forma facil el almacenamiento de datos en el local o sessionStorage con la funcion de *persist* para utilizrala hay que importarla de 'zustand/middleware'. ambas se utilizan en la función que crea el store.

-- Se utilizo la libreria de React toastify para mostrar un mensaje al cliente cuando agregue, edite o elimine un paciente. 


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
