const router = require('express').Router()
const controller = require('../controllers/PublicController')

router.get('/:user_id', controller.GetPublicDataById)

module.exports = router
