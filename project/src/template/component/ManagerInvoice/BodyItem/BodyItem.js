import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

import './BodyItem.scss'

function BodyItem () {
  return (
    <div className='motel-post-body-item row '>
      <div className='row_room '>
        Số 12, ngõ 12, Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà Nội
      </div>
      <div className='row_user '>Hoang Thi Thu Huong</div>
      <div className='row_cost '>5.000.000</div>
      <div className='row_status '>Chưa thanh toán</div>
      <div className='row_action '>
        <Button
          type='primary'
          //   icon={<CheckOutlined />}
          style={{ marginBottom: '12px', width: '130px' }}
          ghost
        >
          Chi tiết
        </Button>
        <br></br>
        <Button
          type='primary'
          //   icon={<CloseOutlined />}
          style={{ width: '130px' }}
          //   danger
        >
          Hoàn Thành
        </Button>
      </div>
    </div>
  )
}

export default BodyItem
