import React, { useState, useEffect } from 'react'
import BodyItem from './BodyItem/BodyItem'

import './ManagerCustomer.scss'

function ManagerCustomer () {
  return (
    <div className='motel-customer'>
      <div className='motel-customer__lable'>Nhận khách trọ</div>
      <div className='motel-customer__content'>
        <div className='motel-customer__content_table'>
          <div className='row header'>
            <div className='row_room header'>Phòng trọ</div>
            <div className='row_customer header'>Khách </div>
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

export default ManagerCustomer
