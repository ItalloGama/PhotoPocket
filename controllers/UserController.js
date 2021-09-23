const { User } = require('../models')

const UpdateUser = async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.update(
      { ...req.body },
      { where: { id: req.params.user_id }, returning: true }
    )
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  UpdateUser
}
