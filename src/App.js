import React, { Component } from 'react';
import SubjectSelect from './SubjectSelect';
import BookSelect from './BookSelect';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SubjectSelect />
          <BookSelect />
        </header>
      </div>
    );
  }
}
  
  export default App;
  