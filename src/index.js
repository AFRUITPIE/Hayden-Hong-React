import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let bodyText = "Hello, my name is Hayden Hong. I'm a student at the University of Washington and I'm a piece of shit. AMA. ";

renderText(0);

function renderText(i) {


    let toPrint = bodyText.substring(0, i);

    for (let j = 0; j < bodyText.length - i; j++) {
        toPrint = toPrint + "-";
    }

    ReactDOM.render(<p className="body">{toPrint}</p>, document.getElementById('root'));

    if (i < bodyText.length) {
        setTimeout(function() {renderText(i + 1)}, 50);
    }
}

registerServiceWorker();
