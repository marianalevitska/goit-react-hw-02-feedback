// import { Component } from 'react';
import PropTypes from 'prop-types';
import stl from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positiveFeedback }) {

    return (
        <div className={stl.stat}>
            <div className={stl.feedback_btn_block}>
                <h1 className={stl.title}>Please, leave feedback</h1>
                <ul className={stl.feedback_btn_list}>
                    <li className={stl.feedback_btn}><button type='button' onClick={() => this.setState(state => ({ good: state.good + 1 }))}>Good</button></li>
                    <li className={stl.feedback_btn}><button type='button' onClick={() => this.setState(state => ({ neutral: state.neutral + 1 }))}>Neutral</button></li>
                    <li className={stl.feedback_btn}><button type='button' onClick={() => this.setState(state => ({ bad: state.bad + 1 }))}>Bad</button></li>
                </ul>
            </div>
            <div className={stl.stat_block}>
                <h1 className={stl.stat_title}>Statistics</h1>
                <ul className={stl.stat_list}>
                    <li className={stl.stat_item}>Good: {good}</li>
                    <li className={stl.stat_item}>Neutral: {neutral}</li>
                    <li className={stl.stat_item}>Bad: {bad}</li>
                    <li className={stl.stat_item}>Total: {total}</li>
                    <li className={stl.stat_item}>Positive feedback: {positiveFeedback}%</li>
                </ul>
            </div>
        </div>
    );
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};




export default Statistics;