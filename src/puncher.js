/**
 * puncher v7.0.0
 * author: Yoshiya Hinosawa ( https://github.com/kt3k )
 * license: MIT
 */
import split from './split'

const { on, component } = capsid

const MODULE_NAME = 'puncher'
const START_EVENT_NAME = 'puncher-start'
const STARTED_EVENT_NAME = 'puncher-started'
const ENDED_EVENT_NAME = 'puncher-ended'
const APPENDED_EVENT_NAME = 'puncher-appended'
const DEFAULT_UNIT_DUR = 100

@component(MODULE_NAME)
export class Puncher {

  __init__ () {
    this.array = split(this.el.childNodes)

    this.$el.empty()

    this.unitDur = +this.el.getAttribute('unit-dur') || DEFAULT_UNIT_DUR
  }

  /**
   * Starts punching the characters and elements. Returns promise which resolves when all the punching finished.
   * @return {Promise}
   */
  @on(START_EVENT_NAME)
  start () {
    this.el.dispatchEvent(new CustomEvent(STARTED_EVENT_NAME, { bubbles: true }))

    // finish immediately if the array is empty
    if (this.array.length === 0) {
      return Promise.resolve()
    }

    return new Promise(resolve => this.loop(resolve)).then(() => {
      this.el.dispatchEvent(new CustomEvent(ENDED_EVENT_NAME, { bubbles: true }))
    })
  }

  /**
   * Steps the loop, invokes itself if loop isn't finished, callbacks when finished.
   * @param {Function} cb The callback
   */
  loop (cb) {
    this.append(this.array.shift())

    // finish immediately if the array is empty
    if (this.array.length === 0) {
      return cb()
    }

    setTimeout(() => this.loop(cb), this.unitDur)
  }

  /**
   * Appends the item into the element.
   * @param {string} item The item
   */
  append (item) {
    if (item.length === 1) {
      // This is single character, just appends it
      this.$el.append(item)
    } else {
      item = $(item)

      this.$el.append(item)

      item.cc()
      item[0].dispatchEvent(new CustomEvent(APPENDED_EVENT_NAME, { bubbles: true }))
    }
  }
}
