"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Alunojs = require('../models/Aluno.js'); var _Alunojs2 = _interopRequireDefault(_Alunojs);
var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

class AlunoController {
  async store(req, res) {
    try {
      const novoAluno = await _Alunojs2.default.create(req.body);
      const { id, nome, email } = novoAluno;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const alunos = await _Alunojs2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Fotojs2.default, 'id', 'DESC']],
        include: {
          model: _Fotojs2.default,
          attributes: ['url', 'filename'],
        },
      });
      res.json(alunos);
    } catch (error) {
      console.log(error);
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }
      const aluno = await _Alunojs2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Fotojs2.default, 'id', 'DESC']],
        include: {
          model: _Fotojs2.default,
          attributes: ['url', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }
      // const { id, nome, email } = aluno;

      console.log('Aluno', aluno);
      // return res.json({ id, nome, email });
      return res.json(aluno);
    } catch (e) {
      console.log(req);
      console.log(e);
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }
      let aluno = await _Alunojs2.default.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

      // aluno = await Aluno.update(req.body, { where: { id: req.params.id } });
      aluno = await aluno.update(req.body);

      return res.json(aluno);
    } catch (e) {
      console.log(e);
      return res.json(null);
    //   return res.status(400).json({
    //     errors: e.errors.map((err) => err.message),
    //   });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const aluno = await _Alunojs2.default.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }

      // aluno = await Aluno.destroy({ where: { id: req.params.id } });
      await aluno.destroy();

      return res.json('Aluno deletado.');
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }
}

exports. default = new AlunoController();
