import React, { useState, useEffect } from 'react'
import { Menu, Dropdown, message, Input, EyeTwoTone } from 'antd'
import { Tabs, Radio, Button } from 'antd'
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons'

import './SettingAcount.scss'

SettingAcount.propTypes = {}

SettingAcount.defaultProps = {}

function SettingAcount (props) {
  const { TabPane } = Tabs

  function callback (key) {
    console.log(key)
  }

  return (
    <div className='setting-acount'>
      <div className='setting-acount__title'>Cài đặt tài khoản</div>

      <Tabs onChange={callback} type='card'>
        <TabPane tab='Thông tin cá nhân' key='1'>
          <div className='setting-acount__content'>
            <div className='content'>
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

              <p>Loại tài khoản</p>
              <Radio.Group
                //   onChange={onChange} value={value}
                defaultValue={1}
                style={{ width: '100%', marginBottom: '48px' }}
              >
                <Radio value={1}>Người thuê</Radio>
                <Radio value={2}>Chủ trọ</Radio>
              </Radio.Group>
              <Button onClick={() => {}} style={{ marginRight: '8px' }}>
                Hủy
              </Button>
              <Button type='primary' onClick={() => {}}>
                Cập nhật
              </Button>
            </div>
          </div>
        </TabPane>
        <TabPane tab='Mật khẩu' key='2'>
          <div className='setting-acount__content'>
            <div className='content'>
              <p>Mật khẩu cũ (*)</p>
              <Input.Password
                placeholder='Mật khẩu'
                style={{ marginBottom: '16px' }}
              />
              <p>Mật khẩu mới (*)</p>
              <Input.Password
                placeholder='Mật khẩu'
                style={{ marginBottom: '16px' }}
              />
              <p>Xác nhận mật khẩu mới (*)</p>
              <Input.Password
                placeholder='Mật khẩu'
                style={{ marginBottom: '48px' }}
              />
              <Button onClick={() => {}} style={{ marginRight: '8px' }}>
                Hủy
              </Button>
              <Button type='primary' onClick={() => {}}>
                Cập nhật
              </Button>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default SettingAcount
