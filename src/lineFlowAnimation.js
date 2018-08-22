import React from "react";
import "./index.css";

class LineFlowAnimation extends React.Component {
  // Alphanumeric characters that are monospaced in Roboto Mono
  randomChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890".split("");

  // Time in MS to wait before actually filling in real characters
  startupTime = -25;

  constructor(props) {
    super(props);
    this.lines = props.lines;
    this.maxLineLength = this.getMaxLineLength();

    this.state = {
      step: this.startupTime,
      printableLines: <p />
    };
  }

  /**
   * Returns the length of the longest line in an array.
   *
   * @param lines Array of Strings
   * @returns {number} maximum length
   */
  getMaxLineLength() {
    let currentMaxLineLength = 0;

    for (let i = 0; i < this.lines.length; i++) {
      if (this.lines[i].length > currentMaxLineLength) {
        currentMaxLineLength = this.lines[i].length;
      }
    }
    return currentMaxLineLength;
  }

  /**
   * Generates random text and sets the state to it
   */
  generateRandomText() {
    let tempLines = [];
    for (let j = 0; j < this.lines.length; j++) {
      // Adds the substring
      if (this.state.step < this.lines[j].length) {
        tempLines.push(this.lines[j].substring(0, this.state.step));
      } else {
        tempLines.push(this.lines[j]);
      }

      // Adds random characters to length of line. Also adds correct word spacing
      // for rendering issues.
      let numberOfCharactersLeft = this.lines[j].length - tempLines[j].length;
      let tempLength = tempLines[j].length;
      for (let k = 0; k < numberOfCharactersLeft; k++) {
        if (this.lines[j].charAt(tempLength + k) !== " ") {
          tempLines[j] =
            tempLines[j] + this.randomChars[Math.floor(Math.random() * this.randomChars.length)];
        } else {
          tempLines[j] = tempLines[j] + " ";
        }
      }
    }

    // Creates multiple <p> tags for each line
    this.setState({
      printableLines: tempLines.map(line => (
        <p
          onClick={() => {
            this.handleClickBodyText();
          }}
        >
          {line}
        </p>
      )),
      step: this.state.step + 1
    });
  }

  /**
   * Handles re-running the animation if someone clicks on the body text.
   */
  handleClickBodyText() {
    if (this.state.step === this.maxLineLength) {
      this.setState({
        step: this.startupTime
      });
    }
    this.generateRandomText();
  }

  render() {
    // Start re-generating random text if it isn't all legible yet
    if (this.state.step <= this.maxLineLength) {
      setTimeout(() => {
        this.generateRandomText();
      }, 25);
    }
    return this.state.printableLines;
  }
}

export default LineFlowAnimation;
