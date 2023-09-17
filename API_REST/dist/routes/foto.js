"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

var _Fotojs = require('../controllers/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

const router = new (0, _express.Router)();

router.post('/', _loginRequiredjs2.default, _Fotojs2.default.store);

exports. default = router;
