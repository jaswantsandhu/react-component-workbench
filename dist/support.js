"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function extractChildProps(props) {
    var childProps = {};
    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            var element = props[key];
            childProps[key] = element.default || "";
        }
    }
    return childProps;
}

exports.extractChildProps = extractChildProps;