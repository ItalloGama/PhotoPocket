import Client from './api'

export const GetPhotos = async (user_id) => {
  try {
    const res = await Client.get(`/photo/${user_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostPhoto = async (user_id, data) => {
  try {
    const res = await Client.post(`/photo/${user_id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeletePhoto = async (photo_id) => {
  try {
    const res = await Client.delete(`/photo/${photo_id}`)
  } catch (error) {
    throw error
  }
}
