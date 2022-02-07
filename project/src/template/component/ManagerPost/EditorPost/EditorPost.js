import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Select } from 'antd';
import './EditorPost.scss';
function EditorPost(props) {
  const { Option } = Select;

  return (
    <div className='editor-post'>
      <div className='editor-post__room'>
        <h3>Chọn phòng</h3>

        <Select
          showSearch
          style={{ width: 200 }}
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
      </div>
      <h3>Chỉnh sửa nội dung bài đăng</h3>
      <CKEditor
        editor={ClassicEditor}
        data='<p>Nội dung bài đăng...</p>'
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {}}
        onBlur={(event, editor) => {
          props?.getContent(editor.getData());
        }}
        onFocus={(event, editor) => {}}
      />
    </div>
  );
}

export default EditorPost;
