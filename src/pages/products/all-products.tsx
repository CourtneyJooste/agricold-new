import React, { FC, useCallback, useMemo, useState } from 'react';
import { CenteredContainer, CheckList, Container, Dark, Gallery, ProductBanner, TitleSection } from '../../components';
const Chain = '/assets/cold-chain.jpg';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import { coldRooms } from './cold-rooms';
import { blastCoolers } from './blast-coolers';
import { humidity } from './high-humidity';
import { packhouses } from './packhouses';
import { monitoring } from './temperature-monitoring';
import { Input, Tag as AntTag } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const TagsOuter = styled.div`
  padding: 30px 0 20px 0;
`;

const Tag = styled(AntTag)`
  margin: 5px;
  cursor: pointer;
`;

interface IProps {
  [x: string]: any;
}

interface ListItem {
  text: string;
  url?: string;
}

const list = [
  { text: 'cold rooms', url: '/products/cold-rooms'},
  { text: 'freezer rooms', url: '/products/cold-rooms'},
  { text: 'supermarket refrigeration systems', url: '/products/cold-rooms'},
  { text: 'abattoirs', url: '/products/cold-rooms'},
  { text: 'meat cold rooms', url: '/products/cold-rooms'},
  { text: 'chicken cold rooms', url: '/products/cold-rooms'},
  { text: 'blast freezers', url: '/products/blast-freezers'},
  { text: 'post harvest cooling systems', url: '/products/pack-houses'},
  { text: 'agri processing', url: '/products/pack-houses'},
  { text: 'vegetable processing', url: '/products/pack-houses'},
  { text: 'floriculture cold rooms', url: '/products/cold-rooms'},
  { text: 'blast coolers', url: '/products/blast-freezers'},
  { text: 'water chillers', url: '/products/pack-houses'},
  { text: 'temperature monitoring and control', url: '/products/temperature-monitoring'},
  { text: 'energy reduction', url: '/products/cold-rooms'},
  // { text: 'mushroom growing rooms', url: ''},
  { text: 'blueberry packhouses', url: '/products/pack-houses'},
  { text: 'blueberry refrigeration systems', url: '/products/cold-rooms'},
  { text: 'banana cold rooms', url: '/products/cold-rooms'},
  { text: 'banana and fruit ripening systems', url: '/products/high-humidity-coolers'},
  { text: 'high humidity systems', url: '/products/cold-rooms'},
  { text: 'growing rooms', url: '/products/pack-houses'},
  { text: 'packhouses', url: '/products/pack-houses'},
  { text: 'medical refrigeration equipment', url: '/products/cold-rooms'},
  { text: 'mortuary cabinets', url: '/products/cold-rooms'},
  { text: 'solar refrigeration systems', url: '/products/cold-rooms'},
];

const colours = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

const allProducts = [ ...coldRooms, ...blastCoolers, ...humidity, ...packhouses, ...monitoring ];

export const AllProducts: FC<IProps> = ({}) => {

  const [search, setSearch] = useState('');

  const history = useRouter();

  const maps = useMemo(() => {
    const _maps: any = {};
    let x = 0;
    list.forEach((l: ListItem) => {
      _maps[l.text] = colours[x++];
      if (x >= colours.length) x = 0;
    });
    return _maps;
  }, []);

  const filteredList = useMemo(() => search !== '' ? list.filter((l: ListItem) => l.text.toLowerCase().includes(search.toLowerCase())) : list, [search]);

  const getColour = useCallback((l: string) => maps[l], [maps]);

  const handleChange = useCallback((e: any) => setSearch(e.target.value), [setSearch]);

  const handleClick = useCallback((url?: string) => (e?: any) => {
    if (url && url !== '') history.push(url);
  }, [history]);

  const Tags = useMemo(() => filteredList.map((l: ListItem, i: number) => <Tag color={getColour(l.text)} onClick={handleClick(l.url)} key={i}><Fade>{l.text}</Fade></Tag>), [filteredList, getColour, handleClick]);

  return (
    <>
      <ProductBanner background={Chain} title={'All Products'} padded />
      <Container centered style={{ paddingBottom: '0px' }}>
        <TitleSection>
          <Zoom><h1>Applications</h1></Zoom>
          <Zoom><h3>We have experience with the following use-cases and more!</h3></Zoom>
        </TitleSection>
        <div>
          <Zoom><Input addonAfter={<SearchOutlined />} placeholder="Search for your application" onChange={handleChange}/></Zoom>
          <TagsOuter>
            {Tags}
          </TagsOuter>
        </div>
        <Zoom>
          <p>If your application is not in this list, please <a onClick={handleClick('/contact')}>contact us</a> and we will be happy to help!</p>
        </Zoom>
      </Container>
      <Container centered width={'1200px'}>
        <Zoom><h1>Installations</h1></Zoom>
        <Gallery items={allProducts} />
      </Container>
    </>
  );
};

AllProducts.defaultProps = {};

export default AllProducts;
