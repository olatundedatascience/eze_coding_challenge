const router = require("express").Router();
const HomeController = require("../Controllers/HomeController")


//router()

router.get("/Home/callback", HomeController.Callback)



module.exports = router;