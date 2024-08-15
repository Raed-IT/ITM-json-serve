// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')

const server = jsonServer.create()

// Uncomment to allow write operations
// const fs = require('fs')
// const path = require('path')
// const filePath = path.join('db.json')
// const data = fs.readFileSync(filePath, "utf-8");
// const db = JSON.parse(data);
// const router = jsonServer.router(db)

// Comment out to allow write operations
const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    "/api/Users/current-user": "/currentUser",
    "/api/layout/apps": "/apps",
    "/api/layout/apps/:id": "/apps/:id",
    "/api/layout/menus": "/menus",
    "/api/layout/menus/:id": "/menus/:id",
    "/api/layout/modules": "/modules",
    "/api/layout/modules/:id": "/modules/:id",
    "/api/layout/dataSources": "/dataSources",
    "/api/layout/dataSources/:id": "/dataSources/:id"
}));
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
