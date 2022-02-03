import React, { useState, useEffect } from 'react'
import { Input, InputNumber } from 'antd'
import ItemModel from './ItemModel/ItemModel'
import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import './listMotel.scss'
import PostDetail from '../PostDetail/PostDetail'

function ListMotel () {
  const [isClickItem, setIsClickItem] = useState(false)

  return !isClickItem ? (
    <div className='motel-list-motel'>
      <div className='motel-list-motel__list'>
        <div className='lable'> Danh sách phòng</div>
        <ItemModel
          onClickItem={() => {
            setIsClickItem(true)
          }}
        ></ItemModel>
        <ItemModel
          onClickItem={() => {
            setIsClickItem(true)
          }}
        ></ItemModel>
        <ItemModel
          onClickItem={() => {
            setIsClickItem(true)
          }}
        ></ItemModel>
        <ItemModel
          onClickItem={() => {
            setIsClickItem(true)
          }}
        ></ItemModel>
        <ItemModel
          onClickItem={() => {
            setIsClickItem(true)
          }}
        ></ItemModel>
      </div>
      <div className='motel-list-motel__filter'>
        <div className='motel-list-motel__filter_search'>
          <div className='title'>Tìm kiếm</div>
          <div className='group-filter'>
            <span>Tỉnh/Thành phố</span>
            <Input placeholder='Tỉnh/Thành phố' />
          </div>
          <div className='group-filter'>
            <span>Quận/Huyện</span>
            <Input placeholder='Quận/Huyện' />
          </div>
          <div className='group-filter'>
            <span>Phường/Xã</span>
            <Input placeholder='Phường/Xã' />
          </div>
          <div className='group-filter'>
            <span>Đường/Phố</span>
            <Input placeholder='Đường/Phố' />
          </div>
          <div className='group-filter'>
            <span>Diện tích (m2)</span>
            <div className='group-input'>
              <InputNumber
                min={0}
                defaultValue={0}
                //   onChange={onChange}
              />
              <span>-</span>
              <InputNumber
                min={1}
                defaultValue={50}
                //   onChange={onChange}
              />
            </div>
          </div>

          <div className='group-filter'>
            <span>Giá(VND)</span>
            <div className='group-input'>
              <InputNumber
                min={0}
                defaultValue={0}
                //   onChange={onChange}
              />
              <span>-</span>
              <InputNumber
                min={1}
                defaultValue={10000000}
                //   onChange={onChange}
              />
            </div>
          </div>
        </div>
        {/* <div className='motel-list-motel__filter_sort'>
          <div className='title'>Sắp xếp</div>
        </div> */}
        <div className='button'>
          <Button type='primary' icon={<SearchOutlined />}>
            Tìm kiếm
          </Button>
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

export default ListMotel
