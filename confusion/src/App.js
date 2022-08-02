

import { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

class App extends Component{
  
  render(){
  return (
    // this browser router will enable the Navigational component within the application
    <BrowserRouter> 
    <div className="App">
        <Main />
    </div>
    </BrowserRouter>
  );
}
}

export default App;
