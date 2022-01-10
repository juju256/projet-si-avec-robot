function run_motor(motor: number) {
    let chois: number;
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    basic.pause(300)
    maqueen.motorStop(maqueen.Motors.All)
    if (motor == 1) {
        chois = maqueen.Motors.M1
    } else if (motor == 2) {
        chois = maqueen.Motors.M2
    }
    
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 45) {
        maqueen.motorRun(chois, maqueen.Dir.CW, 100)
    }
    basic.pause(300)
}

basic.forever(function on_forever() {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 40) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.showNumber(0)
    } else {
        basic.showNumber(1)
        if (randint(0, 10) <= 6) {
            run_motor(1)
        } else {
            run_motor(2)
        }
        
    }
    
})
