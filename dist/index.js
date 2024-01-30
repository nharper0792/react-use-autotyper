'use strict';



function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var usehooksTs = require('usehooks-ts');

var useTextTypewriter = function (items) {
    var _a = react.useState(0), itemsIndex = _a[0], setItemsIndex = _a[1];
    var _b = react.useState(0), typingIndex = _b[0], setTypingIndex = _b[1];
    var _c = react.useState(false), forward = _c[0], setForward = _c[1];
    var _d = react.useState('|'), typedText = _d[0], setTypedText = _d[1];
    usehooksTs.useInterval(function () {
        if (typingIndex > items[itemsIndex].length && forward) {
            setForward(false);
            return;
        }
        else if (typingIndex == 0) {
            setForward(true);
            setItemsIndex((itemsIndex + 1) % items.length);
        }
        setTypingIndex(typingIndex + (forward ? 1 : -1));
        setTypedText(items[itemsIndex].substring(0, typingIndex) + '|');
    }, Math.random() * 75 + 100);
    return typedText;
};

exports.useTextTypewriter = useTextTypewriter;
