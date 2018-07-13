'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jss = require('jss');

var _jss2 = _interopRequireDefault(_jss);

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _jssNested = require('jss-nested');

var _jssNested2 = _interopRequireDefault(_jssNested);

var _jssExpand = require('jss-expand');

var _jssExpand2 = _interopRequireDefault(_jssExpand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_jss2.default.use((0, _jssNested2.default)(), (0, _jssExpand2.default)());

var styles = {
  tooltip: {
    position: 'absolute',
    background: '#000',
    padding: '10px 20px',
    color: '#fff',
    opacity: 0,
    display: 'inline-block',
    transition: 'opacity 0.3s ease'
  },
  top: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      'border-bottom': 'none',
      'border-top': '7px solid #000',
      'border-left': '7px solid transparent',
      'border-right': '7px solid transparent',
      bottom: '-7px',
      left: '50%',
      'margin-left': '-7px'
    }
  },
  right: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      'border-left': 'none',
      'border-right': '7px solid #000',
      'border-top': '7px solid transparent',
      'border-bottom': '7px solid transparent',
      left: '-7px',
      top: '50%',
      'margin-top': '-7px'
    }
  },
  bottom: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      'border-top': 'none',
      'border-bottom': '7px solid #000',
      'border-left': '7px solid transparent',
      'border-right': '7px solid transparent',
      top: '-7px',
      left: '50%',
      'margin-left': '-7px'
    }
  },
  left: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      'border-right': 'none',
      'border-left': '7px solid #000',
      'border-top': '7px solid transparent',
      'border-bottom': '7px solid transparent',
      right: '-7px',
      top: '50%',
      'margin-top': '-7px'
    }
  }
};

var _jss$createStyleSheet = _jss2.default.createStyleSheet(styles).attach(),
    classes = _jss$createStyleSheet.classes;

var propTypes = {
  customClass: _propTypes2.default.string
};

var defaultProps = {
  customClass: ''
};

var ReactTooltip = function (_Component) {
  _inherits(ReactTooltip, _Component);

  function ReactTooltip(props) {
    _classCallCheck(this, ReactTooltip);

    return _possibleConstructorReturn(this, (ReactTooltip.__proto__ || Object.getPrototypeOf(ReactTooltip)).call(this, props));
  }

  _createClass(ReactTooltip, [{
    key: 'handleMouseout',
    value: function handleMouseout(selector) {
      return function (e) {
        if (e.target.getAttribute('tooltip')) {
          selector.style.opacity = '0';
        }
      };
    }
  }, {
    key: 'handleMouseenter',
    value: function handleMouseenter(selector) {
      var _this2 = this;

      return function (e) {
        if (e.target.getAttribute('tooltip')) {
          selector.innerText = e.target.getAttribute('tooltip');
          var place = e.target.getAttribute('tooltip-place');
          var customClass = _this2.props.customClass;

          selector.style.opacity = '0.8';
          switch (place) {
            case 'top':
              selector.className = 'vmo-fed-react-tooltip ' + customClass + ' ' + classes.tooltip + ' ' + classes.top;
              _this2.showTop(e, selector);
              break;
            case 'right':
              selector.className = 'vmo-fed-react-tooltip ' + customClass + ' ' + classes.tooltip + ' ' + classes.right;
              _this2.showRight(e, selector);
              break;
            case 'bottom':
              selector.className = 'vmo-fed-react-tooltip ' + customClass + ' ' + classes.tooltip + ' ' + classes.bottom;
              _this2.showBottom(e, selector);
              break;
            case 'left':
              selector.className = 'vmo-fed-react-tooltip ' + customClass + ' ' + classes.tooltip + ' ' + classes.left;
              _this2.showLeft(e, selector);
              break;
            default:
              break;
          }
        }
      };
    }
  }, {
    key: 'showTop',
    value: function showTop(e, selector) {
      selector.style.top = e.target.getBoundingClientRect().y - selector.clientHeight - 10 + 'px';
      selector.style.left = e.target.getBoundingClientRect().x + e.target.getBoundingClientRect().width / 2 - selector.clientWidth / 2 + 'px';
    }
  }, {
    key: 'showRight',
    value: function showRight(e, selector) {
      selector.style.top = e.target.getBoundingClientRect().y + e.target.getBoundingClientRect().height / 2 - selector.clientHeight / 2 + 'px';
      selector.style.left = e.target.getBoundingClientRect().x + e.target.getBoundingClientRect().width + 10 + 'px';
    }
  }, {
    key: 'showLeft',
    value: function showLeft(e, selector) {
      selector.style.top = e.target.getBoundingClientRect().y + e.target.getBoundingClientRect().height / 2 - selector.clientHeight / 2 + 'px';
      selector.style.left = e.target.getBoundingClientRect().x - selector.clientWidth - 10 + 'px';
    }
  }, {
    key: 'showBottom',
    value: function showBottom(e, selector) {
      selector.style.top = e.target.getBoundingClientRect().y + e.target.getBoundingClientRect().height + 10 + 'px';
      selector.style.left = e.target.getBoundingClientRect().x + e.target.getBoundingClientRect().width / 2 - selector.clientWidth / 2 + 'px';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var tooltipSelector = document.querySelector('.vmo-fed-react-tooltip');
      document.body.addEventListener('mouseover', this.handleMouseenter(tooltipSelector));
      document.body.addEventListener('mouseout', this.handleMouseout(tooltipSelector));
    }
  }, {
    key: 'render',
    value: function render() {
      var customClass = this.props.customClass;

      return _react2.default.createElement('div', { className: 'vmo-fed-react-tooltip ' + customClass + ' ' + classes.tooltip });
    }
  }]);

  return ReactTooltip;
}(_react.Component);

ReactTooltip.propTypes = propTypes;
ReactTooltip.defaultProps = defaultProps;

exports.default = ReactTooltip;
