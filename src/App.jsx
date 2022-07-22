
import Statistics from './components/Statistics';
import FeedbackOption from './components/FeedbackOption';
import { Component } from 'react';

const options = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  // GoodClick = ({ item }) => {
  //   this.setState(prevState => ({
  //     [item]: prevState[item] + 1,
  //   }));
  // };
  // BadClick = ({ item }) => {
  //   this.setState(prevState => ({
  //     [item]: prevState[item] + 1,
  //   }));
  // }
  // NeuClick = ({ item }) => {
  //   this.setState(prevState => ({
  //     [item]: prevState[item] + 1,
  //   }));
  // }

  handleClick = (item) => {

    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  }



  totalFeedback() {
    const n = this.state.good + this.state.neutral + this.state.bad;
    return n;
  }

  positiveFeedback() {
    const { good } = this.state;
    const total = this.totalFeedback();
    const number = Math.ceil((good / total) * 100);
    return number;
  }

  render() {
    const percent = this.positiveFeedback();
    const total = this.totalFeedback();
    const positiveFb = percent ? percent : 0;
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div>
          <FeedbackOption options={options} onLeaveFeedback={this.handleClick} />
        </div>
        <div>
          <Statistics title='Statistics' good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positiveFb} />
        </div >
      </>
    );
  }
};

export default App;
