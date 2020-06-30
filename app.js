const express = require("express")
const app = express();
const router = require("./Routes/index")
const bodyParser = require("body-parser")



app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

app.get("/callback", (req, use)=>{

    console.log(req.query)

})

app.listen(3400, ()=>console.log("server running...."))