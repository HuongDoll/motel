import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { SubMenu } = Menu;
MenuCustom.propTypes = {};

function MenuCustom(props) {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      <Button
        type='primary'
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        style={{ marginBottom: 16, display: 'none' }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
        inlineCollapsed={collapsed}
      >
        <Menu.Item
          key='1'
          icon={<PieChartOutlined />}
          onClick={() => {
            history.push('/');
          }}
        >
          Danh sách phòng
        </Menu.Item>
        <Menu.Item
          key='2'
          icon={<DesktopOutlined />}
          onClick={() => {
            history.push('/revenue');
          }}
        >
          Thống kê doanh thu
        </Menu.Item>
        <Menu.Item
          key='3'
          icon={<ContainerOutlined />}
          onClick={() => {
            history.push('/manager-post');
          }}
        >
          Quản lý bài đăng
        </Menu.Item>
        <SubMenu key='sub1' icon={<MailOutlined />} title='Thiết lập tài khoản'>
          <Menu.Item
            key='5'
            onClick={() => {
              history.push('/my-account');
            }}
          >
            Thông tin cá nhân
          </Menu.Item>
          <Menu.Item key='6'>Mật khẩu</Menu.Item>
          <Menu.Item key='7'>Đăng xuát</Menu.Item>
          <Menu.Item key='8'>Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default MenuCustom;
