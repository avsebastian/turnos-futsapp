import React, {useState} from 'react'
import { Row, Col, Card, Button, Drawer} from 'antd'
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

  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const showDrawer = (key) => {
    setOpen(true);
    setSelectedCard(key);
  };
  const onClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };

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
                  <Meta title={item.title} 
                        description={<Button type="primary" onClick={()=>showDrawer(item.key)}>
                      Detalle
                    </Button>} />
                    {selectedCard == item.key && (
                      <Drawer
                        title= {item.title}
                        placement="top"
                        closable={true}
                        onClose={ onClose }
                        open={open}
                        getContainer={false}
                      >
                        {item.content}
                      </Drawer>
                      )}
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
