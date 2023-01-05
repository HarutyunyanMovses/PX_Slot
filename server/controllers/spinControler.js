// helpers
const {checkRandom, checkBalans, modifyRandom } = require("./helpers/checkSpin");
const randomSpin = require("./helpers/random")

class SpinControler {
    async spin(req, res) {
        try {
            let newBalance = checkBalans(req.body.spinSum)
            if (newBalance === false) {
                console.log(1);
                res.status(401).json({ message: "balance is small" })
            } else {

                let random = await randomSpin()
                if (random) {
                    const modify = modifyRandom(random)
                    const result = await checkRandom(modify.newRandom,modify.vertikallyJoker)
                    res.json({ random, result, newBalance})
                } else {
                    res.status(402).json({ message: `err 402` })  //  not spin result
                }
            }
        } catch (e) {
            console.log(e);
            res.json({ message: "not enternet connetion", code: 400 }) // not connectin 
        }
    }
}

module.exports = new SpinControler()