import { Router } from 'express';
import UserController from '../controllers/User.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

// Não deveria existir
// router.get('/', loginRequired, UserController.index);
router.get('/:id', loginRequired, UserController.show);

// router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
// router.delete('/', loginRequired, UserController.delete);

export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
*/
