def run_motor(motor: number):
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.pause(200)
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 100)
    basic.pause(300)
    maqueen.motor_stop(maqueen.Motors.ALL)
    if motor == 1:
        chois = maqueen.Motors.M1
    elif motor == 2:
        chois = maqueen.Motors.M2
    while maqueen.ultrasonic(PingUnit.CENTIMETERS) < 45:
        maqueen.motor_run(chois, maqueen.Dir.CW, 100)
    basic.pause(300)

def on_forever():
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) > 40:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
        basic.show_number(0)
    else:
        basic.show_number(1)
        if randint(0, 10) <= 6:
            run_motor(1)
        else:
            run_motor(2)
basic.forever(on_forever)
