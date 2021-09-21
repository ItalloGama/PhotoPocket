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
    const res = await Client.post(`/photo/${user_id}`, {
      img: data.img,
      description: data.description
    })
    return res.data
  } catch (error) {
    throw error
  }
}
