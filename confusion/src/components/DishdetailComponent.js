import react from "react";

import {Card, CardImg, CardBody,CardText,Media, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


    
  function  RenderDish({dish}) {   {/* created fucntion component with known props dish*/}
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
  function RenderComments({comments}){ {/* created fucntion component with known props dish*/} 
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
            return (
                
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {selectedDishComment}
               
                </div>
                
            )
        
    }
    else{
        return(
            <div></div>
        )
    }
   }
    const DishDetail = (props) => {
        if(props != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                     <div className="col-12 col-md-5 m-1">
                         <RenderDish dish={props.dish}/>
                    </div>   
                        <RenderComments comments={props.comments}/>
                 </div>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
    }



export default DishDetail;