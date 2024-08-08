
const express = require("express");
const { signUp, Login, getUserByEmail } = require("../controllers/authLSController");
const router = express.Router();

router.post("/signup",signUp );
router.post("/login",Login );
router.get("/getUserByEmail/:email",getUserByEmail);

module.exports=router;
