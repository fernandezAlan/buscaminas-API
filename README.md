# buscaminas-API-challenge backend

## Script para iniciar el proyecto
 - npm run dev : Para iniciar el proyecto en modo de desarrollo.
 - npm run test : Para iniciar el testeo del proyecto.
 - npm start : Para iniciar el proyecto en modo de producción.

## Anotaciones

El proyecto cuenta con la base de datos Postgresql.

Si se inica el proyecto en modo de desarrollo, este buscará la base de datos de manera local, para esto hay que cambiar la variable de entorno POSTGRESQL_URI_DEV con la configuración necesaria.

Si se inicia el proyecto en modo producción, esté está configurado para búscar la base de datos de forma remota (la base de datos esta alojada en [Heroku](https://www.heroku.com/)), para esto no hay que que agregar configuración extra.

En el testeo se usará la base de datos remota.
