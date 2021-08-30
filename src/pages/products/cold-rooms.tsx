import React, { FC } from 'react';
import {
  CenteredContainer,
  CheckList,
  Container,
  Dark,
  Gallery,
  IconsContainer,
  IconText,
  ProductBanner,
  IconItem,
} from '../../components';
const Cold1 = '/assets/coldrooms.jpg';
const Cold2 = '/assets/coldrooms-2.jpg';
const Cold3 = '/assets/coldrooms-3.jpg';
const Cold4 = '/assets/coldrooms-4.jpg';
const Cold5 = '/assets/coldrooms-5.jpg';
const Cold6 = '/assets/coldrooms-6.jpg';
const Cold7 = '/assets/coldrooms-7.jpg';
const Splash = '/assets/cold-chain.jpg';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import {
  DatabaseOutlined,
  DashboardOutlined,
  FileDoneOutlined,
  NodeIndexOutlined,
  ThunderboltOutlined,
  GroupOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

interface IProps {
  [x: string]: any;
}

export const coldRooms = [
  { img: Cold1 },
  { img: Cold2 },
  { img: Cold3 },
  { img: Cold4 },
  // { img: Cold5, title: 'Quality refrigeration equipment', desc: 'a' },
  { img: Cold6 },
  { img: Cold7 }
];

const list = [
  'Horticultural cold rooms',
  'Blueberry cold rooms',
  'Strawberry cold rooms',
  'Fruit cold rooms',
  'Floricultural cold rooms',
  'Citrus cold rooms',
  'Banana ripening cold rooms',
  'Meat cold rooms',
  'Chicken cold rooms',
  'Ice making freezer rooms',
  'Fish cold rooms and freezers',
  'Medical cold rooms',
  'General cold rooms and freezer rooms',
  'Insulated food-safe white wall panelling',
  'Precise temperature monitoring and control',
  'Quality refrigeration equipment',
];

export const ColdRooms: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Splash} title={'Cold Rooms & Freezer Rooms'} padded bgPos={'bottom'} />
      <Container centered width={'1200px'}>
        <Zoom><h1>Cold & Freezer Rooms</h1></Zoom>
        <Zoom>
          <p>From light commercial to heavy industrial, we have a wide variety of Cold store options.
          </p>
        </Zoom>
        <IconsContainer>
          {/*<Zoom><h3>Key benefits:</h3></Zoom>*/}
          <IconItem icon={DatabaseOutlined} text={'Freon Simplex or Multiplex Condensing units'} />
          <IconItem icon={FileDoneOutlined} text={'Quality & reliable compressors'} />
          <IconItem icon={NodeIndexOutlined} text={'Stainless steel evaporator coils'} />
          <IconItem icon={DashboardOutlined} text={'Accurate electronic temperature control – Cold Guard Ready'} />
          <IconItem icon={GroupOutlined} text={'Food safe insulated paneling'} />
          <IconItem icon={GlobalOutlined} text={'Ozone friendly refrigerant gasses'} />
          <IconItem icon={ThunderboltOutlined} text={'Energy efficient cooling systems'} />
        </IconsContainer>
        <Zoom><h1>Installations</h1></Zoom>
        <Gallery items={coldRooms} />
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <Zoom><h1>Our cold rooms & freezer rooms</h1></Zoom>
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

ColdRooms.defaultProps = {};

export default ColdRooms;
