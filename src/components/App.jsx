import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { AppStyled } from './App.module';
export class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onLeaveFeedback = statKey => {
    this.setState(oldState => ({
      [statKey]: (oldState[statKey] += 1),
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };
  render() {
    const options = Object.keys(this.state);
    return (
      <AppStyled>
        <Section tittle="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section tittle="Statsics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              total={this.countTotalFeedback}
              positive={this.countPositiveFeedbackPercentage}
              state={this.state}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </AppStyled>
    );
  }
}
