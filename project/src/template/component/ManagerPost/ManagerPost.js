import React, { useState, useEffect } from 'react'
import { Button, Tooltip } from 'antd'
import {
  PlusOutlined,
  LeftOutlined,
  SaveOutlined,
  SendOutlined
} from '@ant-design/icons'

import './ManagerPost.scss'
import BodyItem from './BodyItem/BodyItem'
import EditorPost from './EditorPost/EditorPost'
import PostDetail from '../PostDetail/PostDetail'
import axios from 'axios'

function ManagerPost () {
  const [isEditor, setIsEditor] = useState(false)
  const [isClickItem, setIsClickItem] = useState(false)
  const [dataContent, setDataContent] = useState('')
  const [roomId, setRoomId] = useState('')

  /**
   * luu bai
   */
  const savePost = function () {
    var token = localStorage.getItem('access')

    axios
      .put(
        `https://localhost:44342/api/rooms/` + roomId,
        {
          status: 1,
          content: dataContent,
          modifiedDate: new Date(),
          modifiedBy: null
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return isEditor ? (
    <div className='motel-post'>
      <div className='motel-post__lable'>
        <div>
          <Button
            icon={<LeftOutlined />}
            size='large'
            type='text'
            onClick={() => setIsEditor(false)}
          />
          Tạo mới bài đăng
        </div>
        <div>
          <Button
            icon={<SaveOutlined />}
            size='large'
            onClick={() => {
              console.log(dataContent)
              savePost()
            }}
            style={{ marginRight: '8px' }}
          >
            Lưu
          </Button>
          <Button
            icon={<SendOutlined />}
            size='large'
            type='primary'
            onClick={() => {}}
          >
            Đăng bài
          </Button>
        </div>
      </div>
      <div className='motel-post__content'>
        <EditorPost
          getContent={data => {
            setDataContent(data)
          }}
          getRoom={data => {
            setRoomId(data)
          }}
        ></EditorPost>
      </div>
    </div>
  ) : !isClickItem ? (
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
          <BodyItem
            onClickItem={() => {
              // setIsClickItem(true);
            }}
          ></BodyItem>

          <BodyItem
            onClickItem={() => {
              // setIsClickItem(true);
            }}
          ></BodyItem>

          <BodyItem
            onClickItem={() => {
              // setIsClickItem(true);
            }}
          ></BodyItem>

          <BodyItem
            onClickItem={() => {
              // setIsClickItem(true);
            }}
          ></BodyItem>

          <BodyItem
            onClickItem={() => {
              // setIsClickItem(true);
            }}
          ></BodyItem>
        </div>
      </div>
    </div>
  ) : (
    <PostDetail
      onClickBack={() => {
        setIsClickItem(false)
      }}
    ></PostDetail>
  )
}

export default ManagerPost
