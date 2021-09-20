const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')
router.get('/', controller.GetComments)
router.post(
  '/:user_id/:photo_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)
router.put(
  '/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateComment
)
router.delete(
  '/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)

module.exports = router
