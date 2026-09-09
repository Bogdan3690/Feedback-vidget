import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (option) => {
    console.log(option);
    this.setState((prevState) => {
      return({
        [option] : prevState[option] + 1,
      }
      )
    }
    )
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <>
        <h2>Please leave a feedback</h2>
        {options.map((option, index) => {
          return (
            <button key={index} onClick={() => this.addFeedback(option)}>
              {option}
            </button>
          );
        })}

        <h2>Statistics</h2>
        <ul>
          {options.map((option, index) => {
            return (
              <li key={index}>
                {option} : {this.state[option]}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
