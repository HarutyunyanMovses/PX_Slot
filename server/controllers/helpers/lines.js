const lines = [
    // horizonakan
    [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],// horizonakan 1
    [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]],// horizonakan 2
    [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]],// horizonakan 3
    //ankyunagic
    [[0, 0], [1, 1], [2, 2], [1, 3], [0, 4]], // ankyunagcov dzax verevic
    [[2, 0], [1, 1], [0, 2], [1, 3], [2, 4]], //  ankyunagic dzax nerqevic
    //x a dzev 
    [[0, 0], [0, 1], [1, 2], [2, 3], [2, 4]], // x a dzev dzax verevic
    [[2, 0], [2, 1], [1, 2], [0, 3], [0, 4]],// x a dzev dzax nerqevic
    //navak
    [[1, 0], [0, 1], [0, 2], [0, 3], [1, 4]], // dzax mejtexic verevic srjvac navak
    [[1, 0], [2, 1], [2, 2], [2, 3], [1, 4]], // dzax mejtexic nerqevic uxix navak
    [[0, 0], [1, 1], [1, 2], [1, 3], [0, 4]], // dzax verevic uxix navak
]

const vertically = [
    // uxxahayac
    [[0, 0], [1, 0], [2, 0]], // uxxahayac 1
    [[0, 1], [1, 1], [2, 1]], // uxxahayac 2
    [[0, 2], [1, 2], [2, 2]], // uxxahayac 3
    [[0, 3], [1, 3], [2, 3]], // uxxahayac 4
    [[0, 4], [1, 4], [2, 4]], // uxxahayac 5
]

module.exports = {lines,vertically}