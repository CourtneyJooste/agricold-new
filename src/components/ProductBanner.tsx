import React, { FC } from 'react';
import { Container } from './index';
import styled from 'styled-components';

const Jumbotron = styled.div<{ bg?: string, padded?: boolean, bgPos?: string }>`
  background: ${p => p.bg ? `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${p.bg})` : p.theme.primary};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-top: ${p => p.padded && '60px'};
  padding-bottom: ${p => p.padded && '60px'};
  background-position: ${p => p.bgPos ? p.bgPos : 'center'};
`;

interface IProps {
  title?: string;
  subtitle?: string;
  background?: string;
  padded?: boolean;
  bgPos?: string;
  [x: string]: any;
}

export const ProductBanner: FC<IProps> = ({ title, subtitle, background, padded, bgPos }) => {
  return (
    <Jumbotron bg={background} padded={padded} bgPos={bgPos}>
      <Container centered inverse>
        <h1>{ title ?? 'Products'}</h1>
        <p>{subtitle ?? 'Please take a look at what we have to offer!'}</p>
      </Container>
    </Jumbotron>
  );
};

ProductBanner.defaultProps = {};

export default ProductBanner;
