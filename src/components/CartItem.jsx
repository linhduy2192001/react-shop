import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeCartAction, updateQuantityCartAction } from '../stores/cartReducer';
import { currency } from '../utils/currency';

const ButtonQuantity = styled.button `
  width:50px;
  height:50px;
  border: none;
  background:none;
  outline: none;
`
const InputQuantity = styled.input `
  width:50px;
  text-align:center;
`

const QuantityRoot = styled.div`
display :flex;
`
export default function CartItem({product, quantity}) {
    const dispatch =useDispatch() 
    const img1 = product.images?.[0]?.thumbnail_url;

    const onRemove = (ev) => {
      ev.preventDefault()
      
      dispatch(removeCartAction(
        {
          id: product.id
        }
      ))
    }
    const updateQuantity = (quantity) =>{
      dispatch(updateQuantityCartAction(
        {
          id: product.id,
          quantity
        }
      ))
    }

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          {/* Image */}
          <a href="./product.html">
            <img className="img-fluid" src={img1} alt="..." />
          </a>
        </div>
        <div className="col-8">
          {/* Title */}
          <p className="font-size-sm font-weight-bold mb-6">
            <a className="text-body" href="./product.html">
              {product.name}
            </a>{" "}
            <br />
            <span className="text-muted">
              {currency(product.real_price)} vnd
            </span>
          </p>
          {/*Footer */}
          <div className="d-flex align-items-center">
            {/* Select */}
            {/* <select className="custom-select custom-select-xxs w-auto">
              <option value={1}>1</option>
              <option value={1}>2</option>
              <option value={1}>3</option>
            </select> */}
            <QuantityRoot>
              <ButtonQuantity onClick={() => updateQuantity(quantity - 1)}>-</ButtonQuantity>
              <InputQuantity value={quantity} />
              <ButtonQuantity onClick={() => updateQuantity(quantity + 1)}>+</ButtonQuantity>
            </QuantityRoot>

            <a
              onClick={onRemove}
              className="font-size-xs text-gray-400 ml-auto"
              href="#!"
            >
              <i className="fe fe-x" /> Remove
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
