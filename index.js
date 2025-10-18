const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/api/players/:page", (req, res) => {
  const page = req.params.page;

  let url = process.env.URL_PLAYER_PAGES;

  if (page) {
    url += `?page=${page}`;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => res.json(data))

    .catch((error) => console.error(error));
  console.log(url);
});

app.post("/api/players/", (req, res) => {
  const namePlayer = req.body.namePlayer;
  let url = process.env.URL_PLAYER_REQUEST + namePlayer;

  fetch(url)
    .then((response) => response.json())
    .then((data) => res.json(data))

    .catch((error) => console.error(error));
  //console.log(url);
});

app.listen(port, () => {
  console.log(`Server attivo su porta ${port}`);
});
