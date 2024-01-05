import React, { useState } from 'react';
import { Button, Modal, Row, Card, Flex, Layout } from 'antd';
import './ColComponent'
import './App.css'
import ColComponent from './ColComponent';
const { Header, Footer, Sider, Content } = Layout;

const { Meta } = Card;
const style = {
  padding: '8px 0',
};
const headerStyle = {
  background: 'white',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  background: 'white',
  padding: '10px',
  overflowY: 'auto',
  maxHeight: '70vh',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  background: 'white',
};
const footerStyle = {
  textAlign: 'center',
  background: 'white',
};
const layoutStyle = {
  borderRadius: 8,
  margin: '20px',
  background: 'white',
};
const cards = [
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 1 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 2 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 3 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 4 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 5 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 6 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 7 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 8 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 9 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 10 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 11 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 12 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 13 },
  { imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', key: 14 },
]
const App = () => {
  const [open, setOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const handleCardClick = (key) => {
    const index = selectedKeys.indexOf(key);
    if (index === -1) {
      setSelectedKeys([...selectedKeys, key]); 
    } else {
      const updatedKeys = [...selectedKeys];
      updatedKeys.splice(index, 1);
      setSelectedKeys(updatedKeys);
    }
  };

  return (
    <div className='parent'>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={2000}
      >
        <Flex wrap='wrap'>
          <Layout style={layoutStyle}>
            <Sider width="15%">
              <div>
                Selected Keys:
                {selectedKeys.map((key) => (
                  <div key={key}>Key is:{key}</div>
                ))}
              </div>
            </Sider>
            <Layout>
              <Content>
                <Row gutter={[16, 24]}>
                  {cards.map((card) => (
                    <ColComponent
                      key={card.key}
                      imageUrl={card.imageUrl}
                      cardKey={card.key}
                      onClick={() => handleCardClick(card.key)}
                    />
                  ))}
                </Row>
              </Content>
            </Layout>
          </Layout>
        </Flex>
      </Modal>
    </div>
  );
};

export default App;
