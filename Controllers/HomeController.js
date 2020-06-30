class HomeController {
    constructor(){}

    static Callback(req, res){
        console.log(req.query)

        res.status(200).send(req.query)

    }

}

module.exports = HomeController