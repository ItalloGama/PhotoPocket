const router = require('express').Router()
const controller = require('../controllers/PhotoController')
const middleware = require('../middleware')
router.get('/', controller.GetPhotos)
router.post(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePhoto
)
// router.put(
//   '/:photo_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.UpdatePhoto
// )
// router.delete(
//   '/:photo_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.DeletePhoto
// )

module.exports = router
