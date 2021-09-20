'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PictureCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PictureCard.init({
    user_id: DataTypes.INTEGER,
    img: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PictureCard',
    tableName: 'picture_cards'
  });
  return PictureCard;
};