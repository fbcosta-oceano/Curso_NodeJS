import User from '../models/User.js';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
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
      // const users = await User.findAll();
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      console.log(req.userId);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      const { id, nome, email } = user;

      console.log('user', user);
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      // const { id } = req.params;
      // if (!req.params.id) {
      //   return res.status(400).json({
      //     errors: ['ID não enviado.'],
      //   });
      // }
      let user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      // user = await User.update(req.body, { where: { id: req.userId } });
      user = await user.update(req.body);
      // user = await user.update({ email: 'maria2@email.com', nome: 'Maria' });
      const { id, nome, email } = user;

      return res.json({ id, nome, email });
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
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      // user = await User.destroy({ where: { id: req.params.id } });
      await user.destroy();

      return res.json('Usuário deletado.');
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }
}

export default new UserController();
// export default {

//   async store(req, res) {
//     try {
//       const novoUser = await User.create(req.body);
//       return res.json(novoUser);
//     } catch (e) {
//       console.log(e);
//       return res.status(400).json({
//         errors: e.errors.map((err) => err.message),
//       });
//     }
//   },

//   async index(req, res) {
//     try {
//       const users = await User.findAll();
//       return res.json(users);
//     } catch (e) {
//       return res.json(null);
//     }
//   },
// };
// export default [store, index];
