import Cart from './Cart'
import React from 'react'
import NavBar from './NavBar';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products:[
                {
                    title: "watch",
                    price: 99,
                    qty: 7,
                    img: "https://images.unsplash.com/photo-1517463700628-5103184eac47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
                    id:23
                },
                {
                    title: "umbrella",
                    price: 250,
                    qty: 3,
                    img: " https://images.unsplash.com/photo-1516368694098-47836cebec97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVtYnJlbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60 ",
                    id:54
                },
                {
                    title: "cap",
                    price: 70,
                    qty: 5,
                    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
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
    getCartCount=()=>{
        
        const {products}=this.state;
        let count =0;
        products.forEach((item)=>{
           count+=item.qty;
        });
        return count;
    }
    getCartPrice=()=>{
        const {products}=this.state;
        let CartTotal=0;
        products.forEach((item)=>{
            CartTotal+=item.qty*item.price
         });
         return CartTotal;

    }

    render(){
        // const products=this.state.products;
           const {products}=this.state;
    return ( 
        
        <div className = "App" >
            <NavBar count={this.getCartCount()} />
            < Cart 
                  products={products}
                  onIncreaseButtonClick={this.IncreaseQuantity}
                  onDecreaseButtonClick={this.DecreaseQuantity}
                  onDeleteButtonClick={this.DeleteItem}
             />
             <div style={{ padding:20,margin:10,backgroundColor:'cyan' ,fontSize:30}}>Total:{this.getCartPrice()}</div>
        </div>
    );
  }
}

export default App;