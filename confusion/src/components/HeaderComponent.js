import { Component } from 'react';
import { Navbar, NavbarBrand, PopoverHeader } from 'reactstrap';


class Header extends Component{  // this is class component which will have state  and needs to render 
    render(){
        return(
            <>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <PopoverHeader>
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           
       </PopoverHeader>
            </>
        )
    }
    
}

export default Header;