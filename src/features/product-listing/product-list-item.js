import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'
import handleClick from './click'
import SimpleDialog from "./dialog"

export default function ProductListItem(props) {
    console.log('hi',props);
    return <div className='product-list-item' onClick={() => props.onHandleClick(props.product.name)}>
        <h3>{props.product.name}</h3>
        <img
            height={200}
            title={props.product.name}
            src={props.product.image}

            />
            <div></div>
            <div style={{backgroundColor: props.product.color, display:"inline"}}>{props.product.description}</div>
            <div>${props.product.price}</div>
            <div>In Stock: {props.product.stock}</div>

        {
            props.product.stock > 0
            ? <AddBtn cartItem ={props.cartItem} product = {props.product} addToCart={props.addToCart}/>
            : null
        }
        <div>


        {/*<AddBtn cartItem ={props.cartItem} product = {props.product} addToCart={props.addToCart}/>*/}

            {/*{*/}
              {/*props.cartItem*/}
                {/*?   <RemoveBtn cartItem ={props.cartItem} product = {props.product} removeFromCart={props.removeFromCart}/>*/}
                {/*: null*/}
            {/*}*/}
            {/*{*/}
                {/*props.product.stock > 0*/}
                    {/*?   <AddBtn cartItem ={props.cartItem} product = {props.product} removeFromCart={props.addToCart()}/>*/}
                    {/*: null*/}
            {/*}*/}




        </div>
    </div>
}