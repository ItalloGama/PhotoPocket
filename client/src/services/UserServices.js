import Client from './api'

export const UpdateUser = async (user_id) => {
  try {
    const res = await Client.put(`/user/${user_id}`, {
      // name: data.name,
      // email: data.email
    })
    return res.data
  } catch (error) {
    throw error
  }
}
