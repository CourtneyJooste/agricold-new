import React, { FC } from 'react';
import {
  CenteredContainer,
  CheckList,
  Container,
  Gallery,
  IconsContainer,
  IconText,
  ProductBanner,
  IconItem,
  Dark,
  TitleSection,
} from '../../components';
const PackHouses1 = '/assets/packhouses-1.jpg';
const PackHouses2 = '/assets/packhouses-2.jpg';
const PackHouses3 = '/assets/packhouses-splash.jpg';
const PackHouses4 = '/assets/packhouses-4.jpg';
const PackHouses5 = '/assets/packhouses-5.jpg';
const PackHouses6 = '/assets/packhouses-6.jpg';
const PackHouses7 = '/assets/packhouses-7.jpg';
const PackHouses8 = '/assets/packhouses-8.jpg';
const PackHouses9 = '/assets/packhouses-9.jpg';
const PackHouses10 = '/assets/packhouses-10.jpg';
const PackHouses11 = '/assets/packhouses-11.jpg';
const PackHouses12 = '/assets/packhouses-12.jpg';
const Splash = '/assets/cold-chain.jpg';
import Zoom from 'react-reveal/Zoom';
import { StockOutlined,
  SlidersOutlined,
  AuditOutlined,
  ThunderboltOutlined,
  DashboardOutlined,
  BuildOutlined,
} from '@ant-design/icons';

interface IProps {
  [x: string]: any;
}

export const packhouses = [
  { img: PackHouses1 },
  { img: PackHouses2 },
  { img: PackHouses3 },
  { img: PackHouses4 },
  { img: PackHouses5 },
  { img: PackHouses6 },
  { img: PackHouses7 },
  { img: PackHouses8 },
  { img: PackHouses9 },
  { img: PackHouses10 },
  { img: PackHouses11 },
  { img: PackHouses12 },
];

const list = [
  'Packhouse & processing areas – Design and layouts',
  'Horticultural pack houses and process areas',
  'Blueberry and Strawberry packhouses',
  'Floricultural pack houses',
  'Fruit pack houses',
  'Fish processing factories',
  'Abbatiors',
  'Chicken processing facilies',
  'Freight forwarding facilities',
  'Produce handling facilities',
  'Insulated pamel structures',
  'Shed structures',
  'Agri processing & post harvest technology',
  'Hot water generation through waste heat',
  'Energy saving & efficient cooling systems'
];

const PackHouses: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Splash} title={'Pack Houses & Process areas'} subtitle={'Packhouse designs and installations. Post harvest cooling technology.'} padded />
      <Container centered width={'1200px'}>
        <Zoom><h1>Post Harvest Cooling Technology</h1></Zoom>
        <Zoom>
          <p>Since 1995 we have been designing and installing quality refrigeration systems
            and post harvest cooling solutions throughout the African continent.
          </p>
        </Zoom>
        <Zoom>
          <p>
            Whether you are a grower, packer, distributor or retailer; Agricold has a
            solution to fit your needs, maintain your quality and extend your shelf life.
          </p>
        </Zoom>
        <Zoom>
          <p>
            Purpose built, reliable, long lasting value for money.
          </p>
        </Zoom>
        <Zoom>
          <p>
            Made in Africa for African conditions.
          </p>
        </Zoom>
        <IconsContainer>
          <IconItem icon={StockOutlined} text={'High air flow with filtered return air'} />
          <IconItem icon={ThunderboltOutlined} text={'Energy efficient cooling systems'} />
          <IconItem icon={BuildOutlined} text={'Product specific designs'} />
          <IconItem icon={SlidersOutlined} text={'Accurate temperature and humidity control'} />
          <IconItem icon={DashboardOutlined} text={'Temperature monitoring & remote management systems'} />
          <IconItem icon={AuditOutlined} text={'BRC, PPEBC & GLOBALGAP Compliant'} />
        </IconsContainer>
        <Zoom><h1>Installations</h1></Zoom>
        <Gallery items={packhouses} />
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <TitleSection>
            <Zoom><h1>Applications</h1></Zoom>
            <Zoom><h3>Design, supply, installation and project management of turn key facilities for the following applications:</h3></Zoom>
          </TitleSection>
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

PackHouses.defaultProps = {};

export default PackHouses;
