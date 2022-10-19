// created this Container component which contains only state and components
import Menu from './MenuComponent';
import Footer from './FooterComponent'
import { Component } from 'react';
import Header from './HeaderComponent';
import {Switch, Redirect, Route, Router, withRouter } from 'react-router-dom'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import {connect}  from 'react-redux';  // this is used to connect MainComponent with ReduxStore and Below Map is also needed

const mapStateToProps = state =>{   //this will obtain state as a props and will become available to props
return{
  dishes: state.dishes,    // this state now will become available from redux store to App  
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders

}
}

class Main extends Component{
  constructor(props){
    super(props);
  }
  render(){
  
    const HomePage = () => {
      return(
        <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]} 
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}/>
      )
    }

    const AboutUs = () => {
      return(
        <About leaders={this.props.leaders} />
        );
    }
   return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={Contact}/>
          <Route path='/aboutus' component={AboutUs}/>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
  );
}
}

export default withRouter(connect(mapStateToProps)(Main));   //to connect this Component to redux store
