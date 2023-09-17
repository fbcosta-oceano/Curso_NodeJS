"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerjs = require('../config/multer.js'); var _multerjs2 = _interopRequireDefault(_multerjs);
var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

const upload = _multer2.default.call(void 0, _multerjs2.default).single('foto');

class FotoController {
  async store(req, res) {
    try {
      return upload(req, res, async (err) => {
        if (err) {
          return res.status(400).json({
            errors: [err.code],
          });
        }
        try {
          const { originalname, filename } = req.file;
          const { aluno_id } = req.body;
          const foto = await _Fotojs2.default.create({ originalname, filename, aluno_id });
          return res.status(200).json(foto);
        } catch (error) {
          return res.status(400).json({
            errors: ['Aluno não existe.'],
          });
        }
      });
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  }
}

exports. default = new FotoController();
