import React, { useState, useEffect } from 'react'
import logo from './../../styles/Image/logo_cut.png'
import avt from './../../styles/Image/avt.png'
import { Menu, Dropdown, message, Input, EyeTwoTone } from 'antd'
import { Modal, Button, notification, Radio } from 'antd'
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import './header.scss'

function Header () {
  const [isLogin, setIsLogin] = useState(true)
  const [modalLogin, setModalLogin] = useState(false)
  const [modalRes, setModalRes] = useState(false)

  const onClick = ({ key }) => {
    if (key === '2') setIsLogin(false)
  }

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key='1'>
        <SettingOutlined style={{ marginRight: '8px' }} />
        Cài đặt tài khoản
      </Menu.Item>
      <Menu.Item key='2'>
        <LogoutOutlined style={{ marginRight: '8px' }} />
        Đăng xuất
      </Menu.Item>
    </Menu>
  )

  const openNotification = () => {
    notification.open({
      message: 'Đăng nhập thành công',
      description: 'Xin chào Hoang Thi Thu Huong.',
      onClick: () => {
        console.log('Notification Clicked!')
      }
    })
  }

  return (
    <div className='motel-header'>
      <img className='motel-header__left' src={logo} alt='Logo'></img>
      <div className='motel-header__right'>
        {isLogin ? (
          <>
            <Dropdown overlay={menu}>
              <div
                className='ant-dropdown-link motel-header__right_name
'
                onClick={e => e.preventDefault()}
              >
                Hoang Thi Thu Huong
                <img
                  className='motel-header__right_avt'
                  src={avt}
                  alt='avt'
                ></img>
              </div>
            </Dropdown>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                setModalLogin(true)
              }}
            >
              Đăng nhập
            </Button>
            <Button
              type='primary'
              onClick={() => {
                setModalRes(true)
              }}
            >
              Đăng ký
            </Button>
            <Modal
              title='Đăng nhập'
              style={{ top: 20 }}
              visible={modalLogin}
              onOk={() => {
                setIsLogin(true)
                setModalLogin(false)
                openNotification()
              }}
              onCancel={() => setModalLogin(false)}
            >
              <p>Tên đăng nhập</p>
              <Input
                placeholder='Tên đăng nhập'
                style={{ marginBottom: '16px' }}
                required
              />

              <p>Mật khẩu</p>
              <Input.Password placeholder='Mật khẩu' />
            </Modal>
            <Modal
              title='Đăng ký'
              style={{ top: 20 }}
              visible={modalRes}
              onOk={() => {
                setModalRes(false)
                setModalLogin(true)
              }}
              onCancel={() => setModalRes(false)}
            >
              <p>Họ và tên (*)</p>
              <Input
                placeholder='Họ và tên '
                style={{ marginBottom: '16px' }}
                required
              />
              <p>Số điện thoại (*)</p>
              <Input
                placeholder='Số điện thoại'
                style={{ marginBottom: '16px' }}
                required
              />
              <p>Email</p>
              <Input
                placeholder='Email'
                style={{ marginBottom: '16px' }}
                required
              />

              <p>Tên đăng nhập</p>
              <Input
                placeholder='Tên đăng nhập'
                style={{ marginBottom: '16px' }}
                required
              />

              <p>Mật khẩu (*)</p>
              <Input.Password
                placeholder='Mật khẩu'
                style={{ marginBottom: '16px' }}
              />
              <p>Xác nhận mật khẩu (*)</p>
              <Input.Password
                placeholder='Mật khẩu'
                style={{ marginBottom: '16px' }}
              />
              <p>Loại tài khoản</p>
              <Radio.Group
                //   onChange={onChange} value={value}
                defaultValue={1}
              >
                <Radio value={1}>Người thuê</Radio>
                <Radio value={2}>Chủ trọ</Radio>
              </Radio.Group>
            </Modal>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
