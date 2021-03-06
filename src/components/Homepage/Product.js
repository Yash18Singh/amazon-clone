import React from 'react'
import { useStateValue } from '../../StateProvider';
import './Product.css';

const Product = ({id, title, image, price, rating})=>{
    const [{}, dispatch] = useStateValue();

    const addToBasket = ()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id: id,
                title:title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return(
        <>  
            <div className='product' key={id}>

                <div className='product__info'>
                    <p>{title.substring(0,160)}</p>
                    <p className='product__price'>
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='product__rating'>
                        {
                            Array(rating)
                            .fill()
                            .map((_)=>(
                                <p>⭐</p>
                            ))
                        }
                    </div>
                </div>

                <img src={image} alt=''/>
                <button onClick={addToBasket}>Add to Cart</button>
            </div>    
        </>
    )
}

export default Product;