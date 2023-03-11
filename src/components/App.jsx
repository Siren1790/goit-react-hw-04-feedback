import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { AppStyled } from './App.module';
export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };
  const options = Object.keys(feedback);

  const onLeaveFeedback = statKey => {
    switch (statKey) {
      case 'good':
        setGood(pervState => pervState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      default:
        console.log('Danger');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <AppStyled>
      <Section tittle="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section tittle="Statsics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            total={countTotalFeedback}
            positive={countPositiveFeedbackPercentage}
            state={feedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </AppStyled>
  );
};
