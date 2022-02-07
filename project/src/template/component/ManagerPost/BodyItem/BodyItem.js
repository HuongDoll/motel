import React, { useState, useEffect } from 'react';
import image from './../../../../styles/Image/image.jpg';
import { EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { Button } from 'antd';

import './BodyItem.scss';
BodyItem.propTypes = {
  onClickItem: PropTypes.func,
};

BodyItem.defaultProps = {
  onClickItem: () => {},
};

function BodyItem(props) {
  return (
    <div
      className='motel-post-body-item row '
      onClick={() => {
        props.onClickItem();
      }}
    >
      <img className='row_image' src={image}></img>

      <div className='row_inf '>
        <div className='row_inf_content'>
          <div className='address'>
            Địa chỉ: Số 12, ngõ 12, Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà
            Nội
          </div>
          <div className='area'>Diện tích: 25m2</div>
          <div className='cost'>Giá: 2.5000.000 / tháng</div>
        </div>
      </div>
      <div
        className='row_content '
        dangerouslySetInnerHTML={{
          __html:
            props?.data?.content ||
            `<p><a href="https://ant.design/components/upload/?fbclid=IwAR0gNEGVlqr0ouY9TPqd0yzEDeIcl39I7k2wY2jo77sggt3f0BvOowC1q9Y#components-upload-demo-picture-style">Pictures with list style</a></p><p>If uploaded file is a picture, the thumbnail can be shown. IE8/9 do not support local thumbnail show. Please use thumbUrl instead.</p>`,
        }}
      ></div>
      <div className='row_status '>Đang thuê</div>

      <div className='row_edit '>
        <Button icon={<EditOutlined />} type='text'></Button>
      </div>
    </div>
  );
}

export default BodyItem;
