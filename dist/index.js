"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.controlTypes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _support = require("./support");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    container: {
        border: "1px solid #efefef",
        position: "relative"
    },
    settings: {
        position: "absolute",
        top: "0px",
        right: "0px",
        background: "#ffffff"
    }
};

var ReactWorkbench = function (_React$Component) {
    _inherits(ReactWorkbench, _React$Component);

    function ReactWorkbench(props) {
        _classCallCheck(this, ReactWorkbench);

        var _this = _possibleConstructorReturn(this, (ReactWorkbench.__proto__ || Object.getPrototypeOf(ReactWorkbench)).call(this, props));

        _this.createSettingControls = function () {

            var childProps = _this.props.config.childProps;
            var controls = [];

            for (var control in childProps) {
                if (childProps.hasOwnProperty(control)) {
                    var element = childProps[control];
                    switch (element.control) {
                        case controlTypes.INPUT:
                            controls.push(_react2.default.createElement(
                                "li",
                                { key: control },
                                _react2.default.createElement(
                                    "label",
                                    { "for": control },
                                    control
                                ),
                                _react2.default.createElement("input", { type: "input", value: _this.state.childProps[control], name: control, onChange: _this.updateChildState })
                            ));
                            break;
                        case controlTypes.DROPDOWN:
                            break;
                        default:
                            break;
                    }
                }
            }

            return _react2.default.createElement(
                "ul",
                null,
                controls
            );
        };

        _this.updateChildState = function (event) {
            var name = event.target.name,
                value = event.target.value,
                currentState = Object.assign({}, _this.state);

            currentState["childProps"][name] = value;
            _this.setState(currentState);
        };

        _this.state = {
            childProps: {}
        };
        return _this;
    }

    _createClass(ReactWorkbench, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.props.config && this.props.config.childProps) {
                this.setState({
                    childProps: (0, _support.extractChildProps)(this.props.config.childProps)
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "react-workbench", style: styles.container },
                _react2.default.createElement(
                    "div",
                    { className: "settings", style: styles.settings },
                    "Settings",
                    this.createSettingControls()
                ),
                _react2.default.cloneElement(this.props.children, this.state.childProps)
            );
        }
    }]);

    return ReactWorkbench;
}(_react2.default.Component);

var controlTypes = {
    INPUT: "input",
    DROPDOWN: "select",
    JSON: "json"
};

exports.default = ReactWorkbench;
exports.controlTypes = controlTypes;