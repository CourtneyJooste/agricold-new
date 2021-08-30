import React, { FC } from 'react';
import {
  CenteredContainer,
  CheckList,
  Container,
  Dark,
  Gallery,
  IconsContainer, IconText,
  ProductBanner,
  TitleSection
} from '../../components';
const Monitor1 = '/assets/mockups-stats-1.png';
const Monitor2 = '/assets/mockups-temp-1.jpg';
const Monitor3 = '/assets/installations-13.jpg';
const Splash = '/assets/cold-chain.jpg';
const ColdGuard = '/assets/coldguard.png';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';
import { LockOutlined, GlobalOutlined, SlidersOutlined, DesktopOutlined, HeatMapOutlined } from '@ant-design/icons';

interface IProps {
  [x: string]: any;
}

const Guard = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 0 auto 20px auto;
  padding: 5px;
`;

export const monitoring = [
  { img: Monitor1 },
  { img: Monitor2 },
  { img: Monitor3 },
];

const list = [
  'On your PC',
  'On a mobile device via our App',
  'On the Web from a PC anywhere in the world',
  'Get SMS or email alerts for alarm conditions',
  'Change temperature settings remotely',
];

const TemperatureMonitoring: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Splash} title={'Temperature Monitoring & Control'} subtitle={'With COLD GUARD Remote Temperature Monitoring & Management System'} padded />
      <Container centered width={'1200px'}>
        <TitleSection>
          <Zoom><h1>About COLD GUARD</h1></Zoom>
          <Zoom><h3>Remote Temperature Monitoring & Management System</h3></Zoom>
        </TitleSection>
        <Zoom>
          <Guard src={ColdGuard} />
        </Zoom>
        <Zoom>
          <p>
            Monitor and maintain your system health remotely. Fully configurable and reliable.
          </p>
        </Zoom>
        <IconsContainer>
          <Zoom>
            <IconText>
              <SlidersOutlined />
              Electronic Temperature Control
            </IconText>
          </Zoom>
          <Zoom>
            <IconText>
              <HeatMapOutlined />
              Temperature Monitoring
            </IconText>
          </Zoom>
          <Zoom>
            <IconText>
              <DesktopOutlined />
              Logging and Alarm Functions
            </IconText>
          </Zoom>
          <Zoom>
            <IconText>
              <GlobalOutlined />
              24 Hour Response ability
            </IconText>
          </Zoom>
          <Zoom>
            <IconText>
              <LockOutlined />
              Protection of stock
            </IconText>
          </Zoom>
        </IconsContainer>
        <Zoom><h1>Installations</h1></Zoom>
        <Gallery items={monitoring} />
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <TitleSection>
            <Zoom><h1>With the Cold Guard system you can</h1></Zoom>
            <Zoom><h3>Remotely record and view cold store and freezer temperatures:</h3></Zoom>
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

TemperatureMonitoring.defaultProps = {};

export default TemperatureMonitoring;
