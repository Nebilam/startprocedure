input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P14, 1)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P15, 1)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P16, 1)
    music.playTone(698, music.beat(BeatFraction.Double))
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
