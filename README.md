# Guayaba 🍈

Welcome to **Guayaba**! A minimalist and easy-to-use library inspired by Express.js for creating HTTP servers in JavaScript. Designed to be lighter and simpler, yet powerful enough for your projects.

---

## 🚀 Characteristics

- **Easy Setup**: Create servers in a few steps.
- **Route Support**: Define HTTP routes with **GET**, **POST**, and more methods.
- **Middleware**: Add custom logic to handle requests.
- **Redirection**: Send users to other pages.
- **Custom 404 Page**: Configure a handler for routes not found.
- **UTF-8 Support**: Full handling of international characters.

---

### Simple Example:

```js
const { start, addRoute } = require("./src/index");

// Create route
addRoute("GET", "/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
  res.end("Welcome to Guayaba!");
});

// Ruuning server
start(3000);
```

### Middleware Configuration:

```js
const { useMiddleware } = require("../src/index");

useMiddleware((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
```

### Custom 404 Page

```js
const { set404Handler } = require("../src/index");

set404Handler((req, res) => {
  res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
  res.end("<h1>404 - Web not found</h1>");
});
```

### How to Install

1. To install you first need to create your project **"Workscape"** folder:

```pwsh
mkdir [name_for_the_project]
```

2. Install the dependency:

```pwsh
npm i guayaba
```

Done, you will now have Guayaba.js installed on your computer/project.

### License

This project is licensed under the MIT License.
