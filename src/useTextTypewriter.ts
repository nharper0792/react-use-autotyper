import {useState} from "react";
import {useInterval} from "usehooks-ts";

export function useTextTypewriter(items:string[]){
    const [itemsIndex, setItemsIndex] = useState(0)
    const [typingIndex, setTypingIndex] = useState(0)
    const [forward, setForward] = useState(false)
    const [typedText, setTypedText] = useState('|')
    useInterval(() => {
        if (typingIndex > items[itemsIndex].length && forward) {
            setForward(false);
            return
        }

        else if (typingIndex == 0) {
            setForward(true)
            setItemsIndex((itemsIndex + 1) % items.length)
        }

        setTypingIndex(typingIndex + (forward ? 1 : -1))
        setTypedText(items[itemsIndex].substring(0, typingIndex) + '|')

    }, Math.random() * 75 + 100)
    return typedText
}
