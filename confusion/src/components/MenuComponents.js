import { Component } from "react";
import {Card, CardImg, CardBody,CardText, CardImgOverlay, CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component{  // container components

    constructor(props){  // 1 props coming from app.js, construct should be created to get the props.
        super(props);

        this.state = {
           selectedDish : null // firstly we gonna assign a selectedDish to null and then Update this vari by setState
        };
    }
    
    onDishSelect(dish, comments){
        this.setState( {
            selectedDish : dish,  // onClick any card or any dish the selecteddish will be updted from null to dish(dish parameter)
            selectedDishComment : comments //this slelected dish will be updated from onclick event where the SELECTED dish is coming frm 
        })
    }

    
    render(){

       const menu = this.props.dishes.map((dish) => {  //2 - props coming from construct above
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick= {() => this.onDishSelect(dish, dish.comments) }>                   {/* creating onclick and calling Ondish select fucntion(with 2 parameter selected Dish and Selected Dishcomment) where we gonna create a selected dish and comments variable  */}
                        <CardImg width="100%" height="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay className="ml-5">
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>
            </div>
        )
       })

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/* passing DIsh and Comments as props to below component this props are assigned variable which are comming from onDishSelect function */}
                <DishDetail dish={this.state.selectedDish} comments={this.state.selectedDishComment}/>  
            </div>
        );
    }


}


export default Menu;