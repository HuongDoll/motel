import React, { useState, useEffect } from 'react'
import { Button, Tooltip, Modal, Input, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import axios from 'axios'

import './ManagerRoom.scss'
import BodyItem from './BodyItem/BodyItem'
import RoomDetail from '../RoomDetail/RoomDetail'

function ManagerRoom () {
  const [isCreatRoom, setIsCreatRoom] = useState(false)

  const { Option } = Select
  const [isClickItem, setIsClickItem] = useState(false)
  const [data, setData] = useState({})
  const [dataSelected, setDataSelected] = useState({})

  const [room, setRoom] = useState({
    province: ' ',
    district: ' ',
    ward: ' ',
    address: '',
    area: '',
    price: 0,
    status: 0,
    content: ''
  })

  function handleChange (value) {
    setRoom({ ...room, status: value })
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

  useEffect(() => {
    getData()
  }, [])

  const getData = function () {
    var token = localStorage.getItem('access')
    var hostId = localStorage.getItem('userID')

    axios
      .post(
        `https://localhost:44342/api/rooms/filter`,
        {
          selectedFields: ['Price', 'Address'],
          filters: [
            [
              {
                key: 'hostID',
                valueArray: [],
                Value: hostId,
                operator: 1
              }
            ]
          ],
          orders: ['-ModifiedBy']
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        console.log(res)
        console.log(res.data.data)
        setData(res?.data.data)
      })
  }

  /**
   * Tao phong
   */
  const createRoom = function () {
    setIsCreatRoom(false)

    // luu anh

    //tao phong
    var token = localStorage.getItem('access')
    var hostId = localStorage.getItem('userID')

    axios
      .post(
        `https://localhost:44342/api/rooms`,
        {
          hostID: hostId.toString(),
          province: room.province,
          district: room.district,
          ward: room.ward,
          address: room.address,
          area: room.area,
          price: room.price,
          status: room.status,
          content: room.content
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        console.log(res)
        console.log(res.data)
        setIsCreatRoom(false)
      })
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
          <p>Tỉnh/Thành phố (*)</p>
          <Input
            placeholder='Tỉnh/Thành phố '
            style={{ marginBottom: '16px' }}
            required
            defaultValue={room.province}
            onChange={value => {
              setRoom({ ...room, province: value.target.value })
            }}
          />
          <p>Quận/Huyện (*)</p>
          <Input
            placeholder='Quận / Huyện
 '
            style={{ marginBottom: '16px' }}
            required
            defaultValue={room.district}
            onChange={value => {
              setRoom({ ...room, district: value.target.value })
            }}
          />
          <p>Phường/Xã (*)</p>
          <Input
            placeholder='Phường / Xã
 '
            style={{ marginBottom: '16px' }}
            required
            defaultValue={room.province}
            onChange={value => {
              setRoom({ ...room, province: value.target.value })
            }}
          />
          <p>Đường/Phố (*)</p>
          <Input
            placeholder='Đường / Phố
 '
            style={{ marginBottom: '16px' }}
            required
            defaultValue={room.address}
            onChange={value => {
              setRoom({ ...room, address: value.target.value })
            }}
          />
          <p>Diện tích (*)</p>
          <Input
            placeholder='Diện tích'
            style={{ marginBottom: '16px' }}
            required
            defaultValue={room.area}
            onChange={value => {
              setRoom({ ...room, area: value.target.value })
            }}
          />
          <p>Giá (*)</p>
          <Input
            placeholder='Giá'
            style={{ marginBottom: '16px' }}
            required
            defaultValue={room.price}
            onChange={value => {
              setRoom({ ...room, price: value.target.value })
            }}
          />

          <p>Trạng thái</p>
          <Select
            defaultValue={room.status}
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
            <div className='row_inf header'>Thông tin</div>
            <div className='row_status header'>Trạng thái</div>
            <div className='row_option header'>Tùy chọn</div>
          </div>
          {data.length > 0 ? (
            data?.map((dataItem, i) => (
              <BodyItem
                data={dataItem}
                key={i}
                onClickItem={() => {
                  setIsClickItem(true)
                  setDataSelected(dataItem)
                  console.log(dataItem)
                }}
              ></BodyItem>
            ))
          ) : (
            <BodyItem
              onClickItem={() => {
                // setIsClickItem(true)
              }}
            ></BodyItem>
          )}
        </div>
      </div>
    </div>
  ) : (
    <RoomDetail
      onClickBack={() => {
        setIsClickItem(false)
      }}
      data={dataSelected}
    ></RoomDetail>
  )
}

export default ManagerRoom
