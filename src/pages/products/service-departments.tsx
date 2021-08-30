import React, { FC } from 'react';
import { IconItem, CenteredContainer, CheckList, Container, Dark, Gallery, ProductBanner, TitleSection } from '../../components';
const Splash = '/assets/cold-chain.jpg';
const Van = '/assets/van.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { CarOutlined, FieldTimeOutlined, FileDoneOutlined } from '@ant-design/icons';
import { altText } from '../../helpers';

const Image = styled.img`
  width: 96%;
  max-width: 450px;
  height: auto;
  margin-top: 20px;
`;

const gridProps = { xxl: 8, xl: 8, lg: 8, md: 24, sm: 24 };

interface IProps {
  [x: string]: any;
}

const list = [
  'Qualified Technicians',
  'Well equipped workshops and tooling',
  'Back up spares for our own products',
  'Technical Support from Directors and Managers',
  'Central Call, Control and Administration Point',
  'Focused  Procurement  Personnel',
  'After hours Service',
  'Pro active Service and fault finding',
  'Compliance Assessments :  OSH/SABS/Energy and Environment',
  'Our promise and commitment to Value and Quality workmanship'
];

export const ServiceDepartments: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Splash} title={'Service Departments'} subtitle={'We are committed to providing quality and on-going support'} padded />
      <Container centered width={'1200px'}>
        <Zoom><h1>Our Service Department</h1></Zoom>
        <Zoom><p>Fast, reliable and professional service for your refrigeration equipment</p></Zoom>
        <Zoom><h3>Our dynamic team offers the following:</h3></Zoom>
        {/*<Fade>*/}
        {/*  <Collapser defaultActiveKey={['1']}>*/}
        {/*    <Panel header="Emergency call out" key="1">*/}
        {/*      <p>Central call, control and administration point 24hr technical support On site repairs Remote temperature monitoring and control systems.</p>*/}
        {/*    </Panel>*/}
        {/*    <Panel header="Preventative service and maintenance" key="2">*/}
        {/*      <p>Pro active service and fault finding Refrigeration equipment maintenance Insulated paneling maintenance Tailor made service programs.</p>*/}
        {/*    </Panel>*/}
        {/*    <Panel header="Facility and Cold Chain assessments" key="3">*/}
        {/*      <p>Cold chain and product flow analysis Compliance assessments: OSH/SABS Energy and Environment assessments.</p>*/}
        {/*    </Panel>*/}
        {/*  </Collapser>*/}
        {/*</Fade>*/}
        {/*<Fade>*/}
          <Row gutter={[16,30]} style={{ padding: '30px 0 30px 0' }}>
            <Col {...gridProps}>
              <IconItem icon={CarOutlined} text={'Emergency call out'} large>
                Central call, control and administration point 24hr technical support. On site repairs. Remote temperature monitoring and control systems.
              </IconItem>
            </Col>
            <Col {...gridProps}>
              <IconItem icon={FieldTimeOutlined} text={'Preventative service and maintenance'} large>
                Pro active service and fault finding. Refrigeration equipment maintenance. Insulated paneling maintenance. Tailor made service programs.
              </IconItem>
            </Col>
            <Col {...gridProps}>
              <IconItem icon={FileDoneOutlined} text={'Facility and Cold Chain assessments'} large>
                Cold chain and product flow analysis. Compliance assessments: OSH/SABS Energy and Environment assessments.
              </IconItem>
            </Col>
          </Row>
        {/*</Fade>*/}
        <Zoom>
          <Image src={Van} alt={altText}/>
        </Zoom>
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <TitleSection>
            {/*<Zoom><h1>Our Guarantee</h1></Zoom>*/}
            <Zoom><h3>All Coldex products are supported by our Service Department and Agents:</h3></Zoom>
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

ServiceDepartments.defaultProps = {};

export default ServiceDepartments;
