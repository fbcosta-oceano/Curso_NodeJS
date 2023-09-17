"use strict";Object.defineProperty(exports, "__esModule", {value: true});// import Aluno from '../models/Aluno.js';

class HomeController {
  async index(req, res) {
    try {
      res.json('Index');
    } catch (error) {
      console.log(error);
    }
  }
}

exports. default = new HomeController();
