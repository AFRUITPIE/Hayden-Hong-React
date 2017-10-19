import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let bodyTextLines = [
    "Hello.",
    "My name is Hayden Hong.",
    "I am a student at the University of Washington.",
    "I love to code and I am passionate about software design.",
];

// Random characters that can be selected
let randomChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890".split("");

renderText(0);

function renderText(i) {
    let tempBodyTextLines = [];
    for (let j = 0; j < bodyTextLines.length; j++) {
        // Adds the substring
        if (i < bodyTextLines[j].length) {
            tempBodyTextLines.push(bodyTextLines[j].substring(0, i));
        } else {
            tempBodyTextLines.push(bodyTextLines[j]);
        }


        let numberOfCharactersLeft = bodyTextLines[j].length - tempBodyTextLines[j].length;
        let tempLength = tempBodyTextLines[j].length;
        for (let k = 0; k < numberOfCharactersLeft; k++) {
            if (bodyTextLines[j].charAt(tempLength + k) !== " ") {
                tempBodyTextLines[j] = tempBodyTextLines[j] + randomChars[Math.floor((Math.random() * randomChars.length))];
            } else {
                tempBodyTextLines[j] = tempBodyTextLines[j] + " ";
            }
        }
    }

    // Creates multiple <p> tags for each line
    let printableLines = tempBodyTextLines.map((tempBodyTextLines) =>
        <p>{tempBodyTextLines}</p>
    );

    printableLines.push(<a className="fadeInText" href="https://github.com/AFRUITPIE">GitHub</a>);

    ReactDOM.render(
        <div className="body">
            {printableLines}
        </div>,
        document.getElementById('root')
    );

    // FIXME: This is hard coded in the most disgusting way
    if (i < 200) {
        setTimeout(function () {
            renderText(i + 1)
        }, 25);
    }
}

registerServiceWorker();