'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: 'userId' })
      Comment.belongsTo(models.PictureCard, { foreignKey: 'pictureCardId' })
    }
  }
  Comment.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        field: 'userId',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      pictureCardId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        field: 'pictureCardId',
        references: {
          model: 'picture_cards',
          key: 'id'
        }
      },
      comment: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}
