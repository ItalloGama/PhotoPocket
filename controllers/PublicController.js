const { User } = require('../models')

const GetPublicDataById = async (req, res) => {
  try {
    const photo = await User.findAll({
      where: { id: req.params.user_id },
      attributes: ['instagram', 'facebook', 'twitter']
    })
    res.send(photo)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPublicDataById
}
