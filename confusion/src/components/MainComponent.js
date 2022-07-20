// created this Container component which contains only state and components

import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import { Component } from 'react';

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {     // this state will store array in dishes variable
      dishes: DISHES,
      selectedDish: null   // DISHES coming from Dishes.js firslty seleted should be declared null before updating it.
    }
  }
  onDishSelect(dishId){
    this.setState( {
        selectedDish : dishId,  // onClick any card or any dishid the selecteddish will be updted from null to dish(dish parameter)
        
    })
}
  render(){
  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        {/* props -  dishes goes Menu componenes */}  {/* with below onclick dish id is passed on from the props of Menucomponent */}
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> 
        {/* below componets has dish props which contains the dishID[]  and this.state.dishes.filter((dish)) refers to the state on 14th line it filter dish and and from that dish id is compare to selectedDish from on select dish function  */}
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>  
      </div>
  );
}
}

export default Main;
