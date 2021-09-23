const router = require('express').Router()
const controller = require('../controllers/PublicController')

router.get('/:user_id', controller.GetPhotosById)

module.exports = router
