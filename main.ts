let y = 0
let x = 0

// Schwellenwert für die Erkennung der Bewegungsrichtung.
// Nur für LED Anzeige relevant.
let threshold_x = 200
// Schwellenwert für die Erkennung der Bewegungsrichtung.
// Nur für LED Anzeige relevant.
let threshold_y = 200

serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)

basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    serial.writeLine("" + x + "," + y)

    // Optional: Anzeige der Richtungspfeile für LED Anzeige
    if (y < 0 - threshold_y) {
        if (x < 0 - threshold_x) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (x > threshold_x) {
            basic.showArrow(ArrowNames.NorthEast)
        } else {
            basic.showArrow(ArrowNames.North)
        }
    } else if (y > threshold_y) {
        if (x < 0 - threshold_x) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (x > threshold_x) {
            basic.showArrow(ArrowNames.SouthEast)
        } else {
            basic.showArrow(ArrowNames.South)
        }
    } else {
        if (x < 0 - threshold_x) {
            basic.showArrow(ArrowNames.West)
        } else if (x > threshold_x) {
            basic.showArrow(ArrowNames.East)
        } else {
            basic.clearScreen()
        }
    }
})
