import { Section } from 'components/Section/Section';
import { FeedbackOptions } from './/FeedbackOptions';
import React, { useState } from 'react';
import css from './/style.module.css';
import { Notification } from './Notification';
import { Statistic } from './Statistics';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodOpinion = () => {
    setGood(good + 1);
  };
  const addNeutralOpinion = () => {
    setNeutral(neutral + 1);
  };
  const addBadOpinion = () => {
    setBad(bad + 1);
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedback = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0 + '%';
    } else {
      return Math.round((good / total) * 100) + '%';
    }
  };

  const totalCount = countTotalFeedback();
  const positivePercentage = countPositiveFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <div className={css.btnBox}>
          <FeedbackOptions options={addGoodOpinion} onLeaveFeedback="good" />
          <FeedbackOptions
            options={addNeutralOpinion}
            onLeaveFeedback="neutral"
          />
          <FeedbackOptions options={addBadOpinion} onLeaveFeedback="bad" />
        </div>
      </Section>
      <Section title="Statistic">
        {totalCount === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount}
            positiveFeedback={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};
