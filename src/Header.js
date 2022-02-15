import react from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import {useStateValue} from './StateProvider.js'

const Header = ()=>{

const [{basket}] = useStateValue();

    return(
        <>
            <nav className='header'>
                <Link to='/'>
                    <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' alt='logo'/>
                </Link>

                <div className='header__search'>
                    <input className='header__searchInput'/>
                    <SearchIcon className='header__searchIcon'/>
                </div>

                {/* LINK 1 */}
                <div className='header__nav'>
                    <Link to='/login' className='header__link'>
                        <div className='header__option'>
                            <span className='header__optionLineOne'>HELLO, Yashwant</span>
                            <span className='header__optionLineTwo'>Sign in</span>
                        </div>
                    </Link>
                
                
                {/* LINK 2 */}
                    <Link to='/' className='header__link'>
                        <div className='header__option'>
                            <span className='header__optionLineOne'>Returns</span>
                            <span className='header__optionLineTwo'>& Orders</span>
                        </div>
                    </Link>

                {/* LINK 3 */}
                    <Link to='/' className='header__link'>
                        <div className='header__option'>
                            <span className='header__optionLineOne'>Your</span>
                            <span className='header__optionLineTwo'>Prime</span>
                        </div>
                    </Link>

                {/* LINK 4 */}
                    <Link to='/checkout'  className='header__link'>
                        <div className='header__optionBasket'>
                            <ShoppingBasket/>
                            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header;
