import Cart from './Cart'
import React from 'react'
import NavBar from './NavBar';



// import { collection, getDocs } from "firebase/firestore"; 

// import { collection , onSnapshot } from "firebase/firestore";

import {db} from './index';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products:[],
            loading:true
        }
        // this.db=firebase.firestore();
        // this.increaseQuantity=this.increaseQuantity.bind(this);
        // this.testing();
    }

    componentDidMount() {

        // const unsubscribe = onSnapshot(
        //     collection(db, "cities"), 
        //     (snapshot) => {
        //       // ...
        //     },
        //     (error) => {
        //       // ...
        //     });
          


        this.unsubscribe = db.collection('products').onSnapshot((snapshot) => {
          const products = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          this.setState({ products,loading:false });
        }, (error) => {
          console.error('Error fetching cart data:', error);
        });
      }

//    async componentDidMount(){
//         // firebase
//         //  .firestore
//         //   .collection('products')
//         //    .get()
//         //     .then((snapshot)=>{console.log(snapshot);});{version 7}
//          console.log("Component did mount");
//         const result = onSnapshot(doc(db, 'products'), (doc) => {
//             // console.log("Current data: ", doc.data());
//             let Data=doc.data();
//             Data.id=doc.id;
//             // return Data;
//             this.setState({
//                 products:Data,
//                 loading:false
//                })
           
//         });

       
       

//     // const querySnapshot = await getDocs(collection(db, "products"));
//     // const result =querySnapshot.docs.map((doc) => {
//     //     //  console.log(`${doc.id} => ${doc.data()}`);
//     //     return {
//     //         ...doc.data(),
//     //         id:doc.id,
//     //     }
//     //    });
      
//     }

    IncreaseQuantity=(item)=>{
    //    console.log("hey parent Cart , please increase the quantity using props of ", item);
       const products=this.state.products;
       let index=products.indexOf(item);

        // increasing the qty in firestore cloud collection ,as it will auto updated as we used onSnapshot call
        try{
         const docRef=db.collection('products').doc(products[index].id);

         docRef.update({
            qty:products[index].qty+1
         }).then(()=>{
            console.log('qty updated successfully');
         })
        }
        catch(error){
           console.log('error',error);
        }


    //    products[index].qty+=1;

    //    this.setState({
    //     // products:products
    //     // shortHand for keys and values same name
    //        products
    //    })
    }
    DecreaseQuantity=(item)=>{
        //    console.log("hey parent Cart , please increase the quantity using props of ", item);
           const products=this.state.products;
           let index=products.indexOf(item);
           if(products[index].qty===0){
            return;
           }
          
           try{
            const docRef=db.collection('products').doc(products[index].id);
   
            docRef.update({
               qty:products[index].qty-1
            }).then(()=>{
               console.log('qty updated successfully');
            })
           }
           catch(error){
              console.log('error',error);
           }


        //    products[index].qty-=1;
    
        //    this.setState({
        //     // products:products
        //     // shortHand for keys and values same name
        //        products
        //    })
        }

    DeleteItem=(id)=>{
        // const products=this.state.products;

        try{
            const docRef=db.collection('products').doc(id);
   
            docRef.delete().then(()=>{
               console.log('product deleted successfully');
            })
           }
           catch(error){
              console.log('error',error);
           }
        

        // const items= products.filter((item)=>{
        //    return item.id!==id;
        // })
        // this.setState({
        //     products:items
        // })
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

    addProduct=()=>{
        try{ db.collection('products').add({
            title:"washing machine",
            price:12000,
            qty:1,
            img:""
        }).then((docRef)=>{
              console.log(docRef);
        })}
        catch(error){
            
                console.log(error);
            
        }
    }

    render(){
        // const products=this.state.products;
           const {products,loading}=this.state;
    return ( 
        
        <div className = "App" >
            <NavBar count={this.getCartCount()} />
            <button onClick={this.addProduct} style={{fontSize:20 ,padding:10 ,backgroundColor:'dimgray'}}>Add Product</button>
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