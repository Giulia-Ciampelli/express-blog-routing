// importazione db
const posts = require('../db/db.js');

// creazione index
const index = (req,res) => {
    res.json({
        data: posts,
        count: posts.length
    })
}

// creazione show

//esportazione totale
module.exports = {
    index
}