import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


// GET: Buscar ou listar uma informação
// POST: Criar alguma no informação
// PUT: Atualizar uma informação existente
// DELET: Deletar uma informação existente

// Corpo (Resquest Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

// localhost:3333/users
