import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let bodyText = "Hello, my name is Hayden Hong.";
let bodyText2 = "I'm a student at the University of Washington and I like to code.";
let bodyText3 = "Please, for fuck's sake, just accept me into a god damn major.";
let bodyText4 = "I can't take it anymore."

let randomChars = ["-", "/", "<", "?", ">"];

renderText(0);

function renderText(i) {
    let toPrint = bodyText;
    let toPrint2 = bodyText2;
    let toPrint3 = bodyText3;

    // I know, this is some hot garbage. It will be fixed later.
    if (i < bodyText.length) {
        toPrint = bodyText.substring(0, i);
    }

    if (i < bodyText2.length) {
        toPrint2 = bodyText2.substring(0, i);
    }

    if (i < bodyText3.length) {
        toPrint3 = bodyText3.substring(0, i);
    }

    for (let j = 0; j < bodyText.length - i; j++) {
        toPrint = toPrint + randomChars[Math.floor((Math.random() * randomChars.length))];
    }
    for (let j = 0; j < bodyText2.length - i; j++) {
        toPrint2 = toPrint2 + randomChars[Math.floor((Math.random() * randomChars.length))];
    }
    for (let j = 0; j < bodyText3.length - i; j++) {
        toPrint3 = toPrint3 + randomChars[Math.floor((Math.random() * randomChars.length))];
    }


    ReactDOM.render(
        <div className="body">
            <p>{toPrint}</p>
            <p>{toPrint2}</p>
            <p>{toPrint3}</p>
        </div>
        , document.getElementById('root')
    );

    if (i < 100) { // Dear god this is hard coded so badly
        setTimeout(function() {renderText(i + 1)}, 10);
    }
}

registerServiceWorker();
