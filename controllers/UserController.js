const { User } = require('../models')

const UpdateUser = async (req, res) => {
  let data = req.body
  let newData = {}
  for (let key in data) {
    if (data[key]) {
      newData = { ...newData, key: data[key] }
    }
  }
  try {
    const user = await User.update(
      { ...newData },
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
