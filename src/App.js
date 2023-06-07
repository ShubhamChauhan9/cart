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
    getCartCount=()=>{
        
        const {products}=this.state;
        let count =0;
        products.forEach((item)=>{
           count+=item.qty;
        });
        return count;
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
        </div>
    );
  }
}

export default App;