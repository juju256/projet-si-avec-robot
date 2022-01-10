def run_motor(motor: number):
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) <= 10:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 255)
        basic.pause(300)
    if motor == 1:
        chois = maqueen.Motors.M1
        chois2 = maqueen.Motors.M2
    elif motor == 2:
        chois = maqueen.Motors.M2
        chois2 = maqueen.Motors.M1
    while maqueen.ultrasonic(PingUnit.CENTIMETERS) < 45:
        maqueen.motor_run(chois, maqueen.Dir.CW, 255)
        maqueen.motor_run(chois2, maqueen.Dir.CCW, 255)
    basic.pause(0)

def on_forever():
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) > 40:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
    else:
        if randint(0, 10) <= 6:
            run_motor(1)
        else:
            run_motor(2)
basic.forever(on_forever)

def on_in_background():
    music.set_volume(50)
    while True:
        music.play_melody("F E F A F E F G ", 500)
control.in_background(on_in_background)
