// Importamos el módulo HTTP de Node.js para crear un servidor web
const http = require('http');


// Lee el archivo de configuración
const config = JSON.parse(fs.readFileSync('config.json'));

// Definir el manejador de solicitudes (request handler)
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


// Usa el puerto obtenido del archivo de configuración
const puerto = config.puerto;
const direccion = config.host;

// Escuchar las solicitudes en el puerto 3000 y la dirección IP 'localhost'
server.listen(puerto, direccion, (err) => {
  // Si hay un error al iniciar el servidor, mostrar un mensaje de error

  if (err) {
    return console.log('Error al iniciar el servidor:', err);
  }

  // Si no hay errores, mostrar un mensaje indicando que el servidor está escuchando en el puerto 3000
    console.log(`Servidor escuchando en: http://${direccion}:${puerto}/`);

});
