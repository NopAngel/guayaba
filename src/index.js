const server = require("./server");
const {
  addRoute,
  handleRequest,
  useMiddleware,
  set404Handler,
} = require("./router");

const start = (port = 3000) => {
  const http = require("http");
  const server = http.createServer((req, res) => {
    handleRequest(req, res);
  });

  server.listen(port, () => {
    console.log(`Guayaba corriendo en http://localhost:${port}`);
  });
};

// Exportar las funciones necesarias
module.exports = { start, addRoute, useMiddleware, set404Handler };
