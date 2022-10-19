

import { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';  // allowsyou to configure the react app so that redux store is available in all component of the Application
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

 // Now by doing this Store is available in this Application.

class App extends Component{
  
  render(){
  return (
    // this browser router will enable the Navigational component within the application
    <Provider store={store}>
    <BrowserRouter> 
    <div className="App">
        <Main />
    </div>
    </BrowserRouter>
    </Provider>
  );
}
}

export default App;

//this is the place we make Store available for the application. and in MainComponent we gonna connect Redux store with Application.
