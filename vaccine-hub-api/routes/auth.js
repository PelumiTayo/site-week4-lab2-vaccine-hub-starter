const express = require("express");
const router = express.Router();

router.post("/login", (req, res, next) => {
  try {
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/register", (req, res, next) => {
  try {
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: error.message });
  }
});
