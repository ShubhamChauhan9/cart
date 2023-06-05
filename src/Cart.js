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

    IncreaseQuantity=(item)=>{
    //    console.log("hey parent Cart , please increase the quantity using props of ", item);
       const products=this.state.products;
       let index=products.indexOf(item);
       products[index].qty+=1;

       this.setState({
        // products:products
        // shortHand for keys and values same name
           products
       })
    }
    DecreaseQuantity=(item)=>{
        //    console.log("hey parent Cart , please increase the quantity using props of ", item);
           const products=this.state.products;
           let index=products.indexOf(item);
           if(products[index].qty===0){
            return;
           }
           products[index].qty-=1;
    
           this.setState({
            // products:products
            // shortHand for keys and values same name
               products
           })
        }

    DeleteItem=(id)=>{
        const products=this.state.products;
        const items= products.filter((item)=>{
           return item.id!==id;
        })
        this.setState({
            products:items
        })
    }

  
    render(){
        const products=this.state.products;

        return(
          <div className='Cart'>
             {products.map((item)=> {
                   return <CartItem 
                         item={item} 
                         key={item.id}
                         onIncreaseButtonClick={this.IncreaseQuantity}
                         onDecreaseButtonClick={this.DecreaseQuantity}
                         onDeleteButtonClick={this.DeleteItem}
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