import split from './split'

const {component, Coelement} = $.cc

/**
 * puncher v1.0.0
 * author: Yoshiya Hinosawa ( https://github.com/kt3k )
 * license: MIT
 */
@component('punch')
export class Puncher extends Coelement {
    constructor(elem) {
        super(elem)

        this.array = split(this.elem[0].childNodes)
    }
}
