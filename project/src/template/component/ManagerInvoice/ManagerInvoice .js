import React, { useState, useEffect } from 'react'
import { Button, Tooltip } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import './ManagerInvoice.scss'
import BodyItem from './BodyItem/BodyItem'

function ManagerInvoice () {
  return (
    <div className='motel-manager-invoice'>
      <div className='motel-manager-invoice__lable'>Quản lý hóa đơn</div>
      <div className='motel-manager-invoice__content'>
        <Button type='primary' icon={<PlusOutlined />} size='large'>
          Tạo hóa đơn
        </Button>
        <div className='motel-manager-invoice__content_table'>
          <div className='row header'>
            <div className='row_room header'>Phòng</div>
            <div className='row_user header'>Người thuê</div>
            <div className='row_cost header'>Tổng giá</div>
            <div className='row_status header'>Trạng thái</div>
            <div className='row_action header'>Thao tác</div>
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

export default ManagerInvoice
