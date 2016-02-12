import split from '../src/split'

describe('split', () => {

    it('splits the text node into characters', () => {

        const splitted = split($('<div>Hello</div>')[0].childNodes)

        expect(splitted).to.eql(['H', 'e', 'l', 'l', 'o'])

    })

    it('handles doms in childNodes as a single character', () => {

        const arr = split($('<div>a<br>b</div>')[0].childNodes)

        expect(arr[0]).to.equal('a')
        expect(arr[1]).to.equal('<br>')
        expect(arr[2]).to.equal('b')

    })

    it('throws when the nodes contains node of nodeType != 1 or 3', () => {

        expect(() => split([{nodeType: 2}])).to.throw();

    })

    it('reduces multiple consecutive whitespaces into one spece', () => {

        const arr = split($('<div>a   b</div>')[0].childNodes)

        expect(arr[0]).to.equal('a')
        expect(arr[1]).to.equal(' ')
        expect(arr[2]).to.equal('b')

    })

    it('removes the leading and trailing whitespaces', () => {

        const arr = split($('<div>   a   </div>')[0].childNodes)

        expect(arr[0]).to.equal('a')
        expect(arr.length).to.equal(1)

    })

})
