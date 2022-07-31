import { PropTypes } from 'prop-types';
import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul onClick={onLeaveFeedback} className={s.list}>
      {options.map(option => (
        <li key={option} className={s.item}>
          <button type="button" name={option} className={s.button}>
            {option.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
