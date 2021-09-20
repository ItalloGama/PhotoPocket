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
    const photo = await PictureCard.create({ ...req.body })
    res.send(photo)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPhotos,
  CreatePhoto
}
