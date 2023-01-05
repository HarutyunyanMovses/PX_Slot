function randomSpin() {
    const result = []
    let bool = 0
    let jokerCount = 3

    function randomNumber(){
        return  Math.round(Math.random() * 10)
    }

    function randomLine(){
        const line = []
        for (let j = 0; j < 5; j++) {
             line.push(randomNumber())
        }

        return line
    }

    for (let i = 0; i < 3; ) {
          let line = randomLine()
        if (line[0]===7 || line[4]===7) { }else{
            bool++
            result.push(line)
        }

        if(bool === 3){
            break
        }
    }


    return  result
}

module.exports = randomSpin