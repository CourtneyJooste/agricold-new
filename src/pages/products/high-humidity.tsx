import React, { FC } from 'react';
import {
  CenteredContainer,
  CheckList,
  Container,
  Dark,
  Gallery,
  IconsContainer,
  IconItem,
  ProductBanner
} from '../../components';
const Humidity1 = '/assets/humidity-1.jpg';
const Humidity2 = '/assets/humidity-2.jpg';
const Humidity3 = '/assets/humidity-3.jpg';
const Splash = '/assets/cold-chain.jpg';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';
import { StockOutlined, FallOutlined, SlidersOutlined, AuditOutlined } from '@ant-design/icons';

interface IProps {
  [x: string]: any;
}

export const humidity = [
  { img: Humidity1 },
  { img: Humidity2 },
  { img: Humidity3 },
];

const list = [
  'Prevention of dehydration of produce',
  'Rehydration of warm and wilted produce',
  'Prevention of weight loss',
  'Massively prolonged shelf life of produce',
];

const HighHumidity: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Splash} title={'High Humidity & Misting Systems'} subtitle={'High humidity produce coolers and high pressure misting systems'} padded />
      <Container centered width={'1200px'}>
        <Zoom><h1>About</h1></Zoom>
        <Zoom><h3 style={{ marginBottom: '30px'}}>High humidity produce coolers and high pressure misting systems</h3></Zoom>
        <Zoom>
          <p>Our high humidity coolers are suitable for horticultural, floricultural and fruit applications.
          </p>
        </Zoom>
        <Zoom>
          <p>
            The air handling units provide totally saturated air without
            loose moisture droplets.
          </p>
        </Zoom>
        <IconsContainer>
          <IconItem icon={StockOutlined} text={'High air flow with filtered return air'} />
          <IconItem icon={FallOutlined} text={'Blast cooling and pre-cooling ability'} />
          <IconItem icon={SlidersOutlined} text={'Accurate temperature and humidity control'} />
          <IconItem icon={AuditOutlined} text={'Units are built with food safe materials to BRC standards'} />
        </IconsContainer>
        <Zoom><h1>Installations</h1></Zoom>
        <Gallery items={humidity} />
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <Zoom><h1>Benefits of High Humidity Cooling include</h1></Zoom>
          <Zoom>
            <CheckList style={{ textAlign: 'left' }}>
              {list.map((l: string, i: number) => <li key={i}>{l}</li>)}
            </CheckList>
          </Zoom>
        </CenteredContainer>
      </Dark>
    </>
  );
};

HighHumidity.defaultProps = {};

export default HighHumidity;
