// 'App' as a class component which encompasses all other components
// TODO 6: Style App component using styles written in external stylesheet (external styling)
import React from 'react';

import Header from './Header.js';
import Password from './Password.js';
import ProgressBar from './ProgressBar.js';
import StrengthCriteria from './StrengthCriteria.js';


class App extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <Header />
        <Password />
        <ProgressBar />
        <StrengthCriteria />
      </div>
    )
  }
}

export default App;