import React from 'react'
import Title from './title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';
import Product from './product';

 class Productlist extends React.Component {
     state={
         products:storeProducts
     };

    render() {
        return (
            <React.Fragment>
             <div className="py-5">
                 <div className="container">
                      <Title name="our" title="products"/>
                      <div className="row">
                             <ProductConsumer>
                                 {(value)=>{
                                     return value.products.map(product =>{
                                         return <Product key={product.id} product={product}/>;
                                     });
                                     
                                 }}
                                 </ProductConsumer>  
                     </div>
                 </div>
             </div>
            </React.Fragment>
        );
    }
}
export default Productlist;
