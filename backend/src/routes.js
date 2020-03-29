const  express= require('express');
const routes = express.Router();

routes.get('/', (require, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'ítalo viana'
    });
});

module.exports = routes;