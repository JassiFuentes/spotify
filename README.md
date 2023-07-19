# SpotifyA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

 nombre de la arquitectura con la que trabajas este proyecto  "Structure the app such that you can locate code quickly" "Estructurar la aplicación de forma que se pueda localizar el código rápidamente"  puedes ver más sobre esta estructura aqui `https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7`

# Instalaciones necesarias en tu equipo:

 -node js, debe ser una version compatible con angular 

 Para un mejor control Vamos a instalar el NVM for windows, vamos a la pagina https://github.com/coreybutler/nvm-windows/releases descargamos el `nvm-setup.zip` extraemos, ejecutamos como admin, instalamos next

usemos el comando `nvm install [version]`para que instalemos la versión de Node.js que queramos tener disponible. Debemos tener derechos administrativos de Windows para ejecutar este comando

Cambio de version Node.js a usar
Usando el comando `nvm use [version]` en la powershell indicaremos qué versión de Node.js queremos usar

Una vez establecida la versión en uso, ya podemos trabajar con ella con los comandos habituales, `npm i`por ejemplo.

Debemos tener en cuenta que a partir de este momento, debemos instalar cada utilidad global que necesitemos en cada una de las version de Node.js que vayamos a mantener. Es el caso por ejemplo de Yarn o Angular CLI, cuyas versiones deberemos instalar por cada instancia de Node.js.

EJEMPLO:
nvm install 15.6.7
nvm use 15.6.7
npm install -g yarn
npm install -g @angular/cli

Consultar las instalaciones existentes de Node.js
Con el comando `nvm install list` nos mostrará la lista de versiones Node.js instaladas, así como la versión actualmente activa.

VErsiones que uso para este proyecto:
node:
`nvm install v16.14.2`
`nvm use 16.14.2`

nos aseguramos de que lo instalamos en powershell
`node -v`
`npm -v`
`Get-ExecutionPolicy`
`Set-ExecutionPolicy unrestricted`
Marcas YES

-Angular Cli
`npm install -g @angular/cli`
se me instalo la version 16.1.3 de angular



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Generar modulos

Run `ng g m  nombre-modulo-ubicacion` te crea la carpeta mas dos archivos

## Generar modulo compartido dentro de carpeta existente shared

`ng g m shared/shared --flat` crea el archivo sin crear carpeta adicional
