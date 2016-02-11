(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Puncher = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _desc, _value, _class2; /**
                                                  * puncher v1.0.0
                                                  * author: Yoshiya Hinosawa ( https://github.com/kt3k )
                                                  * license: MIT
                                                  */


var _split = require('./split');

var _split2 = _interopRequireDefault(_split);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _$$cc = $.cc;
var event = _$$cc.event;
var component = _$$cc.component;
var Coelement = _$$cc.Coelement;


var MODULE_NAME = 'puncher';
var DEFAULT_UNIT_DUR = 100;

var Puncher = exports.Puncher = (_dec = component(MODULE_NAME), _dec2 = event(MODULE_NAME), _dec(_class = (_class2 = function (_Coelement) {
    _inherits(Puncher, _Coelement);

    function Puncher(elem) {
        _classCallCheck(this, Puncher);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Puncher).call(this, elem));

        _this.array = (0, _split2.default)(_this.elem[0].childNodes);

        _this.elem.empty();

        _this.unitDur = +_this.elem.data('unit-dur') || DEFAULT_UNIT_DUR;

        return _this;
    }

    _createClass(Puncher, [{
        key: 'start',
        value: function start() {

            this.loop();
        }
    }, {
        key: 'loop',
        value: function loop() {
            var _this2 = this;

            if (this.array.length === 0) {

                return;
            }

            this.elem.append(this.array.shift());

            setTimeout(function () {
                return _this2.loop();
            }, this.unitDur);
        }
    }]);

    return Puncher;
}(Coelement), (_applyDecoratedDescriptor(_class2.prototype, 'start', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'start'), _class2.prototype)), _class2)) || _class);

},{"./split":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

exports.default = function (nodes) {

    var array = [];

    Array.prototype.forEach.call(nodes, function (node) {

        if (node.nodeType === 3) {

            array.push.apply(array, _toConsumableArray(splitText(node)));
        } else if (node.nodeType === 1) {

            array.push(node.outerHTML);
        } else {

            throw new Error('invalid node.nodeType: ' + node.nodeType);
        }
    });

    if (array[0] === ' ') {
        array.shift();
    }
    if (array[array.length - 1] === ' ') {
        array.pop();
    }

    return array;
};

/**
 * Splits the text node into the array of the characters.
 *
 * @param {Text} textNode The text node
 * @return {Array<String>}
 */


var splitText = function splitText(textNode) {

    var rawText = textNode.nodeValue;
    var text = rawText.replace(/\s+/g, ' ');

    if (rawText.length === 0) {

        return [];
    }

    return text.split('');
};

},{}]},{},[1]);
