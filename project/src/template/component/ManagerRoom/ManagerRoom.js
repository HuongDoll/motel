import React, { useState, useEffect } from 'react'
import { Button, Tooltip } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import './ManagerRoom.scss'
import BodyItem from './BodyItem/BodyItem'

function ManagerRoom () {
  return (
    <div className='motel-room'>
      <div className='motel-room__lable'>Quản lý phòng trọ</div>
      <div className='motel-room__content'>
        <Button type='primary' icon={<PlusOutlined />} size='large'>
          Thêm phòng mới
        </Button>
        <div className='motel-room__content_table'>
          <div className='row header'>
            <div className='row_id header'>ID</div>
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

export default ManagerRoom
