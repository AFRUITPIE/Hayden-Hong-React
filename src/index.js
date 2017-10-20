import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// It's easiest to just hard code what lines will be what, rather than splitting by a scary regex. :(
let bodyTextLines = [
    "Hello.",
    "My name is Hayden Hong.",
    "I am a student at the University of Washington.",
    "I love to code and I am passionate about software design.",
];

// Random characters that can be selected, split into an array
// Symbols would be nice but they aren't monospaced in Roboto Mono.
let randomChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890".split("");

// Maximum line length, useful for @param i in renderText
let maxLineLength = getMaxLineLength(bodyTextLines);

// Whether or not the animation is currently running
let animationRunning = true;


// Starts recursive renderText function
// Starts at -25 for a small delay before starting the typewriter effect
renderText(-25);

/**
 * Creates lines of text with random lettering that quickly dissolves into the actual text.
 *
 * @param i this is the number of characters to be rendered.
 */
function renderText(i) {
    let tempBodyTextLines = [];
    for (let j = 0; j < bodyTextLines.length; j++) {
        // Adds the substring
        if (i < bodyTextLines[j].length) {
            tempBodyTextLines.push(bodyTextLines[j].substring(0, i));
        } else {
            tempBodyTextLines.push(bodyTextLines[j]);
        }

        // Adds random characters to length of line. Also adds correct word spacing
        // for rendering issues.
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
        <p onClick={handleClickBodyText}>{tempBodyTextLines}</p>
    );

    // Adds the GitHub link
    printableLines.push(<a className="fadeInText" href="https://github.com/AFRUITPIE">GitHub</a>);

    // Renders printableLines
    ReactDOM.render(
        <div className="body">
            {printableLines}
        </div>,
        document.getElementById('root')
    );

    // Recursively calls renderText with a timeout of 25ms. Stops recursive calls once lines are complete.
    if (i < maxLineLength) {
        setTimeout(function () {
            renderText(i + 1)
        }, 25);
    } else {
        animationRunning = false;
    }
}

/**
 * Handles re-running the animation if someone clicks on the body text.
 */
function handleClickBodyText() {
    if (!animationRunning) {
        animationRunning = true;
        renderText(-10);
    }
}

/**
 * Returns the length of the longest line in an array.
 *
 * @param linesArray Array of Strings
 * @returns {number} maximum length
 */
function getMaxLineLength(linesArray) {
    let currentMaxLineLength = 0;

    for (let i = 0; i < linesArray.length; i++) {
        if (linesArray[i].length > currentMaxLineLength) {
            currentMaxLineLength = linesArray[i].length;
        }
    }
    return currentMaxLineLength;
}

registerServiceWorker();