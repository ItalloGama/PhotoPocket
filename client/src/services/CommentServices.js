import Client from './api'

export const GetComments = async (photo_id) => {
  try {
    const res = await Client.get(`/comment/${photo_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
