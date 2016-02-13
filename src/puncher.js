/**
 * puncher v1.1.0
 * author: Yoshiya Hinosawa ( https://github.com/kt3k )
 * license: MIT
 */
import split from './split'

const {event, component, Coelement} = $.cc

const MODULE_NAME = 'puncher'
const START_EVENT_NAME = 'puncher'
const APPENDED_EVENT_NAME = 'punched'
const DEFAULT_UNIT_DUR = 100

@component(MODULE_NAME)
export class Puncher extends Coelement {

    constructor(elem) {

        super(elem)

        this.array = split(this.elem[0].childNodes)

        this.elem.empty()

        this.unitDur = +this.elem.attr('unit-dur') || DEFAULT_UNIT_DUR

    }

    /**
     * Starts punching the characters and elements. Returns promise which resolves when all the punching finished.
     *
     * @return {Promise}
     */
    @event(START_EVENT_NAME)
    start() {

        // finish immediately if the array is empty
        if (this.array.length === 0) {

            return Promise.resolve()

        }

        return new Promise(resolve => this.loop(resolve))

    }

    /**
     * Steps the loop, invokes itself if loop isn't finished, callbacks when finished.
     *
     * @param {Function} cb The callback
     */
    loop(cb) {

        this.append(this.array.shift())

        // finish immediately if the array is empty
        if (this.array.length === 0) {

            return cb()

        }

        setTimeout(() => this.loop(cb), this.unitDur)

    }

    /**
     * Appends the item into the element.
     *
     * @param {string} item The item
     */
    append(item) {

        if (item.length === 1) {

            // This is single character, just appends it
            this.elem.append(item)

        } else {

            item = $(item)

            this.elem.append(item)

            item.cc.up().trigger(APPENDED_EVENT_NAME)

        }

    }

}
