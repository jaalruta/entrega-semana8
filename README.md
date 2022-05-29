

## Estudiantes
Nuestro equipo está conformado por 4 integrantes.
|Nombre |Correo|
|--|--|
|Jair Alexander Rueda Tapiero |ja.ruedat1@uniandes.edu.co   |
|Andres Felipe Rodriguez Nuñez|af.rodriguezn@uniandes.edu.co  |
|Juan Esteban Otálvaro Alzate |j.otalvaro@uniandes.edu.co     |
|Ilse Milena Villalba Mantilla|im.villalba1240@uniandes.edu.co|

# Generación de datos
## Estructura del repositorio



## Sistema Bajo Pruebas

El sistema bajo pruebas usado es [Ghost](https://ghost.org/) en su versión 4.41.3. 

Ghost es un sistema gestor de contenidos para la creación de publicaciones en línea de código libre

## Requisitos para la ejecución de las pruebas

- [node](https://nodejs.org/es/blog/release/v16.13.0/) version 16.13.0
- [npm](https://www.npmjs.com/) (se instala junto con node)
- [git](https://git-scm.com/)
- [Google Chrome](https://www.google.com/intl/es-419/chrome/)

- [Ghost](https://ghost.org/) version 4.41.3 y version 3.42 , para la instalacion se debe crear un directorio vacio y correr los siguientes comandos dentro del directorio creado (el siguiente ejemplo es para la version 4.41.3 , se debera realiza lo mismo en directorio diferente para la version 3.42) 

  ```
  npm install ghost-cli@latest -g
  ```
  y luego
  ```
  ghost install 4.41.3 --local
  ```
  con lo anterior Ghost debería estar en ejecución en la máquina local en la url http://localhost:2368/ghost/
 
  Al ingresar por primera vez deberá crear el perfil administrador ***No pierda estos datos ya que son necesarios para las pruebas***
 
- Cypress , una vez instalado node y npm se debe instalar cypress con el siguiente comando
  ```
  npm install -g cypress
  ```

si se quiere parar la ejecucion de una version de ghost se debe usar el comando 

  ```
  ghost stop
  ```

- La url de ghost debera ser http://localhost:2368/ es decir debe estar corriendo en la maquina local y en el puerto 2368

## Ejecución de pruebas

Cuando tengamos listos los requisitos podremos clonar el repositorio usando el comando

```
git clone <URL_REPOSITORIO>
```

luego de esto debemos ingresar a la carpeta generada y ejecutar el comando 

```
npm install
```

con esto garantizamos la instalacion correcta de las dependencias.


### Inicialización de ghost

Asegúrese que Ghost esta en ejecucion ingresando a http://localhost:2368/ghost/ de lo contrario ir a la carpeta de instalación de ghost y ejecutar

```
ghost start
```

### Ejecución de pruebas exploratorias
directorio  : reconocimiento

Se debe configurar el usuario y clave de administrador de Ghost , para esto nos dirigiremos al archivo /reconocimiento/RIPuppet/config.json , debemos editarlo y agregar el usuario y la contraseña, en el campo ember7 y ember9 

![Captura de pantalla 2022-05-29 a la(s) 6 30 21 p  m](https://user-images.githubusercontent.com/98671337/170895638-fae09e79-5d19-4a31-92e7-8c2d46695d0a.png)

Despues de esto debemos estar en el directorio RIPuppet de las pruebas de reconocimiento y ejecutar el comando

```
npm install
```

una vez se instalen las dependencias debemos usar el comando

```
node index.js
```

### Ejecución de pruebas e2e
directorio  : e2e

Se debe configurar el usuario y clave de administrador de Ghost , para esto nos dirigiremos al archivo /cypress/cypress.json aqui

![Captura de pantalla 2022-05-29 a la(s) 6 33 37 p  m](https://user-images.githubusercontent.com/98671337/170895696-5ef3d3aa-591e-43e7-9b00-1fdf9b62df30.png)

una vez configurado se debe ejecutar el comando 

```
cypress open
```

se abrira la siguiente interfaz


![Captura de pantalla 2022-05-29 a la(s) 6 35 15 p  m](https://user-images.githubusercontent.com/98671337/170895750-538f5f62-d222-430f-803c-6b8047edad4a.png)

aqui debemos seleccionar la carpeta cypress y luego de esto podemos ejecutar las pruebas.

### Ejecución de pruebas vrt
Se debe configurar el usuario y clave de administrador de Ghost , para esto nos dirigiremos al archivo /cypress/cypress.json del directorio con la version de ghost que queremos probar, debemos editarlo y agregar el usuario y la contraseña, a continuación se visualiza un ejemplo :

![Captura de pantalla 2022-05-05 a la(s) 11 49 07 p  m](https://user-images.githubusercontent.com/98671337/167069026-5cfb1e10-e713-4f36-af41-96fc9a282024.png)

Para la ejecución de las pruebas con Cypress se debe ejecutar el siguiente comando (en ocasiones es necesario ejecutarlo con privilegios de administrador)

```
cypress open
```

Se abrirá la siguiente interfaz

![Captura de pantalla 2022-05-05 a la(s) 10 55 31 p  m](https://user-images.githubusercontent.com/98671337/167064359-f65996fc-0d57-435c-b379-aa8b2868c936.png)


Debemos seleccionar la carpeta cypress del directorio con la version de ghost que queremos probar obtenidas del repositorio clonado
![Captura de pantalla 2022-05-05 a la(s) 10 57 06 p  m](https://user-images.githubusercontent.com/98671337/167064499-af4e49ab-760b-4bc8-a9fd-35e4c9069dbf.png)

En este punto se nos permitirá ejecutar los test, para los test sobre Ghost debemos buscar la sección ***3-Ghost***

![Captura de pantalla 2022-05-05 a la(s) 10 59 38 p  m](https://user-images.githubusercontent.com/98671337/167064690-1d33a3db-8faf-4334-9dcd-4e6d5035dff6.png)

Luego podremos seleccionar cualquier test del listado , se abrirá un navegador y se ejecutara la prueba

![Captura de pantalla 2022-05-05 a la(s) 11 00 51 p  m](https://user-images.githubusercontent.com/98671337/167064809-25649edc-bdf5-4f3c-b95c-e08eb8ab2f3f.png)


# Generación de reporte de regresión

Dentro del repositorio existe una carpeta que se llama ***regresion*** , en esta carpeta se encuentra el script que genera el reporte , para configurar el reporte se debe tener en cuenta lo siguiente

## Archivo de configuración

El archivo ***config.json*** contiene la configuración del reporte ,  a continuacion se explicaran las opciones de configuración 
- titulo_reporte : Sera el titulo del reporte general
- destino_reporte : Es el path en donde se ubicara el reporte de resultados
- comparaciones : es un arreglo en el cual se asocian los directorios a comparar y el nombre del escenario de comparacion.
   - nombre : Nombre del escenario
   - directorio1 : Directorio 1 a comparar
   - directorio2 : Directorio 2 a comparar
- resemble_config : Es un objeto con la configuracion de resemble 

## Consideraciones antes de correr el reporte
- Ambos directorios deben tener la misma cantidad de imagenes
- La extension de la imagen debe ser ***png***
- Se debe validar que las rutas de comparacion en el archivo de configuración esten correctas
- Es ideal que los nombres de las imagenes a comparar sea el mismo debido a que el script recorre las imagenes en orden ascendente
## Correr el reporte

La primera vez que se ingresa al directorio se debe correr el comando 

 ```
  npm install
 ```

con esto se instalaran las dependencias necesarias para la correcta ejecucion del reporte.

Luego se debe ejecutar el comando 

 ```
  node index.js
 ```
  
 Con esto se iniciara la comparacion y se generara el reporte de regresion visual
 
 Se generara una pagina principal con las comparaciones generadas
 ![Captura de pantalla 2022-05-14 a la(s) 9 16 44 a  m](https://user-images.githubusercontent.com/98671337/168429611-a3d4f9da-c720-4f4e-9e49-241301561854.png)

y para cada comparacion un reporte detallado 
![Captura de pantalla 2022-05-14 a la(s) 9 16 51 a  m](https://user-images.githubusercontent.com/98671337/168429633-86576627-f695-47c1-9c9b-f78b61df8c92.png)




### Ejecución de pruebas con generacion de datos

Se debe configurar el usuario y clave de administrador de Ghost , para esto nos dirigiremos al archivo /cypress/cypress.json del directorio con la version de ghost que queremos probar, debemos editarlo y agregar el usuario y la contraseña, a continuación se visualiza un ejemplo :


Para la ejecución de las pruebas con Cypress se debe ejecutar el siguiente comando (en ocasiones es necesario ejecutarlo con privilegios de administrador)

```
cypress open
```

Se abrirá la siguiente interfaz

![Captura de pantalla 2022-05-22 a la(s) 3 39 44 p  m](https://user-images.githubusercontent.com/98671337/169714928-54cd9956-1993-4b95-9478-a8b54915fa6f.png)



### Estrategia de pruebas

En el siguiente link se podra consultar la estrategia de pruebas

[Estrategia de pruebas](https://docs.google.com/document/d/19cB3n2YPg0AhZKRoRVk66oHmSCFLley2/edit?usp=sharing&ouid=117230139036233446434&rtpof=true&sd=true)

### Inventario de pruebas manuales

En el siguiente link se podra consultar el inventario de pruebas manuales

[Inventario de pruebas manuales](https://docs.google.com/spreadsheets/d/1XAVMU1ul_JVlkQg4k2cYQU-a6NBVJE8B/edit?usp=sharing&ouid=117230139036233446434&rtpof=true&sd=true)

### Video de resultados






