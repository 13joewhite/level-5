let factor = 2

function multiplyBy2(num) {
    return num * factor
}

function setFactor(newFactor){
    factor = newFactor
}

module.exports = {multiplyBy2, setFactor}