import React, { FC } from 'react';
import {
  CenteredContainer,
  CheckList,
  Container,
  Dark,
  Gallery,
  IconItem,
  IconsContainer,
  ProductBanner
} from '../../components';
const Blastcooler1 = '/assets/blastcoolers.jpg';
const Blastcooler2 = '/assets/blastcoolers-2.jpg';
const Blastcooler3 = '/assets/blastcoolers-3.jpg';
const Blastcooler4 = '/assets/blastcoolers-4.jpg';
const Blastcooler5 = '/assets/blastcoolers-5.jpg';
const Blastcooler6 = '/assets/blastcoolers-6.jpg';
const Blastcooler7 = '/assets/blastcoolers-7.jpg';
const Blastcooler8 = '/assets/blastcoolers-8.jpg';
const Blastcooler9 = '/assets/blastcoolers-9.jpg';
const Blastcooler10 = '/assets/blastcoolers-10.jpg';
const Blastcooler11 = '/assets/blastcoolers-11.jpg';
const Blastcooler12 = '/assets/blastcoolers-12.jpg';
const Graph = '/assets/graph.png';
const Splash = '/assets/cold-chain.jpg';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import {
  InsertRowBelowOutlined,
  PartitionOutlined,
  DashboardOutlined,
  RotateRightOutlined,
  GatewayOutlined,
  GroupOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { altText } from '../../helpers';

const GraphContainer = styled.div`
  padding: 40px 10px 15px 10px;
  background-color: white;
  text-align: center;
  img {
    max-width: 600px;
    width: 100%;
    height: auto;
  }
`;

interface IProps {
  [x: string]: any;
}

export const blastCoolers = [
  { img: Blastcooler1 },
  { img: Blastcooler2 },
  { img: Blastcooler3 },
  { img: Blastcooler4 },
  { img: Blastcooler5 },
  { img: Blastcooler6 },
  { img: Blastcooler7 },
  { img: Blastcooler8 },
  { img: Blastcooler9 },
  { img: Blastcooler10 },
  { img: Blastcooler11 },
  { img: Blastcooler12 },
];

const list = [
  'Rapid removal of field heat from product',
  'Consistent temperature through product',
  'Flexibility for dispatch of product without having to wait for product to dwell cool',
  'Increased shelf life',
];

export const BlastCoolers: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Splash} title={'Blast Coolers & Blast Freezers'} padded bgPos={'bottom'} />
      <Container centered width={'1200px'}>
        <Zoom><h1>Blast Coolers & Blast Freezers</h1></Zoom>
        <Zoom>
          <p>Rapid coolers and freezers purpose built to suit your product and application.
          </p>
        </Zoom>
        <IconsContainer>
          {/*<Zoom><h3>Key benefits:</h3></Zoom>*/}
          <IconItem icon={PartitionOutlined} text={'Plenum wall Pre & Post coolers'} />
          <IconItem icon={InsertRowBelowOutlined} text={'Batch Coolers & freezers'} />
          <IconItem icon={RotateRightOutlined} text={'Chilly Willy pre-coolers'} />
          <IconItem icon={DashboardOutlined} text={'Temperature indicators with product spikes and indicator lamps'} />
          <IconItem icon={GroupOutlined} text={'Food safe insulated paneling'} />
          <IconItem icon={GatewayOutlined} text={'PVC cushions & shrouds'} />
        </IconsContainer>
      </Container>
      <GraphContainer>
        <Zoom><h1>The difference that blast cooling makes</h1></Zoom>
        <Zoom><img src={Graph} alt={altText}/></Zoom>
      </GraphContainer>
      <Container centered width={'1200px'}>
        <Zoom><h1>Installations</h1></Zoom>
        <Gallery items={blastCoolers} />
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <Zoom><h1>Benefits of Blast Cooling include</h1></Zoom>
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

BlastCoolers.defaultProps = {};

export default BlastCoolers;
