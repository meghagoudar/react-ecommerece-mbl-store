import React from 'react'
// import logo from './logo.svg';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
// import Product from "./components/product";
import Productlist from "./components/productlist";
import Details from "./components/details";
import Cart from "./components/cart/cart";
import Default from "./components/default";
import Modal from './components/modal';
import PaymentSuccess from './components/cart/paymentsuccess';



class App extends React.Component{
  render(){
    return(
   <React.Fragment>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Productlist} />
       <Route path="/details" component={Details} />
       <Route path="/cart" component={Cart} />
       <Route path="/paymentsuccess" component={PaymentSuccess}/>
       <Route  component={Default}/>
     </Switch>
     <Modal/> 
     
   </React.Fragment>
    );
  }

}


export default App;
