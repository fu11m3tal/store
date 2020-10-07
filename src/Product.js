import React from 'react';
import './product.css';
import { connect } from 'react-redux';

class Product extends React.Component {

    render() {
        var product = this.props.main;
        console.log(product)
        return (
            <div className="Product">
                <div className="product_photos">
                    Photo
                    <div className="product_photos_main">
                        <img id="main" alt="" src="https://images-na.ssl-images-amazon.com/images/I/61ZR8vBARFL._AC_SL1000_.jpg"/>
                    </div>
                    <div className="product_photos_carousel">
                        <div>
                            <img  alt="" src="https://images-na.ssl-images-amazon.com/images/I/61ZR8vBARFL._AC_SL1000_.jpg" onClick={(e)=> {
                                console.log(this)
                                document.getElementById('main').src = e.target.src;
                            }}/>                
                        </div>
                        <div>
                            <img  alt="" src="https://images-na.ssl-images-amazon.com/images/I/71QEo3sd1zL._AC_SL1000_.jpg"
                            onClick={(e)=> {
                                console.log(this)
                                document.getElementById('main').src = e.target.src;
                            }}/>
                        </div>
                            <div>
                                <img  alt="" src="https://images-na.ssl-images-amazon.com/images/I/61-PJB6G84L._AC_SL1000_.jpg" onClick={(e)=> {
                                console.log(this)
                                document.getElementById('main').src = e.target.src;
                            }}/>   
                            </div>
                        <div>
                            <img  alt="" src="https://images-na.ssl-images-amazon.com/images/I/718enZL0YkL._AC_SL1000_.jpg" onClick={(e)=> {
                                console.log(this)
                                document.getElementById('main').src = e.target.src;
                            }}/>
                        </div>
                        <div>
                            <img  alt="" src="https://images-na.ssl-images-amazon.com/images/I/61SDu6PgGCL._AC_SL1000_.jpg" onClick={(e)=> {
                                console.log(this)
                                document.getElementById('main').src = e.target.src;
                            }}/>
                        </div>
                        <div>
                            <img  alt="" src="https://images-na.ssl-images-amazon.com/images/I/61VMe3BoPQL._AC_SL1000_.jpg" onClick={(e)=> {
                                console.log(this)
                                document.getElementById('main').src = e.target.src;
                            }}/>
                        </div>
                    </div>
                </div>
                <div className="product_details">
                    <div className="product_details_title">
                    <h1>INJORA RC Car Body Shell 313mm Wheelbase Car Shell KIT D110 Defender Body Shell for 1/10 RC Crawler Traxxas TRX4 Axial SCX10 90046 (Orange)</h1>
                    <a href="https://www.amazon.com/stores/INJORA/page/6E25EC4C-B068-4AC8-AFCE-9A2B9506F53B?ref_=ast_bln">Visit the INJORA Store</a>
                    </div>
                    <div className="product_details_star">
                
                    </div>
                    <div className="product_details_price">
                        <p>Price:	$139.99  & FREE Returns</p>
                    </div>
                    <div className="product_details_color">
                        <div className="product_details_color_selected">
                        Color: {"Orange"}
                        </div>
                        <div className="product_details_color_options">
                    
                        </div>
                    </div>
                    <div className="product_details_highlights">
                        <li>Made of high quality hard plastic - ABS.</li>
                        <li>Easy and convenient to install, enjoy the fun to assemble.</li>
                        <li>Novel design, movable doors and engine hood make your car more attractive.</li>
                        <li>Include light cups, interior cab, grille, fender, clear window, wiper, rearview mirror, door handle.</li>
                        <li>Suit for 1:10 RC Crawler Traxxas TRX4 Axial SCX10 90046.</li>
                    </div>
                </div>
                <div className="product_purchase">
                Purchse
                    <div className="product_purchase_price">
                        <p>Price:	$139.99  & FREE Returns</p>
                    </div>
                    <div className="product_purchase_delivery">
                        <p>FREE delivery: Saturday, Oct 10</p>
                    </div>
    
                    <div className="product_purchase_availability">
                        <p>Only 3 left in stock - order soon.</p>
                    </div>
                    <div className="product_purchase_quantity">
                        <select className="quantity" id="quantity">
                            <option value="1">Qty: 1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
    
                    <button>Add to Cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        main: state.products[0],
        products: state.products
    }
}

export default connect(mapStateToProps)(Product);
