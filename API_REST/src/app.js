// import { fileURLToPath } from 'url';
import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config();

import './database/index.js';

import express from 'express';
import homeRoutes from './routes/home.js';
import userRoutes from './routes/user.js';
import tokenRoutes from './routes/token.js';
import alunoRoutes from './routes/aluno.js';
import fotoRoutes from './routes/foto.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
