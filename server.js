const express = require('express');
const routes = require('./api/routes');

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => {
    console.log(`API rodando no http://localhost:${port}`);
})

module.exports = app;