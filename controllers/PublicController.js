const { PictureCard } = require('../models')

const GetPhotosById = async (req, res) => {
  console.log(req.params.user_id)
  try {
    const photo = await PictureCard.findAll({
      where: { userId: req.params.user_id }
    })
    res.send(photo)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPhotosById
}
