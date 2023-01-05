//lib
const { Router } = require("express");
// controler 
const spinControler = require("..//controllers/spinControler")
//router
const router = new Router();


router.post("/new_spin", spinControler.spin)


module.exports = router;
