import react from 'react';
import Header from '../../Header';
import './Checkout.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal.js';


const Checkout = ()=>{ 
    const [{basket},dispatch] = useStateValue();
    document.title=`Amazon | Cart (${basket.length})`;

    return(
        <>
            <Header/>
            <div className='checkout'>
                <img className='checkout__ad' 
                     src='https://res.cloudinary.com/yash-071/image/upload/v1642756129/My%20Image/Amazon_Ad1_elgxfk.jpg' alt=''/>

                {basket && (
                    <div className='subtotal'>
                        <Subtotal/>
                    </div>
                )}
            </div>

            {basket?.length===0?(
                <div>
                    <h2 className='checkout__title'>Your Cart is Empty</h2>
                    <p className='checkout__para'>
                        You have no items in your Cart.
                        To buy one or more items click on "Add to Cart" next to the item.
                    </p>
                </div>
            ):(
                <div className='checkout__items'>
                    <h2 className='checkout__title'>Your Cart</h2>

                    {basket.map((item)=>{
                       return(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                       );
                    })}
                </div>
            )}

        </>
    )
}

export default Checkout;