import react from 'react';
import Header from '../../Header';
import './Homepage.css';
import Product from './Product.js';

const Homepage = ()=>{
    document.title="Amazon | Welcome";
    return(
        <>
            <Header/>
            <div className='home'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='Image'/>
            
                <div className='home__row'>
                    <Product
                        id={'01'}
                        title={'Redmi Note 10S (Deep Sea Blue, 8GB RAM,128 GB Storage) - Super Amoled Display | 64 MP Quad Camera | Alexa Built in'}
                        image={'https://m.media-amazon.com/images/I/81leb5g4asL._SL1500_.jpg'}
                        price={16999}
                        rating={4}
                    />
                    <Product
                        id={'02'}
                        title={'Noise ColorFit Ultra Bezel-Less Smart Watch with 1.75" HD TruView Display, 60 Sports Modes, SpO2, Heart Rate, Stress, REM & Sleep Monitor'}
                        image={'https://m.media-amazon.com/images/I/71mRLPn333L._SL1500_.jpg'}
                        price={2999}
                        rating={3}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id={'03'}
                        title={'Oneplus Bullets Wireless Z Bass Edition Bluetooth in Ear Earphones with mic (Reverb Red)'}
                        image={'https://m.media-amazon.com/images/I/61tmf36mTGL._SL1500_.jpg'}
                        price={1799}
                        rating={5}
                    />
                    <Product
                        id={'04'}
                        title={'Mi Notebook Ultra 3.2K resolution display Intel Core i5-11300H 11th Gen 15.6-inch(39.62 cm) Thin and Light laptop (16GB/512GB SSD/Iris Xe Graphics/Win 10/MS Office/Backlit KB/Fingerprint sensor/1.7Kg)'}
                        image={'https://m.media-amazon.com/images/I/81RHHnGydgL._SL1500_.jpg'}
                        price={65499}
                        rating={4}
                    />
                    <Product
                        id={'05'}
                        title={'Philips BT3211/15 corded & cordless Beard Trimmer with Fast Charge; 20 settings; 60 min run time'}
                        image={'https://m.media-amazon.com/images/I/811xFHHgiPL._SL1500_.jpg'}
                        price={1274}
                        rating={3}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id={'06'}
                        title={'Samsung 6.5 Kg 5 Star Inverter Fully-Automatic Top Loading Washing Machine (WA65T4262GG/TL, Light Grey, Wobble technology)'}
                        image={'https://m.media-amazon.com/images/I/61YXeABU+RL._SL1500_.jpg'}
                        price={16890}
                        rating={4}
                    />
                    <Product
                        id={'07'}
                        title={'Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X80AJ (Black) (2021 Model) | with Alexa Compatibility'}
                        image={'https://m.media-amazon.com/images/I/91Pij5DqU1L._SL1500_.jpg'}
                        price={72990}
                        rating={5}
                    />
                </div>
            </div>
        </>
    )
}

export default Homepage;