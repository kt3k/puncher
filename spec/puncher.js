import '../src/puncher'

describe('puncher', () => {

    describe('constructor', () => {

        it('sets default unitDur 100', () => {

            const pchr = $('<div/>').cc.init('puncher')

            expect(pchr.unitDur).to.equal(100)

        })

        it('respects unit-dur attributes', () => {

            const pchr = $('<div unit-dur="60" />').cc.init('puncher')

            expect(pchr.unitDur).to.equal(60)

        })

    })

    describe('start', () => {

        it('starts start punching characters', (done) => {

            const pchr = $('<div unit-dur="100">0123456789</div>').cc.init('puncher')
            const elem = pchr.elem

            pchr.start()

            setTimeout(() => expect(elem.text()).to.equal('0'), 20)
            setTimeout(() => expect(elem.text()).to.equal('01'), 120)
            setTimeout(() => expect(elem.text()).to.equal('012'), 220)
            setTimeout(() => expect(elem.text()).to.equal('0123'), 320)
            setTimeout(() => expect(elem.text()).to.equal('01234'), 420)
            setTimeout(() => expect(elem.text()).to.equal('012345'), 520)
            setTimeout(() => expect(elem.text()).to.equal('0123456'), 620)
            setTimeout(() => expect(elem.text()).to.equal('01234567'), 730)
            setTimeout(() => expect(elem.text()).to.equal('012345678'), 830)
            setTimeout(() => expect(elem.text()).to.equal('0123456789'), 930)

            setTimeout(done, 1000)

        })

        it('returns a promise which resolves when all the characters are shown', () => {

            const pchr = $('<div unit-dur="100">0123456789</div>').cc.init('puncher')

            let called800 = false
            let called1000 = false

            setTimeout(() => called800 = true, 800)
            setTimeout(() => called1000 = true, 1000)

            return pchr.start().then(() => { // This resolves in around 900ms

                expect(called800).to.be.true
                expect(called1000).to.be.false

            })

        })

        it('returns immediately resolved promise if the content text is empty', () => {

            const pchr = $('<div></div>').cc.init('puncher')

            return pchr.start()

        })

        it('triggers the punched event when an element is appended', (done) => {

            $('<div><i></i></div>').on('punched', () => done()).cc.init('puncher').start()

        })

    })

})
