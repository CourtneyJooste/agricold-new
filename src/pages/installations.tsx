import React, { FC } from 'react';
import { CenteredContainer, CheckList, Container, Dark, Gallery, IconText, ProductBanner } from '../components';
const Installations1 = '/assets/installations.jpg';
const Installations2 = '/assets/installations-2.jpg';
const Installations3 = '/assets/installations-3.jpg';
const Installations4 = '/assets/installations-4.jpg';
const Installations5 = '/assets/installations-5.jpg';
const Installations6 = '/assets/installations-6.jpg';
const Installations7 = '/assets/installations-7.jpg';
const Installations8 = '/assets/installations-8.jpg';
const Installations9 = '/assets/installations-9.jpg';
const Installations10 = '/assets/installations-10.jpg';
const Installations11 = '/assets/installations-11.jpg';
const Installations12 = '/assets/installations-12.jpg';
const Installations13 = '/assets/installations-13.jpg';
const Installations14 = '/assets/installations-14.jpg';
const Installations15 = '/assets/installations-15.jpg';
const Installations16 = '/assets/installations-16.jpg';
const Installations17 = '/assets/installations-17.jpg';
const Installations18 = '/assets/installations-18.jpg';
const Installations19 = '/assets/installations-19.jpg';
const Installations20 = '/assets/installations-20.jpg';
const Installations21 = '/assets/installations-21.jpg';
const Installations22 = '/assets/installations-22.jpg';
const Installations23 = '/assets/installations-23.jpg';
const Installations24 = '/assets/installations-24.jpg';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';
import { EnvironmentOutlined as Pin } from '@ant-design/icons';

const List = styled.div`
  text-align: left;
  padding: 15px 0 15px 0;
`;

const Desc = styled.p`
  margin-top: 25px; 
`;

interface IProps {
  [x: string]: any;
}

export const installations = [
  { img: Installations1 },
  { img: Installations2 },
  { img: Installations3 },
  { img: Installations4 },
  { img: Installations5 },
  { img: Installations6 },
  { img: Installations7 },
  { img: Installations8 },
  { img: Installations9 },
  { img: Installations10 },
  { img: Installations11 },
  { img: Installations12 },
  { img: Installations13 },
  { img: Installations14 },
  { img: Installations15 },
  { img: Installations16 },
  { img: Installations17 },
  { img: Installations18 },
  { img: Installations19 },
  { img: Installations20 },
  { img: Installations21 },
  { img: Installations22 },
  { img: Installations23 },
  { img: Installations24 },
];

const list = [
  'AGRONA – Tema, Ghana – Mango Processing',
  'ALDES – Luanda, Angola – Distribution Facility',
  'AZITU – Western Cape, South Africa – Tissue Culture Lab',
  'EUROBERRY – Western Cape, South Africa - Berries',
  'MOZBIFE – Chimoio, Mozambique – Abattior.',
  'OBTALA – Morogoro, Tanzania – Melons.',
  'VANDUZI – Chimoio, Mozambique - Horticulture',
  'ZETLER BERRIES – Western Cape, South Africa – Strawberries',
  'FRESH TO GO – Gauteng, South Africa – Perishables DC',
  'PICK & PAY ONLINE – Gauteng, South Africa – DC',
  'ARGOSY – Marondera, Zimbabwe – Horticulture',
  'FORRESTER ESTATES – Mvurwi, Zimbabwe – Blueberries',
  'INAMO AGRI – Darwindale, Zimbabwe – Horticulture & Blueberries',
  'HYBRID/ COUNTRY CHOICE – Zambia – Chicken Processing',
  'COOL BANANAS – Ndola, Zambia – Bananas',
  'YORK FARMS – Lusaka, Zambia – Horticulture',
  'ROLLEX – Zimbawe, South Africa, Namibia – Perishables DC',
  'MITCHELL & MITCHELL – Marondera, Zimbabwe – Horticulture',
  'KONDOZI – Odzi, Zimbabwe – Horticulture.',
  'OAK VALLEY – Western Cape, South Africa – Floriculture',
  'RITE FOODS – Lagos, Nigeria – Baking & Food Processing',
  'SILVERLANDS – Iringa, Tanzania – Poultry',
  'SHOPRITE – Zambia – Supermarkets',
  'FOOD LOVERS MARKET - Zambia, Zimbabwe – Supermarkets',
  'QUAY MARINE - Western Cape, South Africa - Fish',
];

export const Installations: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Installations20} title={'Installations'} subtitle={'Agricold & Coldex have worked in over 19 African Countries over the past 25 years'} padded />
      <Container centered width={'1200px'}>
        <Zoom><h1>Gallery</h1></Zoom>
        <Gallery items={installations} />
        <Desc>Agricold &amp; Coldex have worked in over 19 African Countries over the past 25 years.</Desc>
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <Zoom><h1>A snapshot of a few of our installations:</h1></Zoom>
          <List>
            {list.map((l: string, i: number) =>
              <Zoom key={i}><IconText><Pin />{l}</IconText></Zoom>)}
          </List>
        </CenteredContainer>
      </Dark>
    </>
  );
};

Installations.defaultProps = {};

export default Installations;
