import React from 'react';

// **we are replacing class component as functional component as NavBar dont have state
// class NavBar extends React.Component
const NavBar=(props)=>{

    // render() {
    
        return ( 
            <div style={styles.nav} >
               <div style={styles.cartIconContainer}>
                   <div style={styles.cartIcon}> <ion-icon name="cart-outline"></ion-icon> </div> 

                    <span style={ styles.cartCount }>{props.count}</span>

               </div>

            
           </div>
        );
    // }
}

const styles = {
    
    cartIcon: {
      height:32,
      marginRight:20,
    //   marginLeft:20,
      marginTop:'auto'
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '0px 8px',
      position: 'absolute',
      right: 2,
      top: -3
    }
  };

export default NavBar;