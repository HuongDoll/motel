import React, { useState, useEffect } from 'react'
import { Select } from 'antd'

import './myMotel.scss'
import BodyItem from './BodyItem/BodyItem'

function MyMotel () {
  const { Option } = Select

  return (
    <div className='motel-mymotel'>
      <div className='motel-mymotel__lable'>Phòng của tôi</div>
      <div className='motel-mymotel__content'>
        <div className='motel-mymotel__content_filter'>
          <div className='motel-mymotel__content_filter_lable'>
            Trạng thái phòng
          </div>
          <Select
            defaultValue='0'
            style={{ width: 220 }}
            //   onChange={handleChange}
            className='motel-mymotel__content_filter_select'
          >
            <Option value='0'>Tất cả</Option>
            <Option value='1'>Đang thuê</Option>
            <Option value='2'>Đã thuê</Option>
            <Option value='3'>Đang chờ xử lý yêu cầu thuê</Option>
          </Select>
        </div>
        <div className='motel-mymotel__content_table'>
          <div className='row header'>
            <div className='row_inf header'>Thông tin</div>
            <div className='row_status header'>Trạng thái</div>
            <div className='row_option header'>Tùy chọn</div>
          </div>
          <BodyItem></BodyItem>
          <BodyItem></BodyItem>
          <BodyItem></BodyItem>
          <BodyItem></BodyItem>
          <BodyItem></BodyItem>
          <BodyItem></BodyItem>
        </div>
      </div>
    </div>
  )
}

export default MyMotel
