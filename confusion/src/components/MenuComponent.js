import react from "react";
import {Card, CardImg, CardBody,CardText, CardImgOverlay, CardTitle} from 'reactstrap';

function RenderMenuItem({ dish, onClick}) {
    
    return(
        <Card  onClick= {() => onClick(dish.id) }>                   {/* creating onclick and calling Ondish select fucntion(with 2 parameter selected Dish and Selected Dishcomment) where we gonna create a selected dish and comments variable  */}
                        <CardImg width="100%" height="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay className="ml-5">
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
        </Card>
    )

       
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {  //2 - props coming from construct above
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                {/* below onclick event will pass propsonclick(selectedId) on onlcick event  and then this props are called on maincomponetns tn the m*/}
                   <RenderMenuItem dish={dish} onClick={props.onClick}/> 
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

export default Menu;