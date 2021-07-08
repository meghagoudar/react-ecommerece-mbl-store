import React from 'react';
import Title from '../title';
import CartColumns from './cartColumns';
import EmptyCart from './emptycart';
import {ProductConsumer} from '../../context';
// import Cartitem from './cartitem';
import Cartlist from './cartlist';
import CartTotals from './carttotals';

export default function Cart (props){

        return (
            <div>
                <ProductConsumer >
                    {value=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return (  <React.Fragment> 
                                <Title name="your" title="cart"/>
                                <CartColumns/>
                                <Cartlist value={value}/>
                                <CartTotals value={value} history={props.history}/>
                            </React.Fragment>

                            );
                        }
                        else{
                            return(<EmptyCart/>);
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }

