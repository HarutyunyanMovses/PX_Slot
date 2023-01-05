//lib
const { Router } = require("express");
// controler 
const userControler = require("..//controllers/userControler")
//router
const router = new Router();

router.post("/user_data",userControler.userData)

module.exports = router;
