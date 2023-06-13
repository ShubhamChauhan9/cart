import Cart from './Cart'
import React from 'react'
import NavBar from './NavBar';



import { collection, getDocs } from "firebase/firestore"; 

import {db} from './index';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products:[],
            loading:true
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
        // this.testing();
    }
   async componentDidMount(){
        // firebase
        //  .firestore
        //   .collection('products')
        //    .get()
        //     .then((snapshot)=>{console.log(snapshot);});{version 7}


       

    const querySnapshot = await getDocs(collection(db, "products"));
    const result =querySnapshot.docs.map((doc) => {
        //  console.log(`${doc.id} => ${doc.data()}`);
        return {
            ...doc.data(),
            id:doc.id,
        }
       });
       this.setState({
        products:result,
        loading:false
       })
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
           const {products,loading}=this.state;
    return ( 
        
        <div className = "App" >
            <NavBar count={this.getCartCount()} />
            < Cart 
                  products={products}
                  onIncreaseButtonClick={this.IncreaseQuantity}
                  onDecreaseButtonClick={this.DecreaseQuantity}
                  onDeleteButtonClick={this.DeleteItem}
             />
             {loading && <h1>loading.....</h1>}
             <div style={{ padding:20,margin:10,backgroundColor:'cyan' ,fontSize:30}}>Total:{this.getCartPrice()}</div>
        </div>
    );
  }
}

export default App;