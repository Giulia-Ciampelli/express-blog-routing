// importazione db
const posts = require('../db/db.js');

// creazione index
const index = (req, res) => {
    res.json({
        data: posts,
        count: posts.length
    })
}

// creazione show
const show = (req, res) => {
    const post = posts.find(post => post.slug === (req.params.slug));

    // condizioni per ritorno
    if(!post) {
        return res.status(404).json({
            error: '404: post not found'
        })
    }
    return res.json({
        data: post
    })
}

//esportazione totale
module.exports = {
    index,
    show
}