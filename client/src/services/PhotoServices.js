import Client from './api'

export const GetPhotos = async () => {
  try {
    const res = await Client.get('/photo')
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
