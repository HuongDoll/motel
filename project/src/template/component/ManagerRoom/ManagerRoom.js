import React, { useState, useEffect } from 'react'
import { Button, Tooltip, Modal, Input, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'

import './ManagerRoom.scss'
import BodyItem from './BodyItem/BodyItem'
import RoomDetail from '../RoomDetail/RoomDetail'

function ManagerRoom () {
  const [isCreatRoom, setIsCreatRoom] = useState(false)

  const { Option } = Select
  const [isClickItem, setIsClickItem] = useState(false)

  function handleChange (value) {
    console.log(`selected ${value}`)
  }

  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url:
    //     'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    // }
  ])

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    console.log(fileList)
  }

  const onPreview = async file => {
    let src = file.url
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow.document.write(image.outerHTML)
  }

  const createRoom = function () {
    setIsCreatRoom(false)

    // luu anh

    //tao phong
  }

  return !isClickItem ? (
    <div className='motel-room'>
      <div className='motel-room__lable'>Quản lý phòng trọ</div>
      <div className='motel-room__content'>
        <Button
          type='primary'
          icon={<PlusOutlined />}
          size='large'
          onClick={() => setIsCreatRoom(true)}
        >
          Thêm phòng mới
        </Button>
        <Modal
          title=' Thêm mới phòng trọ'
          style={{ top: 20 }}
          visible={isCreatRoom}
          onOk={() => {
            createRoom()
          }}
          onCancel={() => setIsCreatRoom(false)}
        >
          <p>Địa chỉ (*)</p>
          <Input
            placeholder='Địa chỉ '
            style={{ marginBottom: '16px' }}
            required
          />
          <p>Diện tích (*)</p>
          <Input
            placeholder='Diện tích'
            style={{ marginBottom: '16px' }}
            required
          />
          <p>Giá (*)</p>
          <Input placeholder='Giá' style={{ marginBottom: '16px' }} required />

          <p>Trạng thái</p>
          <Select
            defaultValue={0}
            style={{ marginBottom: '16px', width: '100%' }}
            onChange={handleChange}
          >
            <Option value={1}>Đã cho thuê</Option>
            <Option value={0}>Chưa cho thuê</Option>
          </Select>

          <p>Hình ảnh </p>
          <ImgCrop rotate>
            <Upload
              action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
              listType='picture-card'
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && '+ Upload'}
            </Upload>
          </ImgCrop>
        </Modal>

        <div className='motel-room__content_table'>
          <div className='row header'>
            <div className='row_id header'>ID</div>
            <div className='row_inf header'>Thông tin</div>
            <div className='row_status header'>Trạng thái</div>
            <div className='row_option header'>Tùy chọn</div>
          </div>
          <BodyItem
            onClickItem={() => {
              setIsClickItem(true)
            }}
          ></BodyItem>

          <BodyItem
            onClickItem={() => {
              setIsClickItem(true)
            }}
          ></BodyItem>

          <BodyItem
            onClickItem={() => {
              setIsClickItem(true)
            }}
          ></BodyItem>

          <BodyItem
            onClickItem={() => {
              setIsClickItem(true)
            }}
          ></BodyItem>

          <BodyItem
            onClickItem={() => {
              setIsClickItem(true)
            }}
          ></BodyItem>
        </div>
      </div>
    </div>
  ) : (
    <RoomDetail
      onClickBack={() => {
        setIsClickItem(false)
      }}
    ></RoomDetail>
  )
}

export default ManagerRoom
