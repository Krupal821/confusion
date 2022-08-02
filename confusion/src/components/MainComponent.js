// created this Container component which contains only state and components
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import Footer from './FooterComponent'
import { Component } from 'react';
import Header from './HeaderComponent';
import {Switch, Redirect, Route } from 'react-router-dom'
import Home from './HomeComponent';

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {     // this state will store array in dishes variable
      dishes: DISHES,
    }
  }
 
  render(){
  
    const HomePage = () => {
      return(
        <Home />
      )
    }
   return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
  );
}
}

export default Main;
