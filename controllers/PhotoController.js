const { PictureCard } = require('../models')

const GetPhotos = async (req, res) => {
  try {
    const photo = await PictureCard.findAll()
    res.send(photo)
  } catch (error) {
    throw error
  }
}

const CreatePhoto = async (req, res) => {
  try {
    let user_id = req.params.user_id
    const photo = await PictureCard.create({ userId: user_id, ...req.body })
    res.send(photo)
  } catch (error) {
    throw error
  }
}

const UpdatePhoto = async (req, res) => {
  try {
    const photo = await PictureCard.update(
      { ...req.body },
      { where: { id: req.params.photo_id }, returning: true }
    )
    res.send(photo)
  } catch (error) {
    throw error
  }
}

const DeletePhoto = async (req, res) => {
  try {
    await PictureCard.destroy({ where: { id: req.params.photo_id } })
    res.send({
      msg: 'Post Deleted',
      payload: req.params.photo_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPhotos,
  CreatePhoto,
  UpdatePhoto,
  DeletePhoto
}
