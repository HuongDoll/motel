import React, { useState, useEffect } from 'react'
import { Button, Tooltip } from 'antd'
import { PlusOutlined, LeftOutlined } from '@ant-design/icons'

import './ManagerPost.scss'
import BodyItem from './BodyItem/BodyItem'
import EditorPost from './EditorPost/EditorPost'

function ManagerPost () {
  const [isEditor, setIsEditor] = useState(false)

  return isEditor ? (
    <div className='motel-post'>
      <div className='motel-post__lable'>
        <Button
          icon={<LeftOutlined />}
          size='large'
          type='text'
          onClick={() => setIsEditor(false)}
        />
        Tạo mới bài đăng
      </div>
      <div className='motel-post__content'>
        <EditorPost></EditorPost>
      </div>
    </div>
  ) : (
    <div className='motel-post'>
      <div className='motel-post__lable'>Quản lý bài đăng</div>
      <div className='motel-post__content'>
        <Button
          type='primary'
          icon={<PlusOutlined />}
          size='large'
          onClick={() => setIsEditor(true)}
        >
          Thêm bài đăng mới
        </Button>
        <div className='motel-post__content_table'>
          <div className='row header'>
            <div className='row_image header'>Hình ảnh</div>
            <div className='row_inf header'>Thông tin</div>
            <div className='row_content header'>Nội dung</div>
            <div className='row_status header'>Trạng thái</div>
            <div className='row_edit header'>Sửa</div>
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

export default ManagerPost
