const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

//Rotas
/* Métodos HTTP
** GET: Buscar/listar informação no back-end
** POST: Criar informação no back-end
** PUT: Alterar uma informação no back-end
** DELETE: Deleter uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parametros enviados na rota após '?' (Filtragem, páginação, etc). /users?name=Paulo
 * Route Params: Parâmetros utilizados para identificar recursos. /users/1 (1 sendo um ID).
 * Request Body: 
 */
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;

