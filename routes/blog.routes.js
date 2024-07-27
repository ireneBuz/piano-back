const router = require("express").Router();

const {
    getAllBlogsCards,
    createBlog,
    getAllBlogsArticles
} = require("../controllers/blogs.controllers");

router.get("/", getAllBlogsCards);
router.get("/:readMoreLink", getAllBlogsArticles);
router.post("/new", createBlog);



module.exports = router;