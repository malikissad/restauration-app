require("dotenv").config();

const router = require("./src/route.js");
const cookieparser = require("cookie-parser");
const db = require("./models/index.js");

const express = require("express");
const app = express();
// const commande = require('./src/models/commande.js')

app.use(express.json());
app.use(cookieparser());

app.use("/auth", router);

app.get("/testCommandePlat", async (req, res) => {
  try {
    const comm = await db.commande.findOne({
      where: { id_comm: 1 },
      attributes: ["id_comm"],
    });
    //   const co = comm.id_comm
    const pl = await db.Plat.findOne({
      where: { nom_palt: "Lasagnes" },
      attributes: ["nom_palt"],
    });

    await comm.addPlat(pl);

    return res.json("le row est ajouter avec seccés");
    // const info = Object.keys(db)
    // return res.json(info)
  } catch (err) {
    return res.json(err.message);
  }
});

app.get("/testCommandeBoisson", async (req, res) => {
  try {
    const comm = await db.commande.findOne({
      where: { id_comm: 2 },
      attributes: ["id_comm"],
    });
    const bo = await db.Boisson.findOne({
      where: { nom_boisson: "coca" },
      attributes: ["nom_boisson"],
    });
    await comm.addBoisson(bo);

    return res.json("ajouter avec succés");
  } catch (err) {
    return res.json(err.message);
  }
});

app.listen(process.env.PORT);
