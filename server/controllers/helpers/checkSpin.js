const { lines, vertically } = require("./lines");
const user = require("./test");



function checkBalans(spinSum) {
    if (user.balance >= spinSum && user.balance > 0 && spinSum > 0) {
        return user.balance -= spinSum
    } else {
        return false
    }
}

function checkRandom(random,vertikallyJoker) {
    let arr = []
    let win = []
    let freeSpin = checkFreeSpin(random)
    lines.map(line => {
        let bool = true
        let check = [random[line[0][0]][line[0][1]]]
        let winIndex = []
        line.map(item => {
            if (check[0] === random[item[0]][item[1]] && bool
                || random[item[0]][item[1]] === 7 && bool) {

                check.push(random[item[0]][item[1]])
                winIndex.push(item)
            } else if (checkArray(check) || check.includes(random[item[0]][item[1]])&& bool ) {
                check.push(random[item[0]][item[1]])
                winIndex.push(item)
            } else {
                bool = false
            }
        })
        if (check.length - 1 >= 3) {
            arr.push(line)
            win.push(winIndex)
        }
    })
    return {
        winSxema: arr,
        winLines:win,
        freeSpin,
        vertikallyJoker
    }
}

function checkArray(arr) {
    let bool = true
    arr.map(item => {
        if (item !== 7) {
            bool = false
        }
    })
    return bool
}

function modifyRandom(random) {
    const newRandom = random.map(a => [...a])
    const vertikallyJoker = []
    random.map((item, i) => {
        item.map((num, j) => {
            if (num === 7) {
                vertically[j].map(k => {
                    newRandom[k[0]][k[1]] = 7
                })
                vertikallyJoker.push(vertically[j])
            }
        })
    })
    return {newRandom,vertikallyJoker}
}
function checkFreeSpin(random) {
    const freeSpin = []
    random.map((item, i) => {
        item.map((num, j) => {
            if (num === 3) {
                freeSpin.push([i, j])
            }
        })
    })
    return freeSpin.length >= 3 ? freeSpin : false
}

function checkJoker(random, winIndexs) {
    console.log(random);
    console.log(winIndexs);
    try {

        // const jokerAnimation = []
        // const vertikalJoker = []

        // random.map(item => {
        //     winIndexs.map(j => {
        //         if (item[j[0], j[1] === 7]) {
        //             vertikalJoker.push(j)
        //         }
        //     })
        // })

        // vertically.map(line => {
        //     vertikalJoker.map(index => {
        //         line.map(i => {
        //             if (i[0] === index[0] && i[1] === index[1]) {
        //                 jokerAnimation.push(line)
        //             }
        //         })
        //     })
        // })

        // console.log(vertikalJoker);
        // return jokerAnimation
    } catch (e) {
        console.log(e);
    }
}



module.exports = { checkBalans, checkRandom, modifyRandom }