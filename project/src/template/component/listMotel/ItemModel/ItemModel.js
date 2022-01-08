import React, { useState, useEffect } from 'react'
import image from './../../../../styles/Image/image.jpg'
import './ItemModel.scss'

function ItemModel () {
  return (
    <div className='motel-login'>
      <div className='motel-login__left'>
        <div className='time'>19:15:60 30/12/2021</div>
        <img className='image' src={image}></img>
      </div>
      <div className='motel-login__right'>
        <div className='title'>Cho thue nha tro re dep</div>
        <div className='subtitle'>Mo ta ve nha tro</div>
        <div className='area'>Diện tích: 25m2</div>
        <div className='cost'>Giá: 2.5000.000 / tháng</div>
        <div className='address'>
          Địa chỉ: Số 12, ngõ 12, Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà Nội
        </div>
        <div className='user'>Đăng bởi: Hoang Thi Thu Huong</div>
      </div>
    </div>
  )
}

export default ItemModel
