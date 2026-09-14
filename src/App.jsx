import { Component } from "react";
import "./App.css";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((sum, current) => {
      return sum + current
    }, 0)

    return total
  }

  countPositiveFeedbackPercentage = (total, goodFeedbacks) => {
  if (total === 0) {
    return 0;
  }

  return Math.round((goodFeedbacks / total) * 100);
  }

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
    const totalFeedbacks = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage( totalFeedbacks, this.state.good)

    return (
      <>
        <h2>Please leave a feedback</h2>

        <FeedbackOptions options={options} onLeaveFeedback={this.addFeedback}/>

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
        <p>Total feedbacks : {totalFeedbacks}</p>
        <p>Positive feedback: {positivePercentage} %</p>
      </>
    );
  }
}

export default App;
