// import '../styles/globals.css'
import 'react-image-lightbox/style.css';
import type { AppProps } from 'next/app'
import reportWebVitals from '../components/reportWebVitals';
import { BackTop, Button, Layout, Tooltip } from 'antd';
import styled, { ThemeProvider } from 'styled-components';
import { Navbar, Footer } from '../components';
import { UpOutlined } from '@ant-design/icons';
import { NavItem } from '../hooks';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { altText } from '../helpers';
require('../styles/global.less');

const { Content } = Layout;

const Page = styled(Content)`
  overflow-y: auto;
  height: 100%;
  margin-top: 64px;
  width: 100%;
  // Change min height here if you want the height to scale based
  // on navbar and footer height
  min-height: calc(100vh - 64px - 128px);
`;

// Globally accessible theme variables here
// In styled component eg: color: ${p => p.theme.primary}
const theme = {
  primary: '#222',
  secondary: '#278232',
  tertiary: '#DA252A',
  inverse: '#F0F2F5'
}

// Edit navbar items here
const navbarItems: NavItem[] = [
  { id: 'products', title: 'Products', route: '/products', subTitle: 'Our Products', subRoutes: [
      { id: 'cold-rooms', title: 'Cold Rooms', route: '/products/cold-rooms' },
      { id: 'blast-coolers', title: 'Blast Coolers & Blast Freezers', route: '/products/blast-coolers' },
      { id: 'high-humidity', title: 'High Humidity & Misting Systems', route: '/products/high-humidity' },
      { id: 'temperature-monitoring', title: 'Temperature Monitoring and Control', route: '/products/temperature-monitoring' },
      { id: 'pack-houses', title: 'Pack Houses and Process Areas', route: '/products/packhouses' },
      { id: 'product2', title: 'Service Department', route: '/products/service-departments' },
      { id: 'product2', title: 'All Products', route: '/products/all-products' },
    ]},
  { id: 'partners', title: 'Partners', route: '/partners'},
  { id: 'installations', title: 'Installations', route: '/installations'},
  { id: 'contact', title: 'Contact', route: '/contact'},
];

// Head component can be moved into separate pages so that the title is dynamic per page
// Other meta info will be populated here
function MyApp({ ...props }: AppProps) {

  return (
    <>
      <meta
        name="description"
        content={altText}
      />
      <Inner {...props} />
      <script src="//my.visme.co/visme-embed.js" />
    </>
  )
}

const Inner = ({ Component, pageProps }: AppProps) => {

  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => { //<-- this useEffect will be triggered just one time at component initialization
    router.events.on("routeChangeStart", (url: string) => {
      console.log("Route is changing");
      setLoading(true)
    });
    router.events.on("routeChangeComplete", (url: string) => {
      console.log("Route is changed");
      setLoading(false)
    });
  });

  useEffect(() => setLoading(false), [setLoading]);


  if (loading) return (
    <div id={'cssLoaderOuter'}>
      <div className="cssloader">
        <div className="sh1"></div>
        <div className="sh2"></div>
        <h4 className="lt">defrosting</h4>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>NectaTech Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout style={{ height: '100%' }}>
          <Navbar items={navbarItems} logo={'/assets/logo-white.png'} />
          <Page>
            <Component {...pageProps} />
            <BackTop>
              <Tooltip title="Back to top">
                <Button shape="circle" icon={<UpOutlined />} />
              </Tooltip>
            </BackTop>
          </Page>
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
}


export default MyApp

reportWebVitals();
