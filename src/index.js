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
let randomChars = ["-", "/", "<", ">"];

renderText(0);

function renderText(i) {
    let tempBodyTextLines = [];

    for (let j = 0; j < bodyTextLines.length; j++) {

        // Creates the substring if necessary
        if (i < bodyTextLines[j].length) {
            tempBodyTextLines.push(bodyTextLines[j].substring(0, i));
        } else {
            tempBodyTextLines.push(bodyTextLines[j]);
        }

        // Adds random characters or the space for blank words
        let numberCharsToAdd = bodyTextLines[j].length - tempBodyTextLines[j].length;
        for (let k = 0; k < numberCharsToAdd; k++) {
            // Adds correct spacing for words
            if (bodyTextLines[j].charAt(k) === " ") {
                tempBodyTextLines[j] = tempBodyTextLines[j] + " ";
            } else {
                tempBodyTextLines[j] = tempBodyTextLines[j] + randomChars[Math.floor((Math.random() * randomChars.length))];
            }
        }
    }

    // Creates multiple <p> tags for each line
    let printableLines = tempBodyTextLines.map((tempBodyTextLines) =>
        <p>{tempBodyTextLines}</p>
    );

    printableLines.push(<a className="fadeInText" href="https://twitter.com/AFRUITPIE">Twitter</a>);
    printableLines.push(<a className="fadeInText" href="https://github.com/AFRUITPIE">GitHub</a>);
    printableLines.push(<a className="fadeInText" href="https://us-west-2.console.aws.amazon.com/console/home?region=us-west-2#">LinkedIn</a>);


    ReactDOM.render(
        <div className="body">
            {printableLines}
        </div>,
        document.getElementById('root')
    );

    if (i < 500) { // Dear god this is hard coded so badly
        setTimeout(function () {
            renderText(i + 1)
        }, 25);
    }
}

registerServiceWorker();
