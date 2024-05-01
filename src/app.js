// Importar el módulo http de Node.js
const http = require('http');

// Definir el manejador de solicitudes (request handler)
const requestHandler = (request, response) => {
  // Configurar el encabezado de la respuesta con el código de estado 200 (OK) y el tipo de contenido como texto plano
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
};

// Crear un servidor HTTP y pasarle el manejador de solicitudes
const server = http.createServer(requestHandler);

// Escuchar las solicitudes en el puerto 3000 y la dirección IP 'localhost'
server.listen(3000, 'localhost', (err) => {
  // Si hay un error al iniciar el servidor, mostrar un mensaje de error
  if (err) {
    return console.log('Error: ', err);
  }
  // Si no hay errores, mostrar un mensaje indicando que el servidor está escuchando en el puerto 3000
  console.log('Servidor escuchando en: http://localhost:3000/');
});
