import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, message, Input, EyeTwoTone } from 'antd';
import { Tabs, Radio, Button } from 'antd';
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import axios from 'axios';

import './SettingAcount.scss';

SettingAcount.propTypes = {};

SettingAcount.defaultProps = {};

function SettingAcount(props) {
  const { TabPane } = Tabs;
  const [user, setUser] = useState({});
  const [userClone, setUserClone] = useState({});
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCf, setNewPasswordCf] = useState('');

  useEffect(() => {
    getdata();
  }, []);

  function callback(key) {
    console.log(key);
  }

  /**
   * lay thong tin ca nhan
   */
  const getdata = function () {
    var userId = localStorage.getItem('userID');
    var access_token = localStorage.getItem('access');

    axios
      .get(`https://localhost:44342/api/users/` + userId, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res?.data);
        setUser(res?.data);
        setUserClone(res?.data);

        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  /**
   * sua thong tin ca nhan
   */
  const updateUser = function () {
    var userId = localStorage.getItem('userID');
    var access_token = localStorage.getItem('access');

    axios
      .put(
        `https://localhost:44342/api/users/` + userId,
        {
          FullName: user.fullName,
          Phone: user.phone,
          Email: user.email,
          UserName: user.userName,
        },
        {
          headers: {
            Authorization: `token ${access_token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        getdata();
      })
      .catch((error) => console.log(error));
  };

  /**
   * thay doi mat khau
   */
  const updatePassword = function () {
    if (newPassword === newPasswordCf && newPassword !== '') {
      var userId = localStorage.getItem('userID');
      var access_token = localStorage.getItem('access');

      axios
        .put(
          `https://localhost:44342/api/users/` +
            userId +
            '?isChangePassword=true',
          {
            Password: password,
            NewPassword: newPassword,
          },
          {
            headers: {
              Authorization: `token ${access_token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className='setting-acount'>
      <div className='setting-acount__title'>C??i ?????t t??i kho???n</div>

      <Tabs onChange={callback} type='card'>
        <TabPane tab='Th??ng tin c?? nh??n' key='1'>
          <div className='setting-acount__content'>
            <div className='content'>
              <p>H??? v?? t??n (*)</p>
              <Input
                placeholder='H??? v?? t??n '
                style={{ marginBottom: '16px' }}
                required
                value={user?.fullName}
                onChange={(value) => {
                  setUser({ ...user, fullName: value.target.value });
                }}
              />
              <p>S??? ??i???n tho???i (*)</p>
              <Input
                placeholder='S??? ??i???n tho???i'
                style={{ marginBottom: '16px' }}
                required
                value={user.phone}
                onChange={(value) => {
                  setUser({ ...user, phone: value.target.value });
                }}
              />
              <p>Email</p>
              <Input
                placeholder='Email'
                style={{ marginBottom: '16px' }}
                required
                value={user.email}
                onChange={(value) => {
                  setUser({ ...user, email: value.target.value });
                }}
              />

              <p>T??n ????ng nh???p</p>
              <Input
                placeholder='T??n ????ng nh???p'
                style={{ marginBottom: '16px' }}
                required
                value={user.userName}
                onChange={(value) => {
                  setUser({ ...user, userName: value.target.value });
                }}
              />

              <p>Lo???i t??i kho???n</p>
              <Radio.Group
                //   onChange={onChange} value={value}
                defaultValue={1}
                style={{ width: '100%', marginBottom: '48px' }}
                disabled
              >
                <Radio value={1}>Ng?????i thu??</Radio>
                <Radio value={2}>Ch??? tr???</Radio>
              </Radio.Group>
              <Button onClick={() => {}} style={{ marginRight: '8px' }}>
                H???y
              </Button>
              <Button
                type='primary'
                onClick={() => {
                  updateUser();
                }}
              >
                C???p nh???t
              </Button>
            </div>
          </div>
        </TabPane>
        <TabPane tab='M???t kh???u' key='2'>
          <div className='setting-acount__content'>
            <div className='content'>
              <p>M???t kh???u c?? (*)</p>
              <Input.Password
                placeholder='M???t kh???u'
                style={{ marginBottom: '16px' }}
                defaultValue={''}
                onChange={(value) => {
                  setPassword(value.target.value);
                }}
              />
              <p>M???t kh???u m???i (*)</p>
              <Input.Password
                placeholder='M???t kh???u'
                style={{ marginBottom: '16px' }}
                defaultValue={''}
                onChange={(value) => {
                  setNewPassword(value.target.value);
                }}
              />
              <p>X??c nh???n m???t kh???u m???i (*)</p>
              <Input.Password
                placeholder='M???t kh???u'
                style={{ marginBottom: '48px' }}
                defaultValue={''}
                onChange={(value) => {
                  setNewPasswordCf(value.target.value);
                }}
              />
              <Button onClick={() => {}} style={{ marginRight: '8px' }}>
                H???y
              </Button>
              <Button
                type='primary'
                onClick={() => {
                  updatePassword();
                }}
              >
                C???p nh???t
              </Button>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default SettingAcount;
