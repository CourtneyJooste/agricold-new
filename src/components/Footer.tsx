import React, { FC } from 'react';
import { Space, Layout } from 'antd';
import styled from 'styled-components';
import { LinkedinOutlined, FacebookOutlined, MailOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

const A = styled.a`
  color: ${p => p.theme.primary};
  font-size: 24px;
`;

const Copyright = styled.div`
  padding: 10px;
`;

interface IProps {
  [x: string]: any;
}

export const Footer: FC<IProps> = ({}) => {
  return (
    <AntFooter style={{ textAlign: 'center', background: '#dde0e4' }}>
      <Space>
        <A href={'https://zm.linkedin.com/in/marcus-jooste-93810927'} target={'_blank'}><LinkedinOutlined /></A>
        <A href={'https://www.facebook.com/agricoldzim'} target={'_blank'}><FacebookOutlined /></A>
        <A href={'mailto:marcus@coldex.co.za'}><MailOutlined /></A>
      </Space>
      <Copyright>Agricold ©2021</Copyright>
    </AntFooter>
  );
};

Footer.defaultProps = {};

export default Footer;
