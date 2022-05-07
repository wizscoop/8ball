input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    willekeurig = randint(0, 2)
    if (willekeurig == 2) {
        basic.showString("JA")
    } else if (willekeurig == 1) {
        basic.showString("NEE")
    } else {
        basic.showString("?")
    }
    basic.showNumber(8)
})
let willekeurig = 0
basic.showString("Stel een vraag!")
basic.showNumber(8)
basic.forever(function () {
	
})
