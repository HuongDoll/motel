import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import background from './../../styles/Image/background.jpg'
import IconHome from './../../styles/Icon/home.png'
import IconRoom from './../../styles/Icon/room.png'
import IconManagerRoom from './../../styles/Icon/manager_room.png'
import IconPost from './../../styles/Icon/post.png'
import IconRent from './../../styles/Icon/rent.png'
import IconCustomer from './../../styles/Icon/customer.png'
import IconInvoice from './../../styles/Icon/invoice.png'
import IconRevenue from './../../styles/Icon/revenue.png'

import 'antd/dist/antd.css'
import './homePage.scss'
import ListMotel from '../component/listMotel/ListMotel'
import ManagerCustomer from '../component/ManagerCustomer/ManagerCustomer'
import ManagerInvoice from '../component/ManagerInvoice/ManagerInvoice '
import ManagerPost from '../component/ManagerPost/ManagerPost'
import ManagerRoom from '../component/ManagerRoom/ManagerRoom'
import MyMotel from '../component/myMotel/MyMotel'
import Revenue from '../component/Revenue/Revenue'
import Invoice from '../component/Invoice/Invoice'

const MENU_INDEX = {
  HOME: 1,
  MY_ROOM: 2,
  MANAGEMENT_ROOM: 3,
  MANAGEMENT_POST: 4,
  MANAGEMENT_RENTAL: 5,
  CUSTOMER: 6,
  MANAGEMENT_INVOICE: 7,
  REVENUE: 8,
  INVOICE: 9
}

function HomePage () {
  const [index, setIndex] = useState(MENU_INDEX.HOME)

  return (
    <div
      className='motel-homePage'
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header></Header>
      <div className='motel-homePage__body'>
        <div className='motel-homePage__body_menu'>
          <div
            className={
              'motel-homePage__body_menu_item ' +
              (index === MENU_INDEX.HOME ? 'select-menu' : '')
            }
            onClick={() => {
              setIndex(MENU_INDEX.HOME)
            }}
          >
            <img src={IconHome} alt='iconHome'></img>
            <span>Trang chủ</span>
          </div>
          <div
            className={
              'motel-homePage__body_menu_item ' +
              (index === MENU_INDEX.MY_ROOM ? 'select-menu' : '')
            }
            onClick={() => {
              setIndex(MENU_INDEX.MY_ROOM)
            }}
          >
            <img src={IconRoom} alt='iconHome'></img>
            <span>Phòng của tôi</span>
          </div>
          <div
            className={
              'motel-homePage__body_menu_item ' +
              (index === MENU_INDEX.INVOICE ? 'select-menu' : '')
            }
            onClick={() => {
              setIndex(MENU_INDEX.INVOICE)
            }}
          >
            <img src={IconInvoice} alt='iconHome'></img>
            <span>Hóa đơn</span>
          </div>
          <div
            className={
              'motel-homePage__body_menu_item ' +
              (index === MENU_INDEX.MANAGEMENT_ROOM ? 'select-menu' : '')
            }
            onClick={() => {
              setIndex(MENU_INDEX.MANAGEMENT_ROOM)
            }}
          >
            <img src={IconManagerRoom} alt='iconHome'></img>
            <span>Quản lý phòng trọ</span>
          </div>
          <div
            className={
              'motel-homePage__body_menu_item ' +
              (index === MENU_INDEX.MANAGEMENT_POST ? 'select-menu' : '')
            }
            onClick={() => {
              setIndex(MENU_INDEX.MANAGEMENT_POST)
            }}
          >
            <img src={IconPost} alt='iconHome'></img>
            <span>Quản lý bài đăng</span>
          </div>
          <div
            className={
              'motel-homePage__body_menu_item ' +
              (index === MENU_INDEX.CUSTOMER ? 'select-menu' : '')
            }
            onClick={() => {
              setIndex(MENU_INDEX.CUSTOMER)
            }}
          >
            <img
              src={IconCustomer}
              alt='iconHome'
              style={{ borderRadius: '50%' }}
            ></img>
            <span>Nhận khách trọ</span>
          </div>

          <div
            className={
              'motel-homePage__body_menu_item ' +
              (index === MENU_INDEX.MANAGEMENT_INVOICE ? 'select-menu' : '')
            }
            onClick={() => {
              setIndex(MENU_INDEX.MANAGEMENT_INVOICE)
            }}
          >
            <img src={IconInvoice} alt='iconHome'></img>
            <span>Quản lý hóa đơn</span>
          </div>

          <div
            className={
              'motel-homePage__body_menu_item ' +
              (index === MENU_INDEX.REVENUE ? 'select-menu' : '')
            }
            onClick={() => {
              setIndex(MENU_INDEX.REVENUE)
            }}
          >
            <img src={IconRevenue} alt='iconHome'></img>
            <span>Thống kê doanh thu</span>
          </div>
        </div>
        <div className='motel-homePage__body_content'>
          {index === MENU_INDEX.HOME ? <ListMotel></ListMotel> : <></>}
          {index === MENU_INDEX.CUSTOMER ? (
            <ManagerCustomer></ManagerCustomer>
          ) : (
            <></>
          )}
          {index === MENU_INDEX.MANAGEMENT_INVOICE ? (
            <ManagerInvoice></ManagerInvoice>
          ) : (
            <></>
          )}
          {index === MENU_INDEX.MANAGEMENT_POST ? (
            <ManagerPost></ManagerPost>
          ) : (
            <></>
          )}

          {index === MENU_INDEX.MANAGEMENT_ROOM ? (
            <ManagerRoom></ManagerRoom>
          ) : (
            <></>
          )}
          {index === MENU_INDEX.MY_ROOM ? <MyMotel></MyMotel> : <></>}
          {index === MENU_INDEX.REVENUE ? <Revenue></Revenue> : <></>}
          {index === MENU_INDEX.INVOICE ? <Invoice></Invoice> : <></>}
        </div>
      </div>
    </div>
  )
}

export default HomePage
