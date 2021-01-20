const router = require("express").Router();

const db = require("../../utils/db");

router.get("/", async (req, res, next) => {
  try {
      console.log()
    const { rows } = await db.query("SELECT * FROM articles;");
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM articles WHERE id=${parseInt(req.params.id, 10)}`
    );
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { headLine,subhead,content,cover} = req.body;
    const query = `INSERT INTO  articles (headLine, subHead,content,cover) VALUES ('${headLine}','${subHead}','${content}','${cover}');`;
    const result = await db.query(query);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { headLine,subhead,content,cover } = req.body;


    const id = parseInt(req.params.id);

    const query = `UPDATE articles SET headLine='${headLine}', subHead='${subHead}', content='${content}', cover ='${content}' WHERE id=${id}`;

    const result = await db.query(query);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `DELETE FROM articles WHERE id=${parseInt(req.params.id, 10)}`
    );
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

module.exports = router;