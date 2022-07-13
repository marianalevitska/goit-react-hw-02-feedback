import { Component } from 'react';
import stl from './Statistics.module.css';

class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    render() {
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
                        <li className={stl.stat_item}>Good: {this.state.good}</li>
                        <li className={stl.stat_item}>Neutral: {this.state.neutral}</li>
                        <li className={stl.stat_item}>Bad: {this.state.bad}</li>
                    </ul>
                </div>
            </div>
        );
    };
};


export default Statistics;