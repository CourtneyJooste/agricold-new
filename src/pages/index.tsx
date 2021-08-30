import React, { FC, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
const SplashBg = '/assets/berries.jpg';
const Logo = '/assets/logo-dark.png';
const One = '/assets/installations-10.jpg';
const Two = '/assets/installations-13.jpg';
const Three = '/assets/installations-2.jpg';
const Four = '/assets/installations-17.jpg';
const Five = '/assets/installations-21.jpg';
const Six = '/assets/installations-19.jpg';
const Seven = '/assets/installations-7.jpg';
const Eight = '/assets/installations-24.jpg';
const Mango = '/assets/mango.jpg';
const Fish = '/assets/fish.jpg';
const Banana = '/assets/banana.jpg';
const Orange = '/assets/orange.jpg';
const Iced = '/assets/icecube.jpg';
const Packhouse = '/assets/packhouses-cropped.jpg';
const Coldroom = '/assets/coldrooms-cropped.jpg';
const Blastcooler = '/assets/blastcoolers-cropped.jpg';
const Humidity = '/assets/humidity-1.jpg';
const Monitoring = '/assets/mockups-stats-2.jpg';
const Products = '/assets/coldrooms-7.jpg';
import { DownOutlined } from '@ant-design/icons';
import { Gallery, Slides, Container, MainLogo, Background, CheckList, Dark } from '../components';
import { Tooltip } from 'antd';
import { Row } from 'antd';
import Product from '../components/Product';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';

const Splash = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
`

const SplashBack = styled.div`
  background: url(${SplashBg}); 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  /* Add the blur effect */
  filter: blur(3px);
  -webkit-filter: blur(3px);

  /* Full height */
  height: 100%;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
`;

const Subtitle = styled.div`
  font-size: 24px;
  color: ${p => p.theme.primary};
  padding: 15px 5px 5px 5px;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const GoDown = styled.div`
  padding: 10px;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  svg {
    color: white;
    font-size: 40px;
    transition: all .2s ease-in-out;
  }
  &:hover {
    svg {
      transform: scale(1.1);
    }  
  }
`;

const SplashContent = styled.div`
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(255,255,255, 0.5); /* White w/opacity/see-through */
  color: white;
  font-weight: bold;
  //border: 3px solid #f1f1f1;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 96%;
  max-width: 600px;
  padding: 50px 20px 50px 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
`;

const CContainer = styled(Container)`
  align-items: center;
`;

const SolutionsContainer = styled.div`
  // background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${Iced});
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: cover;
  // padding-top: 60px;
  // padding-bottom: 120px;
  background: white;
`;

const gallery = [
  { img: Mango },
  { img: Fish },
  { img: Banana }
]

interface IProps {
  [x: string]: any;
}

const slides: string[] = [
  One,
  Two,
  Three,
  Four
];

const slides2: string[] = [
  Five,
  Six,
  Seven,
  Eight
];

const Index: FC<IProps> = ({ }) => {
  const history = useRouter();

  const handleGoDown = useCallback(() => {
    const el = document.getElementById('welcome');
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleProduct = useCallback((path?: string) => (e?: any) => {
    if (path) history.push(`/products/${path}`);
  }, [history])

  return (
    <>
      <Splash>
        <SplashBack />
        <SplashContent>
          <Image src={Logo} />
          <Subtitle>Post Harvest Cooling Systems</Subtitle>
        </SplashContent>
        <Tooltip title={'Explore'}>
          <GoDown onClick={handleGoDown}>
            <DownOutlined />
          </GoDown>
        </Tooltip>
      </Splash>
      <Container centered id={'welcome'}>
        <Zoom>
          <h1>Welcome to <MainLogo src={Logo} /></h1>
        </Zoom>
        <Zoom>
          <p>
            Agricold is an industry leader in the design, supply and installation of refrigeration
            systems and climate control products.
          </p>
        </Zoom>
        <Zoom>
          <p>
            Agricold has a 25 year track record throughout Africa in cold chain/ cold storage
            solutions for agricultural, floricultural, horticultural, fishing, meat, baking, dairy and
            other perishable products.
          </p>
        </Zoom>
      </Container>
      <Fade><Slides images={slides} /></Fade>
      <SolutionsContainer>
        <Container centered style={{ paddingBottom: '0' }}>
          <Zoom><h1>Solution Driven</h1></Zoom>
          <Zoom>
            <p>
              Our products and solutions are complete - from post harvest through to processing,
              storage, distribution and shop floor retail. Farm to Fork.
            </p>
          </Zoom>
          <Zoom>
            <p>
              Our refrigeration systems are quality built and specifically engineered to the
              temperature and humidity requirements of the product and application.
            </p>
          </Zoom>
          <Fade><img src={Orange} style={{ width: '100%', height: 'auto' }}/></Fade>
        </Container>
      </SolutionsContainer>
      {/*<Container width={'1200px'}>*/}
      {/*  <Gallery items={gallery} />*/}
      {/*</Container>*/}
      <Dark>
        <Container inverse centered>
          <Zoom><h1>Locations</h1></Zoom>
          <div className="visme_d" data-url="dmd4nx1e-where-we-have-worked" data-w="800" data-h="612"
               data-domain="my" />
        </Container>
      </Dark>
      <Container centered width={'1200px'}>
        <Zoom><h1>Our Products</h1></Zoom>
        <Row gutter={[8, 8]}>
          <Product onClick={handleProduct('cold-rooms')} image={Coldroom} title={'Cold Rooms & Freezer Rooms'} desc={'Horticultural, fruit, floricultural, meat and medical cold rooms. And much much more!'} reveal />
          <Product onClick={handleProduct('blast-coolers')} image={Blastcooler} title={'Blast Coolers & Blast Freezers'} desc={'Chilly Willy portable blast coolers. Plenum wall blast coolers. Pre and post coolers.'} reveal />
          <Product onClick={handleProduct('high-humidity-coolers')} image={Humidity} title={'High Humidity & Misting Systems'} desc={'High humidity cooling systems for horticultural, floricultural and fruit applications.'} reveal />
          <Product onClick={handleProduct('temperature-monitoring')} image={Monitoring} title={'Temperature Monitoring & Control'} desc={'Cold Guard Remote temperature monitoring & management system.'} reveal />
          <Product onClick={handleProduct('pack-houses')} image={Packhouse} title={'Pack Houses & Process Areas'} desc={'Post harvest cooling technology.'} reveal />
          <Product onClick={handleProduct('all-products')} image={Products} title={'More Products...'} desc={'Supermarket refrigeration systems, abattoirs, water chillers, growing rooms, mortuary cabinets, solar refrigeration systems and more.'} reveal />
        </Row>
      </Container>
      <Fade><Slides images={slides2} /></Fade>
      <CContainer>
        <Zoom>
          <h1>Why <MainLogo src={Logo} />?</h1>
        </Zoom>
        <Fade>
          <CheckList>
            <li>
              Personal service, back up and attention to detail
            </li>
            <li>
              Purpose built, quality and long lasting equipment
            </li>
            <li>
              Reliable Refrigeration systems made for African conditions
            </li>
            <li>
              Our focus is extending the shelf life and enhancing the value of your product
            </li>
          </CheckList>
        </Fade>
      </CContainer>
    </>
  );
};

Index.defaultProps = {};

export default Index;
