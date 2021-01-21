const router = require("express").Router();


const articlesRouter = require("./articles")

// const authorRouter = require("./authors")
 
// const categoryRouter = require("./categories")
 

router.use("/articles",articlesRouter)

// router.use("/author",authorsRouter)

// router.use("/category",categoriesRouter)


module.exports = router