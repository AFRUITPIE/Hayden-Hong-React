import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let bodyTextLines = [
    "Hello.",
    "My name is Hayden Hong.",
    "I am a student at the University of Washington.",
    "I love to code and I am passionate about software design.",
    "Please accept me into informatics.",
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

        // FIXME this broke... of fucking course it did
        for (let k = 0; k < bodyTextLines[j].length - tempBodyTextLines[j].length; k++) {
            tempBodyTextLines[j] = tempBodyTextLines[j] + randomChars[Math.floor((Math.random() * randomChars.length))];
        }
    }

    // Creates multiple <p> tags for each line
    let printableLines = tempBodyTextLines.map((tempBodyTextLines) =>
        <p>{tempBodyTextLines}</p>
    );

    printableLines.push(<a href="https://twitter.com/AFRUITPIE">Twitter</a>);
    printableLines.push(<a href="https://github.com/AFRUITPIE">GitHub</a>);
    printableLines.push(<a href="https://us-west-2.console.aws.amazon.com/console/home?region=us-west-2#">AWS</a>);


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
