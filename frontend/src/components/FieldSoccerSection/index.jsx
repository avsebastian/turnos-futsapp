import React from 'react'
import { Row, Col, Card, Button} from 'antd'
import { FieldSoccerContainer } from './FieldSoccerSectionElement'
const { Meta } = Card;

import './FieldSoccerSection.css'

import CanchaUno from '../../assets/cancha-uno.jpg'
import CanchaDos from '../../assets/cancha-dos.jpg'
import CanchaTres from '../../assets/cancha-tres.jpg'
import CanchaCuatro from '../../assets/cancha-cuatro.jpg'

const fieldSoccer = [
    {
      key: '1',
      img: `${CanchaUno}`,
      title: 'Armando Maradona',
      content: 'Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences.',
    },
    {
      key: '2',
      img: `${CanchaDos}`,
      title: 'Alberto Kempes',
      content: 'Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look.',
    },
    {
      key: '3',
      img: `${CanchaTres}`,
      title: 'Roman Riquelme',
      content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
    },
    {
        key: '4',
        img: `${CanchaCuatro}`,
        title: 'Lionel Messi',
        content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
    }
  ]

const FieldSoccerSection = () => {
  return (
      <FieldSoccerContainer id="canchas">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Nuestras canchas</h2>
          </div>
          <Row gutter={[36, 16]}>

          {fieldSoccer.map((item)=>{
            return(
              <Col xs={{ span: 24 }}
                  sm={{ span: 12 }} 
                  md={{ span: 8 }} 
                  key={item.key}>
                <Card
                  hoverable
                  cover={ <img alt={item.title} 
                              src={item.img}
                              width={500}
                              height={250} />
                        }
                >
                  <Meta title={item.title} />
                </Card>
              </Col>
            )
            
          })}
            

          </Row>
        </div>
      </FieldSoccerContainer>
  )
}

export default FieldSoccerSection
