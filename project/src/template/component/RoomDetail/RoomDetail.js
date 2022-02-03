import React, { useState, useEffect } from 'react'
import { Button, Tooltip, Image } from 'antd'
import {
  PlusOutlined,
  LeftOutlined,
  SaveOutlined,
  SendOutlined
} from '@ant-design/icons'
import { Row, Col } from 'antd'
import { List, Avatar } from 'antd'

import PropTypes from 'prop-types'

import './RoomDetail.scss'

RoomDetail.propTypes = {
  onClickBack: PropTypes.func
}

RoomDetail.defaultProps = {
  onClickBack: () => {}
}
const data = [
  {
    title: 'Địa chỉ',
    content: ' Số 12, ngõ 12, Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà Nội',
    avt:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpQ5YenVypFBtbZCXd2pW5euFnknS_sBc_qh-0b-02HPC6XX2rOS5c0k_0MkCdY_LGNs&usqp=CAU'
  },
  {
    title: 'Diện tích',
    content: ' 25m2',
    avt:
      'https://cdn3.iconfinder.com/data/icons/real-estate-flat-icons-vol-2/256/68-512.png'
  },
  {
    title: 'Giá',
    content: ' 2.500.000 VND',
    avt:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFO-CSGZKlqR5nGD1wTguWPd0r0roaRt5Pr4ONom-UBJlvvJdq1a9VQC_JR-H_f_On8uY&usqp=CAU'
  },
  {
    title: 'Chủ trọ',
    content: ' hoang thi thu huong',
    avt: 'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png'
  }
]

function RoomDetail (props) {
  return (
    <div className='room-detail'>
      <div className='room-detail__lable'>
        <div>
          <Button
            icon={<LeftOutlined />}
            size='large'
            type='text'
            onClick={() => props.onClickBack()}
          />
          Chi tiết phòng trọ
        </div>
        <div>
          <Button
            icon={<SendOutlined />}
            size='large'
            type='primary'
            onClick={() => {}}
          >
            Thuê phòng
          </Button>
        </div>
      </div>
      <Row className='room-detail__content'>
        <Col
          className='room-detail__content_image'
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
        >
          <Image.PreviewGroup>
            <div className='room-detail__content_image_row'>
              <Image
                width={'100%'}
                src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
              />
            </div>
            <div className='room-detail__content_image_row'>
              <Image
                width={'25%'}
                src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
              />
              <Image
                width={'25%'}
                src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
              />
              <Image
                width={'25%'}
                src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
              />

              <Image
                width={'25%'}
                src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
              />
            </div>
          </Image.PreviewGroup>
        </Col>
        <Col
          className='room-detail__content_room'
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
        >
          <List
            itemLayout='horizontal'
            dataSource={data}
            size='large'
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.avt} size={'large'} />}
                  title={<h3>{item.title}</h3>}
                  description={item.content}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  )
}

export default RoomDetail
