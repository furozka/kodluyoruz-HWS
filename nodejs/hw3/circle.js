
const circleArea = (r)=>{
    return (console.log("area: ",Math.PI*Math.pow(r,2)))
}

const circleCircumference = (r)=>{
    return (console.log("circumference: ", 2*Math.PI*r))
}

module.exports = {
    circleArea,
    circleCircumference
}