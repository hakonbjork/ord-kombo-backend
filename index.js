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
      adj: "nice",
      sub: "server",
    },
  });
});
