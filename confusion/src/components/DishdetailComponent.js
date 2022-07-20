import { Component } from "react";

import {Card, CardImg, CardBody,CardText,Media, CardImgOverlay, CardTitle} from 'reactstrap';

class DishDetail extends Component{ // presentation components becacuse there is no state 
    constructor(props){
        super(props);

    }
    
    renderDish(dish){ 
        if(dish != null){
            return(
              
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
               
            );
            
        }
        else{
            return(
                <div>
                    Please Select a Dish from above
                </div>
            )
        }
    }
   renderComments(comments){
    if(comments != null){
       
        const selectedDishComment = comments.map((comment) =>{
            var convertedDate = new Date(comment.date);
            var formattedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short',day: '2-digit'}).format(convertedDate);
            return(
                <div className="container">
                <ul key={comment.id} className="list-unstyled">
                    
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {formattedDate}</li>
                    
                </ul>
                </div>
            )
        })
        if(selectedDishComment != null ){
            return (
                
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {selectedDishComment}
               
                </div>
                
            )
        }
    }
    else{
        return(
            <div></div>
        )
    }
   }
    render(){
        const dish = this.props.dish;
        const comments = this.props.comments;
        return(
                <div className="row">
                     <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    
                        
                        {this.renderComments(comments)}
                        
                   
                </div>
            
        )
    }

}

export default DishDetail;