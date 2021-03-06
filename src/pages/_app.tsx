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
import { altText, pageview } from '../helpers';
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
  secondary: '#39749E',
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
      { id: 'product2', title: 'Service Departments', route: '/products/service-departments' },
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
      <Head>
        <title>Agricold | Post Harvest Cooling Systems</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={altText}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Inner {...props} />
      <form name="contact" data-netlify={true} netlify-honeypot="question" hidden>
        <input type="text" name="name" />
        <input type="text" name="contactNumber" />
        <input type="email" name="email" />
        <input type="text" name="companyName" />
        <textarea name="message"></textarea>
      </form>
      <script defer src="//my.visme.co/visme-embed.js" />
    </>
  )
}

const Inner = ({ Component, pageProps }: AppProps) => {

  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => { //<-- this useEffect will be triggered just one time at component initialization
    const handleRouteStartChange = (url: string) => {
      setLoading(true);
    }

    const handleRouteChange = (url: string) => {
      setLoading(false);
      pageview(url);
    }

    router.events.on("routeChangeStart", handleRouteStartChange);

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteStartChange);
      router.events.off('routeChangeComplete', handleRouteChange);
    }
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
