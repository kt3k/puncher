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
    if (node.nodeType === 3) {
      array.push(...splitText(node))
    } else if (node.nodeType === 1) {
      array.push(node.outerHTML)
    } else {
      throw new Error('invalid node.nodeType: ' + node.nodeType)
    }
  })

  if (array[0] === ' ') { array.shift() }
  if (array[array.length - 1] === ' ') { array.pop() }

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
  const text = rawText.replace(/\s+/g, ' ')

  if (rawText.length === 0) {
    return []
  }

  return text.split('')
}
