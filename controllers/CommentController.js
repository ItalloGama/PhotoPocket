const { User, PictureCard, Comment } = require ('../models')

const GetComment = async (req, res) => {
    try {
        const comment = await Comment.findAll()
        res.send(comment)
    } catch (error) {
        throw error
    }
}

const CreateComment = async (req, res) => {
    try {
        let user_id = req.params.user_id
        let photo_id = req.params.photo_id
        const comment = await Comment.create({ pictureCardId: photo_id , userId: user_id, ...req.body })
        res.send(comment)
    } catch (error) {
        throw error
    }
}

const UpdateComment = async (req, res) => {
    try {
        const comment = await Comment.update(
        {...req.body },
        { where: { id: req.params.photo_id }, returning: true }
        )
        res.send(comment)
    } catch (error) {
        throw error
    }
}

const DeleteComment = async (req, res) => {
    try {
        await Comment.destroy({ where: { id: req.params.photo_id } })
        res.send({
        msg: 'Comment Deleted',
        payload: req.params.photo_id,
        status: 'Ok'
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateComment,
    GetComment,
    UpdateComment,
    DeleteComment
}