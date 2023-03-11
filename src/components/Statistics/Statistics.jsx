import React from 'react';
import PropTypes from 'prop-types';
import { Section, Paragraph } from './Statistics.module';

export const Statistics = ({ total, positive, state }) => {
  return (
    <Section>
      <Paragraph>Good: {state.good}</Paragraph>
      <Paragraph>Neutral: {state.neutral}</Paragraph>
      <Paragraph>Bad: {state.bad}</Paragraph>
      <Paragraph>Total: {total()}</Paragraph>
      <Paragraph>Positive feedback: {positive() ? positive() : '0'} %</Paragraph>
    </Section>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
  total: PropTypes.func.isRequired,
  positive: PropTypes.func.isRequired,
};