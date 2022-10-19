import { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavbarToggler,Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component{  // this is class component which will have state  and needs to render 
    constructor(props){
        super(props);
        
        this.state = {
            isNavOpen: false,
            isToggleOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked);

        event.preventDefault();
    }
    render(){
        return(
            <>
            <Navbar dark expand="md">
                <NavbarToggler onClick={this.toggleNav}/>
                <div className="container">
                    <NavbarBrand className='mr-auto' href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
            <NavItem key='1'>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem key='2'>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem key='3'>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem key='4'>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
            </Nav>
            <Nav>
                <NavItem className="ml-auto" navbar>
                    <Button outline onClick={this.toggleModal}>
                        <span className='fa fa-sign-in fa-lg'></span> Login
                    </Button>
                </NavItem>
            </Nav>
            </Collapse>
                </div>
            </Navbar>
            
            <div className='jumbotron'>
                <div className='container'>
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
               </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Log In</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor='username'>
                                Username :
                            </Label>
                            <Input id='username' type='text' innerRef={(input) => this.username = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'>
                                Password :
                            </Label>
                            <Input id='password' type='password' innerRef={(input) => this.password = input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label htmlFor='remember' check>
                            <Input id='remember' type="checkbox" name="agree" innerRef={(input) => this.remember = input} /> Remember Me
                            </Label>
                            
                        </FormGroup>
                        <FormGroup>
                            <Button type='submit' value="submit" color="primary">LogIn</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            </>
        )
    }
    
}

export default Header;