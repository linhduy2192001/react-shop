import { message, Spin } from 'antd'
import { LoadingOutlined, SyncOutlined } from "@ant-design/icons";
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useReduxAsync } from '../core'
import { addCartAction } from '../stores/cartReducer'
import { currency } from '../utils/currency'

export default function ProductCard( {id, images, name, price, real_price, rating_average, review_count, thumbnail_url, slug}) { 

    const img1 = images?.[0]?.thumbnail_url
    const img2 = images?.[1]?.thumbnail_url || img1
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch() 
    const addProduct = () => {
        setLoading(true)
        dispatch(addCartAction({
            id,
           success: () => {
            message.success(`Thêm sản phẩm "${name}" vào giỏ hàng thành công`)
           },
           finally : () => {
                setLoading(false)
           }

        }))
    }

  return (
    <div className="col-6 col-md-4">
      {/* Card */}
      <div className="card mb-7">
        {/* Badge */}
        <div className="badge badge-white card-badge card-badge-left text-uppercase">
          New
        </div>
        {/* Image */}
        <div className="card-img">
          {/* Image */}
          <a className="card-img-hover" href="product.html">
            <img className="card-img-top card-img-back" src={img1} alt="..." />
            <img className="card-img-top card-img-front" src={img2} alt="..." />
          </a>
          {/* Actions */}
          <div className="card-actions">
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="modal"
                data-target="#modalProduct"
              >
                <i className="fe fe-eye" />
              </button>
            </span>
            <span className="card-action">
              {loading ? (
                <LoadingOutlined />
              ) : (
                <button
                  onClick={addProduct}
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <i className="fe fe-shopping-cart" />
                </button>
              )}
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-heart" />
              </button>
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="card-body px-0">
          {/* Category */}
          <div className="font-size-xs">
            <a className="text-muted" href="shop.html">
              Shoes
            </a>
          </div>
          {/* Title */}
          <div className="font-weight-bold">
            <a className="text-body" href="product.html">
              {name}
            </a>
          </div>
          {/* Price */}
          <div className="font-weight-bold text-muted">
            {currency(real_price)}
          </div>
        </div>
      </div>
    </div>
  );
}
