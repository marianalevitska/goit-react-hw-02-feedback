// import Buttons from './components/Buttons/Buttons';
import Statistics from './components/Statistics/Statistics';
import { Component } from 'react';

// const options = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  PositiveFeedback() {
    console.log(this.state);
    const number = ((this.state.good) / (this.state.good + this.state.neutral + this.state.bad)) * 100;
    return number;
  }

  TotalFeedback() {
    const n = this.state.good + this.state.neutral + this.state.bad;
    return n;
  }
  render() {
    const percent = this.PositiveFeedback();
    const total = this.TotalFeedback();
    const positiveFeedback = percent ? percent : 0;
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Statistics title='Statistics' good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positiveFeedback} />
      </div >
    );
  }
};

export default App;
