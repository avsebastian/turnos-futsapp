import React from 'react'
import { Row, Col, Card, Button} from 'antd'

import CanchaUno from '../../assets/cancha-uno.jpg'
import CanchaDos from '../../assets/cancha-dos.jpg'
import CanchaTres from '../../assets/cancha-tres.jpg'
import CanchaCuatro from '../../assets/cancha-cuatro.jpg'

const fieldSoccer = [
    {
      key: '1',
      img: CanchaUno,
      title: 'High Performance',
      content: 'Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences.',
    },
    {
      key: '2',
      img: CanchaDos,
      title: 'Flat Design',
      content: 'Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look.',
    },
    {
      key: '3',
      img: CanchaTres,
      title: 'Simplified Workflow',
      content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
    },
    {
        key: '4',
        img: CanchaCuatro,
        title: 'Simplified Workflow',
        content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
    }
  ]

const FieldSoccerSection = () => {
  return (
    <div>
      <Row className='title'>
        <div className="titleHolder">
            <h2>Comple Deportivo</h2>
        </div>
      </Row>
      <Row>
        <Col span={12}>
            <div className="contentHolder">
            <p>Technology has revolutionized the way we live and work, providing us with new and innovative ways to solve problems, improve efficiency, and make our lives easier. From artificial intelligence to cloud computing, the rapid advancements in technology are changing the way we interact with the world around us. As we continue to push the boundaries of what is possible, we can expect new and exciting developments that will further shape the future of our world. Whether it's in healthcare, education, or any other industry, technology has the power to make a positive impact and create a better future for all of us. </p>
            </div>
        </Col>
        <Col span={12}>
        <Row gutter={[16, 16]}>   
          {fieldSoccer.map(item => {
            return (
                <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src={`${item.img}`}
                  />
                }
                actions={[
                  <Button key="setting"> Ver </Button> ,
                ]}
              />
            );
          })}
        </Row>
        </Col>
      </Row>
    </div>
  )
}

export default FieldSoccerSection
