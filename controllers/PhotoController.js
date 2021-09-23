const { PictureCard } = require('../models')
const AWSservice = require('../middleware/AWSservice')

const GetPhotos = async (req, res) => {
  try {
    const photo = await PictureCard.findAll({
      where: { userId: req.params.user_id }
    })
    res.send(photo)
  } catch (error) {
    throw error
  }
}

const CreatePhoto = async (req, res) => {
  try {
    let { user_id } = req.params
    let { description, imageUrl } = req.body
    let img = req.file
    if (img) {
      let image = {
        Body: img.buffer,
        Key: `${user_id}/${img.originalname}`,
        ContentType: img.mimetype
      }
      let location = await AWSservice.upload(image)
      const photo = await PictureCard.create({
        userId: user_id,
        img: location,
        description: description
      })
      res.send(photo)
    } else if (imageUrl) {
      const photo = await PictureCard.create({
        img: imageUrl,
        description: description
      })
      res.send(photo)
    }
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
      msg: 'Photo Deleted',
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
