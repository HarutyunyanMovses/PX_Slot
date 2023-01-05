const user = require("./helpers/test")

class UserControler {

     userData(req,res){
        try {
            res.json(user)
        } catch (e) {
            res.json({message:"not enternet connetion",code:400}) // not connectin 
        }
     }
}

module.exports = new UserControler()