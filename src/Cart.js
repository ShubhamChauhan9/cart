import React from 'react';
import CartItem from './CartItem';
const Cart=(props)=> {
    

  
    // render(){
        // const products=props.products;

        const {products}=props;

        return(
          <div className='Cart'>
             {products.map((item)=> {
                   return <CartItem 
                         item={item} 
                         key={item.id}
                         onIncreaseButtonClick={props.onIncreaseButtonClick}
                         onDecreaseButtonClick={props.onDecreaseButtonClick}
                         onDeleteButtonClick={props.onDeleteButtonClick}
                         isloggedin={true}
                        //  jsx={<h2>testing props</h2>}
                        //  component={<CartItem/>}
                          />
              })}
            </div>
         
        )
    // }
}

export default Cart;