/**
 * puncher v1.0.0
 * author: Yoshiya Hinosawa ( https://github.com/kt3k )
 * license: MIT
 */
import split from './split'

const {event, component, Coelement} = $.cc

const MODULE_NAME = 'puncher'
const DEFAULT_UNIT_DUR = 100

@component(MODULE_NAME)
export class Puncher extends Coelement {

    constructor(elem) {

        super(elem)

        this.array = split(this.elem[0].childNodes)

        this.elem.empty()

        this.unitDur = +this.elem.data('unit-dur') || DEFAULT_UNIT_DUR

    }

    @event(MODULE_NAME)
    start() {

        this.loop()

    }

    loop() {

        if (this.array.length === 0) {

            return

        }

        this.elem.append(this.array.shift())

        setTimeout(() => this.loop(), this.unitDur)

    }

}
