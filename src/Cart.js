import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products:[
                {
                    title: "watch",
                    price: 99,
                    qty: 10,
                    img: "",
                    id:23
                },
                {
                    title: "umbrella",
                    price: 250,
                    qty: 3,
                    img: "",
                    id:54
                },
                {
                    title: "cap",
                    price: 70,
                    qty: 8,
                    img: "",
                    id:44
                }
            ]
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
        // this.testing();
    }
  
    render(){
        const products=this.state.products;

        return(
          <div className='Cart'>
             {products.map((item)=> {
                   return <CartItem 
                         item={item} 
                         key={item.id}
                         func={()=>{console.log("function as props")}}
                         isloggedin={true}
                        //  jsx={<h2>testing props</h2>}
                        //  component={<CartItem/>}
                          />
              })}
            </div>
         
        )
    }
}


export default Cart;