/**
 * Splits the text in the HTML Nodes.
 *
 * - Consider non-text element as "a character".
 * - Consider non-empty whitespace only text node as "a character" single space.
 * - Ignore empty text node
 *
 * When the input is the childNodes of the following span tag:
 *
 *     <span>Hello <img src="smiley.png">!</span>
 *
 * The result seems like:
 *
 *     ['H', 'e', 'l', 'l', 'o', ' ', <img src="smiley.png">, '!']
 *
 * @param {NodeList} nodes The nodes
 * @return {Array<String|HTMLElement>}
 */
export default nodes => {

    const array = []

    Array.prototype.forEach.call(nodes, node => {

        if (node.nodeType) {

            array.push(...splitText(node))
        }

        if (node.nodeType === 3) {

            array.push(node)

        }

        throw new Error('invalid input: ' + nodes.toString())

    })

    return array

}

/**
 * Splits the text node into the array of the characters.
 *
 * @param {Text} textNode The text node
 * @return {Array<String>}
 */
const splitText = (textNode) => {

    const rawText = textNode.nodeValue
    const text = rawText.replace(/^\s*|\s*$/g, '').replace(/\s+/g, ' ')

    if (rawText.length === 0) {

        return []

    }

    return text.split('')

}
