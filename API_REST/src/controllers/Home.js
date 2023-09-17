// import Aluno from '../models/Aluno.js';

class HomeController {
  async index(req, res) {
    try {
      res.json('Index');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new HomeController();
