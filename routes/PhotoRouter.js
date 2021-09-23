const router = require('express').Router()
const multer = require('multer')
const controller = require('../controllers/PhotoController')
const middleware = require('../middleware')
let storage = multer.memoryStorage()
const upload = multer({
  storage: storage
})

router.get('/:user_id', controller.GetPhotos)
router.post(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  upload.single('image'),
  controller.CreatePhoto
)
router.put(
  '/:photo_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePhoto
)
router.delete(
  '/:photo_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePhoto
)

module.exports = router
