import a from "..//componentIcons/0.PNG"
import b from "..//componentIcons/1.PNG"
import c from "..//componentIcons/2.PNG"
import d from "..//componentIcons/3.PNG"
import q from "..//componentIcons/4.PNG"
import w from "..//componentIcons/5.PNG"
import e from "..//componentIcons/6.PNG"
import z from "..//componentIcons/7.png"
import x from "..//componentIcons/8.PNG"
import r from "..//componentIcons/9.PNG"
import v from "..//componentIcons/10.PNG"
import f from "..//componentIcons/11.PNG"
import lineColors from "./lineColors"

const checkImg = (info, index) => {
    switch (info) {
        case 0:
            return a
        case 1:
            return b
        case 2:
            return c
        case 3:
            return d
        case 4:
            return q
        case 5:
            return w
        case 6:
            return e
        case 7:
            return z
        case 8:
            return x
        case 9:
            return r
        case 10:
            return v
        case 11:
            return f
        default: alert(`what is it ${info} ???`)
    }
}
let ctxG = ""

const drawDemo = () => {
    const array = []
    for (let i = 0; i < 3; i++) {
        const arr = []
        for (let j = 0; j < 5; j++) {
            arr.push(Math.round(Math.random() * 10))
        }
        array.push(arr)
    }
    return array
}

const draw = (ctx, data) => {
    ctxG = ctx
    data.map((lines, i) => {
        lines.map((item, j) => {
            var img = new Image();
            img.onload = function () {
                ctx.drawImage(img, j * 60, i * 50, 60, 50);
            };
            img.src = checkImg(item);
            return null
        })
        return null
    })
}

function SpinAnimation(dispatch) {
    const interval = setInterval(() => {
        const demo = drawDemo()
        dispatch(demo)
    }, 500);

    return function clerAnimation() {
        clearInterval(interval)
    }

}

function drawJoker(vertikly) {
    vertikly.map(item => {
        let timer = 1
        item.map(i => {
            setTimeout(() => {
                var img = new Image();
                img.onload = function () {
                    ctxG.drawImage(img, i[1] * 60, i[0] * 50, 60, 50);
                };
                img.src = z;
            }, 500 * timer);
            timer++
            return null
        })
        return null
    })
}

function drawWinLines(winLines, winSxema) {
    let counter = 0
    winLines.map(lines => {
        lines.map(i => {
          
            return null
        })
        counter++
        return null
    })
}


export { drawDemo, draw, SpinAnimation, drawJoker, drawWinLines }