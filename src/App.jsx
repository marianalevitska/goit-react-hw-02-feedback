// import Buttons from './components/Buttons/Buttons';
import Statistics from './components/Statistics/Statistics';
import { Component } from 'react';

const options = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  // PositiveFeedback() {
  //   console.log(this.state);
  //   const number = ((this.state.good) / (this.state.good + this.state.neutral + this.state.bad)) * 100;
  //   return number;
  // }
  render() {
    return (
      <div>
        <Statistics title='Statistics' /*good={ } neutrel={ } total={ } positivePercentage={ }*/ />
      </div >
    );
  }
};

export default App;
