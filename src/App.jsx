import Buttons from './components/Buttons/Buttons';
import Statistics from './components/Statistics/Statistics';
import { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div>
        <Buttons />
        <Statistics />
      </div >
    );
  }
};

export default App;
