import Client from './api'

// export const GetPublicPhotos = async (id) => {
//   try {
//     const res = await Client.get(`/public/${id}`)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

export const GetPublicData = async (id) => {
  try {
    const res = await Client.get(`/public/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
