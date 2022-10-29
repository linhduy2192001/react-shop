import React from 'react'
import { currency } from '../utils/currency';

export default function CartItem({product, quantity}) {
    const img1 = product.images?.[0]?.thumbnail_url;

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          {/* Image */}
          <a href="./product.html">
            <img
              className="img-fluid"
              src={img1}
              alt="..."
            />
          </a>
        </div>
        <div className="col-8">
          {/* Title */}
          <p className="font-size-sm font-weight-bold mb-6">
            <a className="text-body" href="./product.html">
              {product.name}
            </a>{" "}
            <br />
            <span className="text-muted">{currency(product.real_price)} vnd</span>
          </p>
          {/*Footer */}
          <div className="d-flex align-items-center">
            {/* Select */}
            <select className="custom-select custom-select-xxs w-auto">
              <option value={1}>1</option>
              <option value={1}>2</option>
              <option value={1}>3</option>
            </select>
            {/* Remove */}
            <a className="font-size-xs text-gray-400 ml-auto" href="#!">
              <i className="fe fe-x" /> Remove
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
