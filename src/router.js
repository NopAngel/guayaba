let custom404Handler = (req, res) => {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Ruta no encontrada");
};

const set404Handler = (handler) => {
  custom404Handler = handler;
};

const routes = {};
const middlewares = [];

const useMiddleware = (middleware) => {
  middlewares.push(middleware);
};

const addRoute = (method, path, handler) => {
  routes[`${method.toUpperCase()} ${path}`] = handler;
};

const handleRequest = (req, res) => {
  let index = 0;

  const executeMiddlewares = () => {
    if (index < middlewares.length) {
      const currentMiddleware = middlewares[index];
      index++;
      currentMiddleware(req, res, executeMiddlewares);
    } else {
      const routeKey = `${req.method} ${req.url}`;
      const handler = routes[routeKey];

      if (handler) {
        handler(req, res);
      } else {
        custom404Handler(req, res); // Llama al handler 404 personalizado
      }
    }
  };

  executeMiddlewares();
};

module.exports = { useMiddleware, addRoute, handleRequest, set404Handler };
