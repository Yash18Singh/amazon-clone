import react from 'react';
import './Subtotal.css';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../Reducer';

const Subtotal = ()=>{
    const [{basket}, dispatch] = useStateValue();
    console.log(getBasketTotal(basket));

    return(
        <>
            <div className='subtotal1'>
                <div>
                    <p>
                        Subtotal ({basket.length} items) : 
                        <div>
                            <strong style={{textDecoration: "line-through"}}>₹ {getBasketTotal(basket)}</strong>
                        </div> 
                        
                        <div>
                            <strong> ₹ {(getBasketTotal(basket)*0.69).toFixed(2)} (69% Off)</strong>
                        </div>
                    </p>
                </div>

                <small className='subtotal__gift'>
                    <input type='checkbox'/>
                    This order contains a gift
                </small>

                <button>Proceed to Checkout</button>
            </div>
        </>
    )
}

export default Subtotal;