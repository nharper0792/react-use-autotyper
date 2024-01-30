# react-use-autotyper
a react library that will cycle through a given list of strings, typing them out and erasing them
# Installation and use
to install this package, run the following command:
```
    npm install react-use-autotyper --save
```
To use the `useAutotyper` hook, first import it at the top of the file you wish to use it in:
```typescript jsx
import {useAutotyper} from 'react-use-autotyper'
```
the `useAutotyper` hook takes in two parameters

`items`: string[] - an array of strings to cycle through autotyping

`delay`: number - (optional) ms delay between characters. Defaults to  random interval between 100-175ms

# Example
```typescript jsx
import useAutotyper from "./useAutotyper";

function TypingComponent() {
    const text = useAutotyper(['hello','world'])
    return <div>{text}</div>
}
```
