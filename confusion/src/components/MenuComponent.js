import { Component } from "react";
import {Card, CardImg, CardBody,CardText, CardImgOverlay, CardTitle} from 'reactstrap';

class Menu extends Component{  // container components

    constructor(props){  // 1 props coming from app.js, construct should be created to get the props.
        super(props);

        this.state = {
           selectedDish : null // firstly we gonna assign a selectedDish to null and then Update this vari by setState
        };
    }
    

    
    render(){

       const menu = this.props.dishes.map((dish) => {  //2 - props coming from construct above
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                {/* below onclick event will pass propsonclick(selectedId) on onlcick event  and then this props are called on maincomponetns tn the m*/}
                    <Card  onClick= {() => this.props.onClick(dish.id) }>                   {/* creating onclick and calling Ondish select fucntion(with 2 parameter selected Dish and Selected Dishcomment) where we gonna create a selected dish and comments variable  */}
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
            </div>
        );
    }


}


export default Menu;