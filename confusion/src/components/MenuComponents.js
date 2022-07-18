import { Component } from "react";
import {Card, CardImg, CardBody,CardText, CardImgOverlay, CardTitle} from 'reactstrap';

class Menu extends Component{

    constructor(props){  // 1 props coming from app.js, construct should be created to get the props.
        super(props);

        this.state = {
           selectedDish : null // firstly we gonna assign a selectedDish to null and then Update this vari by setState
        };
    }
    
    onDishSelect(dish){
        this.setState( {
            selectedDish : dish   //this slelected dish will be updated from onclick event where the dish is coming form 
        })
    }

    renderSelectedDish(dish){
        if(dish != null){
            console.log(dish.id);
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div>
                    please Select Dish
                </div>
            )
        }
    }
    render(){

       const menu = this.props.dishes.map((dish) => {  //2 - props coming from construct above
        return(
            <div  className="col-12 col-md-5 m-1">
                

                    <Card key={dish.id} onClick= {() => this.onDishSelect(dish) }>                   {/* creating onclick and calling Ondish sleect fucntion where we gonna create a selected dish variable  */}
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
            <div className="row">
            
            <div  className="col-12 col-md-5 m-1">
                    {this.renderSelectedDish(this.state.selectedDish)}
                  </div>
            </div>
            </div>
        );
    }


}


export default Menu;