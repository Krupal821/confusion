import react, { Component } from "react";
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Card, CardImg, CardBody,CardText,Media, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, Label, Row, Col, Button, Modal,ModalHeader, ModalBody} from 'reactstrap';
import {Link} from 'react-router-dom';


class CommentForm  extends Component{
    constructor(props){
        super(props);
    this.state = {  
            isCommentToggleOpen: false
    };
    this.toggleCommentModel = this.toggleCommentModel.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);

    }
    handleSubmitComment(values){
        console.log('Current state is ' + JSON.stringify(values));
        alert('Current state is ' + JSON.stringify(values));
    }
toggleCommentModel(){   // when 29 line button is clicked this funcion will be called(toggled)    in modal
    this.setState({
        isCommentToggleOpen: !this.state.isCommentToggleOpen   // once the function is toggles the comment witll be toggled in Modal and Modalheader
    });
}

    render(){
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        return(
            // <LocalForm onSubmit={(value) => this.handleSubmiComment}>
            <div className="submit-comment">
                <Row className="form-group">
                    <Col md={{size: 12}}>
                        {/* below button will toggle(Initally it's close) the comment modal when Clicked ---- line 11 bydefault its false */}
                    <Button outline onClick={this.toggleCommentModel}>  
                        <span className="fa fa-pencil fa-lg mr-2"></span>
                        Submit Comment
                    </Button>
                    </Col>
                </Row>
                <Modal isOpen={this.state.isCommentToggleOpen} toggle={this.toggleCommentModel}>
                <ModalHeader toggle={this.toggleCommentModel}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
                    <Row className="form-group">
                                <Col md={{size: 12}}>
                                    <Label htmlFor="rating">Rating</Label>
                                </Col>
                                <Col md ={{size: 12}} >
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                </Col>
                    </Row>

                    <Row className="form-group">
                        <Col md={{size:12}}>
                            <Label htmlFor="name">
                                Your Name
                            </Label>
                            <Control.text model='.name' placeholder="Your Name" id="name" name="name" className="form-control" validators={{required, maxLength: maxLength(15), minLength: minLength(3)}}/>
                            <Errors className="text-danger" model='.name' show='touched' messages={{required : 'is Required', maxLength: 'Must be 15 characters or less', minLength: 'Must be 3 characters or more'}}>

                            </Errors>
                        </Col>
                    </Row>
                    <Row className="form-group">
                                
                                <Col md ={12} >
                                <Label htmlFor="comments">Comment</Label>
                                <Control.textarea className="form-control" model=".comments"  id="comments" name="comments" rows="12" validators={{required, maxLength: maxLength(10), minLength: minLength(3)}} />
                                <Errors className="text-danger" model=".comments" show='touched' messages={{required: 'is Required', maxLength: 'Must be 10 characters or less',  minLength: 'Must be 3 characters or more'}}></Errors>
                                </Col>

                            </Row>

                        <Row className="form-group">
                            <Col md={{size: 12}}>
                            <Button type="submit" color="primary"> Submit </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
                </Modal>
                </div>
        )
    }
}
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
                <div key={comment.id} className="container">
                <ul className="list-unstyled">
                    
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
                    <div className="container">
                        <CommentForm />
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