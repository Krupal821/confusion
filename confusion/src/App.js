
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents';
import {DISHES} from './shared/dishes';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {     // this state will store array in dishes variable
      dishes: DISHES   // DISHES coming from Dishes.js 
    }
  }
  render(){
  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        {/* props -  dishes goes Menu componenes */}
        <Menu dishes={this.state.dishes}/> 
      </div>
  );
}
}

export default App;
