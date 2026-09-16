import { Component } from "react";
import "./App.css";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((sum, current) => {
      return sum + current;
    }, 0);

    return total;
  };

  countPositiveFeedbackPercentage = (total, goodFeedbacks) => {
    if (total === 0) {
      return 0;
    }

    return Math.round((goodFeedbacks / total) * 100);
  };

  addFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const options = Object.keys(this.state);
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      totalFeedbacks,
      this.state.good,
    );

    return (
      <>
        <Section title={"Please leave a feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title={"Statistics"}>
          {totalFeedbacks > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedbacks}
              percentage={positivePercentage}
            />
          ) : (
            <Notification message={"There is no feedback"}/>
          )}
        </Section>
      </>
    );
  }
}

export default App;
