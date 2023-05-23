import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "mobile phone",
            price: 10000,
            qty: 1,
            img: ""
        }
    }
    increaseQuantity(){
        console.log(this.state);
    }
    render() {
        const { title, price, qty, img } = this.state;
        return ( 
            <div className = 'cart-item' >

           
            <div className = 'left-block' >

            
            <img style = { styles.image }
             />
            
            
            
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
            <div className='action-icons' onClick={this.increaseQuantity.bind(this)}><ion-icon name="add-circle-outline"></ion-icon></div>
            

            <div className='action-icons'><ion-icon name = "remove-circle-outline" > </ion-icon></div>
            

           
            {/* < img alt = 'delete'
            className = 'action-icons'
            src = 'http://image.flaticon.com/icons/svg/1214/1214428.svg' /> */}
            <div className='action-icons'><ion-icon name="trash-outline"></ion-icon></div>
            

            
            </div>
             
          </div>

            
           </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'

    }
}

export default CartItem;