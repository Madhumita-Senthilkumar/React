import React from 'react'
import { useState } from 'react';
import { Col, Card, Image, Checkbox } from 'antd';
import { Badge, Space, Switch } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './App.css'
// let count = 0;
// var change = false;
// const onChange = (e) => {
//   if (e.target.checked) {
//     count++;
//     change = true;
//     console.log(change)
//   } else {
//     change = false;
//     count--;
//   }
//   console.log(count);
// };
// const Change = (e) => {
//   if (change) {

//   }
// }

export default function ColComponent({ imageUrl,cardKey,onClick }) {
  const [showBadge, setShow] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
// var count=0;
  const onChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const onCardClick = () => {
    setIsChecked(!isChecked);
    // if(!isChecked)
    // {console.log(count--)}
    // else 
    // {
    //   console.log(count++)
    // }

    // const onCardClick = () => {
    //   setIsChecked(!isChecked);
    //   if(!isChecked){
    //   console.log("key:",cardKey);
    //   }
    //   else{
    //     console.log("key ",cardKey,"is unchecked!")
    //   }
    // };
    onClick(cardKey); 
  };

  return (
    <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
      <Card
        className='card'
        hoverable
        onClick={onCardClick}
        style={{
          width: 300,
          marginTop: 16,
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <div className='checkbox'>
        <Checkbox checked={isChecked}></Checkbox>
        </div>

        <Space>
          <div className="badge-container">
            <Badge
              count={showBadge ? "Badge" : 0}
              showZero
              color="#faad14"
              style={{
                borderRadius: 0,
                borderBottomLeftRadius: '10px',
              }}
            />
          </div>
        </Space>
        <Image
          className='img'
          preview={false}
          width={200}
          height={100}
          src={imageUrl}
        />
        <div className='card_footer'>
          <div className='footer_left'>
            <SettingOutlined className="setting" key="setting" />
            <EditOutlined className="edit" key="edit" /></div>
          <div className='footer_right'>
            <EllipsisOutlined className="ellipse" key="ellipsis" /></div>
        </div>
      </Card>
    </Col>
  );
}
