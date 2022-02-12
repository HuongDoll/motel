import React, { useState, useEffect } from 'react'
import image from './../../../../styles/Image/image.jpg'
import { EditOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

import { Button } from 'antd'

import './BodyItem.scss'
BodyItem.propTypes = {
  onClickItem: PropTypes.func
}

BodyItem.defaultProps = {
  onClickItem: () => {}
}

function BodyItem (props) {
  return (
    <div
      className='motel-post-body-item row '
      onClick={() => {
        props.onClickItem()
      }}
    >
      <img className='row_image' src={image}></img>

      <div className='row_inf '>
        <div className='row_inf_content'>
          <div className='address'>
            <b>Địa chỉ:</b> Số 12, ngõ 12, Lê Thanh Nghị, Bách Khoa, Hai Bà
            Trưng, Hà Nội
          </div>
          <div className='area'>
            <b>Diện tích:</b> 25m2
          </div>
          <div className='cost'>
            <b>Giá:</b> 2.5000.000 / tháng
          </div>
        </div>
      </div>
      <div
        className='row_content '
        dangerouslySetInnerHTML={{
          __html:
            props?.data?.content ||
            `<h3><a href="https://ant.design/components/upload/?fbclid=IwAR0gNEGVlqr0ouY9TPqd0yzEDeIcl39I7k2wY2jo77sggt3f0BvOowC1q9Y#components-upload-demo-picture-style">Chính chủ cho thuê chung cư mini mới xây, nhà xây 6 tầng có thang máy.</a></h3><p>Vị trí: Số 21 ngõ 1 đường Đại Linh, Trung Văn, Nam Từ Liêm, Hà Nội. Ô tô đỗ cửa, Nhà cách đường Lê Văn Lương chỉ chỉ 200m, cách đường Đại Lộ Thăng Long 400m, đi sang KeangNam chỉ 10 phút, đi sang khu đô thị trung Hòa 10 phút,. Xung quanh tòa nhà có rất nhiều quán ăn, quán cafe, và nhiều tiện ích nữa...</p>`
        }}
      ></div>
      <div className='row_status '>Đang thuê</div>

      <div className='row_edit '>
        <Button icon={<EditOutlined />} type='text'></Button>
      </div>
    </div>
  )
}

export default BodyItem
