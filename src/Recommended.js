import React from 'react';
import './recommended.css';
import { connect } from 'react-redux';

import products from './data.js';

class Recommended extends React.Component {
  render() {
    console.log(this.props.products)
    return (
      <div className="Recommended">
        <button>{"<"}</button>
        {products.map((product, index) => (
          <div key={index} id ={index} onClick={(e) => {
            
            console.log(e.target.id);
          }}>
            <img className="thumbnail" alt="" src={product.image[0]}/>
            <p>{product.name}</p>
          </div>
        ))}
        <button>{">"}</button>
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

export default connect(mapStateToProps)(Recommended);

