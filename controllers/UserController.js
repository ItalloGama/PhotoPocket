const { User } = require('../models')

const UpdateUser = async (req, res) => {
  try {
    const photo = await User.update(
      { ...req.body },
      { where: { id: req.params.user_id }, returning: true }
    )
    res.send(photo)
  } catch (error) {
    throw error
  }
}

module.exports = {
  UpdateUser
}
