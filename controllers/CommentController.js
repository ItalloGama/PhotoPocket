const { User, PictureCard, Comment } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comment = await Comment.findAll({
      where: { pictureCardId: req.params.photo_id },
      include: [{ model: User, attributes: ['name'] }]
    })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let user_id = req.params.user_id
    let photo_id = req.params.photo_id
    const comment = await Comment.create({
      pictureCardId: photo_id,
      userId: user_id,
      ...req.body
    })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    const comment = await Comment.update(
      { ...req.body },
      { where: { id: req.params.comment_id }, returning: true }
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.comment_id } })
    res.send({
      msg: 'Comment Deleted',
      payload: req.params.comment_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateComment,
  GetComments,
  UpdateComment,
  DeleteComment
}
