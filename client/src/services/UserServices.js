import Client from './api'

export const UpdateUser = async (user_id, updateData) => {
  try {
    const res = await Client.put(`/user/admin/${user_id}`, {
      instagram: updateData.instagram,
      facebook: updateData.facebook,
      twitter: updateData.twitter,
      aboutMe: updateData.aboutMe
    })
    return res.data
  } catch (error) {
    throw error
  }
}
