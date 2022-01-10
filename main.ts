function run_motor (motor: number) {
    let chois: number;
let chois2: number;
if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(300)
    }
    if (motor == 1) {
        chois = maqueen.Motors.M1
chois2 = maqueen.Motors.M2
    } else if (motor == 2) {
        chois = maqueen.Motors.M2
chois2 = maqueen.Motors.M1
    }
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 45) {
        maqueen.motorRun(chois, maqueen.Dir.CW, 255)
maqueen.motorRun(chois2, maqueen.Dir.CCW, 255)
    }
    basic.pause(0)
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 40) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        if (randint(0, 10) <= 6) {
            run_motor(1)
        } else {
            run_motor(2)
        }
    }
})
control.inBackground(function () {
    music.setVolume(50)
    while (true) {
        music.playMelody("F E F A F E F G ", 500)
    }
})
