import multer from 'multer';
import multerConfig from '../config/multer.js';
import Foto from '../models/Foto.js';

const upload = multer(multerConfig).single('foto');

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
          const foto = await Foto.create({ originalname, filename, aluno_id });
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

export default new FotoController();
