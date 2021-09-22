import Client from './api'

export const GetComments = async (photo_id) => {
  try {
    const res = await Client.get(`/comment/${photo_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostComment = async (user_id, photo_id, data) => {
  try {
    const res = await Client.post(`/comment/${user_id}/${photo_id}`, {
      comment: data
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async (comment_id) => {
  try {
    await Client.delete(`/comment/${comment_id}`)
  } catch (error) {
    throw error
  }
}
