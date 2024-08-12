const express = require("express");
const { signUp, Login, getUserByEmail,findusergrade } = require("../controllers/authLSController");
const router = express.Router();

router.post("/signup",signUp );
router.post("/login",Login );
router.get("/getUserByEmail/:email",getUserByEmail);
router.get("/findusergrade/:email",findusergrade);

module.exports=router;
