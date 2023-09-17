"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Userjs = require('../controllers/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const router = new (0, _express.Router)();

// Não deveria existir
// router.get('/', loginRequired, UserController.index);
router.get('/:id', _loginRequiredjs2.default, _Userjs2.default.show);

// router.post('/', UserController.store);
router.put('/', _loginRequiredjs2.default, _Userjs2.default.update);
// router.delete('/', loginRequired, UserController.delete);

exports. default = router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
*/
