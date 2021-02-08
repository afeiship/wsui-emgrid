'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateHyperscript = require('slate-hyperscript');

var _nextSlatePlugin = require('@jswork/next-slate-plugin');

var _nextSlatePlugin2 = _interopRequireDefault(_nextSlatePlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HEADING_RE = /h([1-6])$/; /**
                               * @usage:
                               * Transforms.setNodes(editor, { type:'heading', value: 1})
                               */


var isHeading = function isHeading(tag) {
  return HEADING_RE.test(tag);
};

exports.default = _nextSlatePlugin2.default.define({
  id: 'heading',
  serialize: {
    input: function input(_ref, children) {
      var el = _ref.el;

      var nodeName = el.nodeName.toLowerCase();
      if (isHeading(nodeName)) {
        var num = HEADING_RE.exec(nodeName);
        return (0, _slateHyperscript.jsx)('element', { type: 'heading', value: num }, children);
      }
    },
    output: function output(node, children) {
      var style = node.style,
          value = node.value;

      return '<h' + value + style + '>' + children + '</h' + value + '>';
    }
  },
  render: function render(_, _ref2) {
    var attributes = _ref2.attributes,
        children = _ref2.children,
        element = _ref2.element;

    return _react2.default.createElement('h' + element.value, attributes, children);
  }
});