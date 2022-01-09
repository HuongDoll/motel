import React, { useState, useEffect } from 'react'
import image from './../../../../styles/Image/image.jpg'
import { EditOutlined, DeleteTwoTone } from '@ant-design/icons'

import { Button } from 'antd'

import './BodyItem.scss'

function BodyItem () {
  return (
    <div className='motel-body-item row '>
      <div className='row_id'>1</div>

      <div className='row_inf '>
        <img className='image' src={image}></img>

        <div className='row_inf_content'>
          <div className='address'>
            Địa chỉ: Số 12, ngõ 12, Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà
            Nội
          </div>
          <div className='area'>Diện tích: 25m2</div>
          <div className='cost'>Giá: 2.5000.000 / tháng</div>
          <div className='user'>Đăng bởi: Hoang Thi Thu Huong</div>
        </div>
      </div>
      <div className='row_status '>Còn trống</div>
      <div className='row_option '>
        <Button icon={<EditOutlined />} type='text'></Button>
        <Button
          icon={<DeleteTwoTone twoToneColor='red' />}
          type='text'
        ></Button>
      </div>
    </div>
  )
}

export default BodyItem
