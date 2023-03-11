import React from 'react';
import PropTypes from 'prop-types';
import { Button, Feedback} from './FeedbackOptions.module';


export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
  return (
    <Feedback>
      {options.map((key, index) => (
        <Button key={index} type="button" onClick={() => onLeaveFeedback(key)}>
          {toUpperFirst(key)}
        </Button>
      ))}
    </Feedback>
  );
};

function toUpperFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};