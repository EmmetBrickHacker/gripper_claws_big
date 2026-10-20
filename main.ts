input.onButtonPressed(Button.A, function () {
    close_claw()
})
function close_claw () {
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . . . . .
        `)
    while (angle > close) {
        angle += -15
        if (angle < close) {
            angle = close
        }
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angle)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.B, function () {
    open_claw()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showString("" + (angle))
    basic.showIcon(IconNames.Yes)
})
function open_claw () {
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        # . . . #
        . . . . .
        `)
    while (angle < open) {
        angle += 15
        if (angle > open) {
            angle = open
        }
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angle)
        basic.pause(100)
    }
}
let open = 0
let close = 0
let angle = 0
basic.showLeds(`
    . . . . .
    . # . # .
    # # . # #
    . # . # .
    . . . . .
    `)
angle = 180
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angle)
close = 30
open = 330
