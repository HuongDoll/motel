import React, { useState, useEffect } from 'react'
import { Button, Tooltip, Modal, Input, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import './ManagerInvoice.scss'
import BodyItem from './BodyItem/BodyItem'

function ManagerInvoice () {
  const [isCreatInvoice, setIsCreatInvoice] = useState(false)
  const { Option } = Select
  const { TextArea } = Input

  return (
    <div className='motel-manager-invoice'>
      <div className='motel-manager-invoice__lable'>Quản lý hóa đơn</div>
      <div className='motel-manager-invoice__content'>
        <Button
          type='primary'
          icon={<PlusOutlined />}
          size='large'
          onClick={() => setIsCreatInvoice(true)}
        >
          Tạo hóa đơn
        </Button>
        <Modal
          title='Tạo hóa đơn'
          style={{ top: 20 }}
          visible={isCreatInvoice}
          onOk={() => setIsCreatInvoice(false)}
          onCancel={() => setIsCreatInvoice(false)}
        >
          <p>Phòng</p>
          <Select
            showSearch
            style={{ width: '100%', marginBottom: '16px' }}
            placeholder='Search to Select'
            optionFilterProp='children'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value='1'>Not Identified</Option>
            <Option value='2'>Closed</Option>
            <Option value='3'>Communicated</Option>
            <Option value='4'>Identified</Option>
            <Option value='5'>Resolved</Option>
            <Option value='6'>Cancelled</Option>
          </Select>

          <p>Người thuê</p>
          <Input
            placeholder='Người thuê'
            style={{ marginBottom: '16px' }}
            disabled
            value={'huong'}
          />
          <p>Giá phòng (VND)</p>
          <Input
            placeholder='Giá'
            style={{ marginBottom: '16px' }}
            disabled
            value={'2.500.000'}
          />
          <p>Giá dịch vụ (VND)</p>
          <Input
            placeholder='Giá dịch vụ'
            style={{ marginBottom: '16px' }}
            required
          />
          <p>Ghi chú</p>
          <TextArea
            rows={3}
            placeholder='Ghi chú'
            style={{ marginBottom: '16px' }}
          />
        </Modal>

        <div className='motel-manager-invoice__content_table'>
          <div className='row header'>
            <div className='row_room header'>Phòng</div>
            <div className='row_user header'>Người thuê</div>
            <div className='row_cost header'>Tổng giá</div>
            <div className='row_status header'>Trạng thái</div>
            <div className='row_action header'>Thao tác</div>
          </div>
          <BodyItem></BodyItem>
          <BodyItem></BodyItem>
          <BodyItem></BodyItem>
          <BodyItem></BodyItem>
          <BodyItem></BodyItem>
          <BodyItem></BodyItem>
        </div>
      </div>
    </div>
  )
}

export default ManagerInvoice
