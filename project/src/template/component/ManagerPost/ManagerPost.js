import React, { useState, useEffect } from 'react'
import { Button, Tooltip } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import './ManagerPost.scss'

function ManagerPost () {
  return (
    <div className='motel-post'>
      <div className='motel-post__lable'>Quản lý bài đăng</div>
      <div className='motel-post__content'>
        <Button type='primary' icon={<PlusOutlined />} size='large'>
          Thêm bài đăng mới
        </Button>
      </div>
    </div>
  )
}

export default ManagerPost
