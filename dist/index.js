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

import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

var useTextTypewriter = function (items) {
    var _a = useState(0), itemsIndex = _a[0], setItemsIndex = _a[1];
    var _b = useState(0), typingIndex = _b[0], setTypingIndex = _b[1];
    var _c = useState(false), forward = _c[0], setForward = _c[1];
    var _d = useState('|'), typedText = _d[0], setTypedText = _d[1];
    useInterval(function () {
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

export { useTextTypewriter };
