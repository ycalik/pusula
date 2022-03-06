let derece = 0
basic.forever(function () {
    derece = input.compassHeading()
    if (derece < 45 || derece > 315) {
        basic.showArrow(ArrowNames.North)
    } else if (derece < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (derece < 225) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.East)
    }
})
