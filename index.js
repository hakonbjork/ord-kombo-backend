const db = require("./db");

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));

// GET endpoint
app.get("/words", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send({
    body: {
      adj: db.getRandomAdj(),
      sub: db.getRandomNoun(),
    },
  });
});

app.post("/suggestion", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  const { sub, adj } = req.body;

  if (!sub && !adj) {
    res.status(418).send({ message: "Need word suggestion" });
  } else {
    if (sub) {
      db.addNounToDB(sub);
    }
    if (adj) {
      db.addAdjToDB(adj);
    }
  }
});

app.options("/suggestion", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");

  res.status(200).send();
});
