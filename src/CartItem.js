import React from 'react';

// class CartItem extends React.Component
 const CartItem=(props)=>{
  
    // testing(){
    //     let promise=new Promise((resolve,reject)=>{
    //         console.log('above settimeout',this.state);
    //         setTimeout(()=>{
    //             console.log('inside setTimeout',this.state)
    //             resolve('done')
    //         },5000);
    //         console.log('below settimeout',this.state)
    //     })

    //     promise.then(()=>{
    //          this.setState({
    //               qty:this.state.qty+10
    //             },()=>{console.log(this.state)})

    //         this.setState({
    //               qty:this.state.qty+10
    //             },()=>{console.log(this.state)})

    //         this.setState({
    //               qty:this.state.qty+10
    //             },()=>{console.log(this.state)})
            

    //             console.log('inside promise.then',this.state)
    //     })

    //     console.log('inside testing',this.state)
    // }

    // increaseQuantity=()=>{
    //     // passing object to setState() if prevState is not required
    //        this.setState({
    //         qty:this.state.qty+1 
    //        },()=>{
    //             // console.log('this.state',this.state)
    //            })

        //    passing callback to setState if prevState is required

        // setState is asynchronous(not in ajax call react wont do batching) in event handlers , react provide another argument to achieve synchronous call
        //    this.setState((prevState)=>{
        //       return {
        //         qty:prevState.qty+1 
        //       } 
        //    },()=>{
        //     console.log('this.state',this.state)
        //    })
        // console.log(this.state);
    // }
    // decreaseQuantity=()=>{
    //     if(this.state.qty===0){
    //         return;
    //     }
    //     this.setState({
    //         qty:this.state.qty-1 
    //     })
    // }
    // render() {
        // console.log(this.props,'this.props');
        const { title, price, qty ,id } = props.item;
        const {item ,onIncreaseButtonClick,onDecreaseButtonClick ,onDeleteButtonClick}=props;
        return ( 
            <div className = 'cart-item' >

                {/* {this.props.jsx} */}

           
            <div className = 'left-block' >

            
            <img style = { styles.image } src={props.item.img} />
             
            
            
            
            </ div>

            <
            div className = 'right-block' >

           
            < div style = { { fontSize: 25 } } > { title } </div>
             
            <div style = {{ color: 'grey' }} > Rs { price } </div>
             <div style = {{ fontSize: 25,color: 'grey' } } > Qty: { qty }  </div>

           
            < div className = 'cart-item-actions' > { /* butons */ } 
            {/* < img alt = 'increase'
            className = 'action-icons'
            src = 'image.png'  /> */}
            <div className='action-icons' onClick={()=>onIncreaseButtonClick(item)}><ion-icon name="add-circle-outline"></ion-icon></div>
            
             {/* decrease quantity icon image */}
            <div className='action-icons' onClick={()=>onDecreaseButtonClick(item)}><ion-icon name = "remove-circle-outline" > </ion-icon></div>
            

           
            {/* < img alt = 'delete'
            className = 'action-icons'
            src = 'http://image.flaticon.com/icons/svg/1214/1214428.svg' /> */}
            <div className='action-icons' onClick={()=>onDeleteButtonClick(item.id)}><ion-icon name="trash-outline"></ion-icon></div>
            

            
            </div>
             
          </div>

            
           </div>
        );
    // }
}

const styles = {
    image: {
        height: 150,
        width: 150,
        borderRadius: 4,
        background: 'grey'

    }
}

export default CartItem;