// tests go here; this will not be compiled when this package is used as a library
IR.init(Pins.P15)
IR.onPressEvent(69, function () {
    basic.showIcon(IconNames.Heart)
})
