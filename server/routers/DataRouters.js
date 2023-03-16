import express from "express";
import Mahalle from "../models/mahalle.js";
import Il from "../models/il.js";
import Ilce from "../models/ilce.js";
const router = express.Router();

router.get("/dropDown3", async (req, res) => {
  try {
    const mahalle = await Mahalle.find();
    res.status(200).json(mahalle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/dropDown2", async (req, res) => {
  try {
    const ilce = await Ilce.find();
    res.status(200).json(ilce);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/dropDown1", async (req, res) => {
  try {
    const il = await Il.find();
    res.status(200).json(il);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
