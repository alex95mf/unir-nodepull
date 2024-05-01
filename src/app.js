// Importamos el módulo HTTP de Node.js para crear un servidor web
const http = require('http');

// Definimos la función que manejará las solicitudes entrantes al servidor
// El manejador recibe dos parámetros:
// - `request`: información sobre la solicitud del cliente (como URL y encabezados)
// - `response`: objeto para enviar la respuesta al cliente
const requestHandler = (request, response) => {
  // Configuramos la respuesta para que tenga un código de estado 200, lo que significa "OK" (éxito)
  // También establecemos el tipo de contenido a "text/plain", indicando que el contenido será texto sin formato
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // Enviar el mensaje de respuesta al cliente
    // Enviar el mensaje de respuesta al cliente dependiendo de la ruta
    if (path === '/') {
      response.end('¡Hola, mundo!\n');
    } else if (path === '/otro') {
      response.end('¡Hola desde otro endpoint!\n');
    } else {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('Ruta no encontrada\n');
    }


  // Enviamos el mensaje de respuesta al cliente
  // Aquí estamos enviando un simple texto plano con el mensaje "¡Hola, mundo!"
  response.end('¡Hola, mundo!\n');

};

// Creamos un servidor HTTP utilizando la función createServer del módulo HTTP
// Pasamos el `requestHandler` como argumento, que será llamado cada vez que el servidor reciba una solicitud
const server = http.createServer(requestHandler);

// Iniciamos el servidor para escuchar solicitudes HTTP en el puerto 3000 y la dirección 'localhost'
// El tercer parámetro es una función de callback opcional que se ejecutará una vez que el servidor esté listo
server.listen(3000, 'localhost', (err) => {
  // Si hay un error al intentar iniciar el servidor, mostramos un mensaje de error en la consola
  // Esto puede ocurrir si el puerto 3000 ya está en uso o si no se tienen permisos para usar el puerto
  if (err) {
    return console.log('Error al iniciar el servidor:', err);
  }

  // Si el servidor se inicia correctamente, mostramos un mensaje en la consola indicando que está en funcionamiento
  console.log('Servidor escuchando en: http://localhost:3000/');
});
