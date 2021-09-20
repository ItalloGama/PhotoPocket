'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PictureCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PictureCard.belongsTo(models.User, { foriegnKey: 'userId' })
      PictureCard.hasMany(models.Comment, {
        foreignKey: 'pictureCardId',
        as: 'comments'
      })
    }
  }
  PictureCard.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'PictureCard',
      tableName: 'picture_cards'
    }
  )
  return PictureCard
}
