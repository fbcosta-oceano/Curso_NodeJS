import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email inválido.',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro.',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso deve ser um número.',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura deve ser um número.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
