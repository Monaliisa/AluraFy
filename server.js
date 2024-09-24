const express = require('express');
const routes = require('./api/routes');

const { swaggerUi, swaggerDocs } = require('./api/utils/swaggerConfig');

const app = express();
const port = 3000;

routes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
    console.log(`API rodando no http://localhost:${port} Acesse a API na rota http://localhost:3000/api-docs`);
})

module.exports = app;