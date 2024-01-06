import React, { useState } from 'react';
import { InfoCircleOutlined, DownOutlined, CloseCircleFilled, CalendarOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Typography, DatePicker, Space, Select } from 'antd';

import './App.css'
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const App = () => {
  const { Text, Link, Title } = Typography;
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('large');
  const [placement, SetPlacement] = useState('bottomLeft');
  return (
    <div className='parent'>
      <Button type="primary"
        className='modal-btn'
        onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
      className='modal'
        title={
          <span className='header'>
            <Title level={5}>Conditions</Title>
            <InfoCircleOutlined style={{
              marginRight: '8px', paddingLeft: '4px', color: 'grey'
            }} />
          </span>}
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={800}
        style={{
          top: '10px',
        }}
      >
        <div className='header-subtext'>
          <Space >
            <Title level={5}>Add conditions for this automation to be triggered.</Title>
          </Space>
        </div>
        <Space direction="vertical">

          <span className='content-one'>
            {/* <CalendarOutlined /> */}
            <DatePicker
              className='date-picker'
              size={size}

              prefix={<CalendarOutlined />} placeholder={"Created at"}
              suffixIcon={<DownOutlined className='down-arrow' />} />

            <Select
              className='select-opt'
              labelInValue
              defaultValue={{
                value: 'date is today',
                label: 'date is today',
              }}
              style={{
                width: 200,
              }}
              options={[
                {
                  //edit
                  value: 'jack',
                  label: 'Jack (100)',
                },
                {
                  value: 'lucy',
                  label: 'Lucy (101)',
                },
              ]}
            />
            <CloseCircleFilled style={{ marginLeft: "10px", cursor: "pointer" }} />
          </span>
        </Space>
        <div className='header-subtext'>
          <Space >
            <Title level={5}>And</Title>
          </Space>
        </div>

        <Space
          direction="vertical"
        >
          <span className='content-two'>
            <Select
              size={size}
              className='creator-picker'
              placeholder='Creator'
              placement={placement}
              onChange={handleChange}
              style={{
                width: 250,
              }}
              options={[
                {
                  value: 'HangZhou',
                  label: 'HangZhou #310000',
                },
                {
                  value: 'NingBo',
                  label: 'NingBo #315000',
                },
                {
                  value: 'WenZhou',
                  label: 'WenZhou #325000',
                },
              ]}
            />
            <Select
              className='select-opt-two'
              labelInValue
              defaultValue={{
                value: '',
                label: 'is present',
              }}
              style={{
                width: 200,
              }}
              options={[
                {
                  value: 'jack',
                  label: 'Jack (100)',
                },
                {
                  value: 'lucy',
                  label: 'Lucy (101)',
                },
              ]}
            />
            <CloseCircleFilled style={{ marginLeft: "10px", cursor: "pointer" }} />
          </span>
          <div className='add-condition'>
            <Button type="text"
              className='text-button'
              onClick={() => setOpen(true)}>
              <PlusOutlined />
              Add more conditions to this group
            </Button>
          </div>
          <div className='add-condition-button'>
            <Button className="site-button-ghost-wrapper" id='btn-conditions'>
              <PlusOutlined />
              Add another group of conditions
            </Button>
          </div>
        </Space>
        <Space
          direction="vertical"
        >
          <span className='content-four'>
            <Select
              size={size}
              className='id-picker'
              placeholder='ID'
              placement={placement}
              onChange={handleChange}
              style={{
                width: 250,
              }}
              options={[
                {
                  value: 'HangZhou',
                  label: 'HangZhou #310000',
                },
                {
                  value: 'NingBo',
                  label: 'NingBo #315000',
                },
                {
                  value: 'WenZhou',
                  label: 'WenZhou #325000',
                },
              ]}
            />
            <Select
              className='select-opt-three'
              labelInValue
              defaultValue={{
                value: 'date is today',
                label: 'date is today',
              }}
              style={{
                width: 200,
              }}
              options={[
                {
                  value: 'jack',
                  label: 'Jack (100)',
                },
                {
                  value: 'lucy',
                  label: 'Lucy (101)',
                },
              ]}
            />
            <CloseCircleFilled style={{ marginLeft: "10px", cursor: "pointer" }} />
          </span>
          <div className='add-condition'>
            <Button type="text"
              className='text-button'
              onClick={() => setOpen(true)}>
              <PlusOutlined />
              Add more conditions to this group
            </Button>
          </div>
          <div className='add-condition-button'>
            <Button className="site-button-ghost-wrapper" id='btn-conditions'>
              <PlusOutlined />
              Add another group of conditions
            </Button>
          </div>
        </Space>
        <Space
          direction="vertical"
        >
          <span className='content-five'>
            <Select
              size={size}
              className='title-picker'
              placeholder='Title'
              placement={placement}
              onChange={handleChange}
              style={{
                width: 250,
              }}
              options={[
                {
                  value: 'HangZhou',
                  label: 'HangZhou #310000',
                },
                {
                  value: 'NingBo',
                  label: 'NingBo #315000',
                },
                {
                  value: 'WenZhou',
                  label: 'WenZhou #325000',
                },
              ]}
            />
            <Select
              className='select-opt-four'
              labelInValue
              defaultValue={{
                value: 'date is today',
                label: 'date is today',
              }}
              style={{
                width: 200,
              }}
              options={[
                {
                  value: 'jack',
                  label: 'Jack (100)',
                },
                {
                  value: 'lucy',
                  label: 'Lucy (101)',
                },
              ]}
            />
            <CloseCircleFilled style={{ marginLeft: "10px", cursor: "pointer" }} />
          </span>
          <div className='add-condition'>
            <Button type="text"
              className='text-button'
              onClick={() => setOpen(true)}>
              <PlusOutlined />
              Add more conditions to this group
            </Button>
          </div>
          <div className='add-condition-button'>
            <Button className="site-button-ghost-wrapper" id='btn-conditions'>
              <PlusOutlined />
              Add another group of conditions
            </Button>
          </div>
        </Space>
        <Space direction="vertical">

          <span className='content-six'>
            {/* <CalendarOutlined /> */}
            <DatePicker
              className='date-picker'
              size={size}

              prefix={<CalendarOutlined />} placeholder="Due date"
              suffixIcon={<DownOutlined className='down-arrow' />} />

            <Select
              className='select-opt-five'
              labelInValue
              defaultValue={{
                value: 'date is today',
                label: 'date in last week',
              }}
              style={{
                width: 200,
              }}
              options={[
                {
                  value: 'jack',
                  label: 'Jack (100)',
                },
                {
                  value: 'lucy',
                  label: 'Lucy (101)',
                },
              ]}
            />
            <CloseCircleFilled style={{ marginLeft: "10px", cursor: "pointer" }} />
          </span>
        </Space>
        <div className='header-subtext'>
          <Space >
            <Title level={5}>And</Title>
          </Space>
        </div>
        <div className='date-content'>
          <Space direction="vertical">

            <span className='content-seven'>
              {/* <CalendarOutlined /> */}
              <DatePicker
                className='date-picker'
                size={size}

                prefix={<CalendarOutlined />} placeholder="Finished at"
                suffixIcon={<DownOutlined className='down-arrow' />} />

              <Select
                className='select-opt-six'
                labelInValue
                defaultValue={{
                  value: 'date is today',
                  label: 'date is today',
                }}
                style={{
                  width: 200,
                }}
                options={[
                  {
                    value: 'jack',
                    label: 'Jack (100)',
                  },
                  {
                    value: 'lucy',
                    label: 'Lucy (101)',
                  },
                ]}
              />
              <CloseCircleFilled style={{ marginLeft: "10px", cursor: "pointer" }} />
            </span>
          </Space>
        </div>
      </Modal>
    </div>
  );
};
export default App;

