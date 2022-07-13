// import Buttons from './components/Buttons/Buttons';
import Statistics from './components/Statistics/Statistics';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  render() {
    return (
      <div>
        <Statistics title='Statistics' />
      </div >
    );
  }
};

export default App;
