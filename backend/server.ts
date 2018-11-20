import * as fs from 'fs';
import * as https from 'https';
import * as jsonServer from 'json-server';

import { Express } from 'express';
import { handleAuthorization } from './authz';
import { handleAuthentication } from './auth';

const server: Express = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(jsonServer.bodyParser);

// rota de login que gera jwt para usuarios
server.post('/login', handleAuthentication);
// rota protegida com middleware de verificação de token
server.use('/orders', handleAuthorization);

// rotas baseadas no db.json
server.use(router);

const options = {
  key: fs.readFileSync('backend/keys/key.pem'),
  cert: fs.readFileSync('backend/keys/cert.pem'),
};

const port = 3001;

// Gerando servidor https com certificados ssl auto assinados
https.createServer(options, server).listen(port, () => {
  console.log(`JSON Server is running on https://localhost:${port}`);
});
