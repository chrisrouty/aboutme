//Import Modules
import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import Head from "next/head";
import Router from 'next/router';
import { initStore } from '../store';

//Config import
import { ThemeProvider } from 'styled-components';
import GlobalStyled from '../components/GlobalStyled/globalStyled';
import cr_theme from '../components/Theme/theme';

//Components
import Layout from "../components/Layout/layout";
import Footer from "../components/Footer/footer";
import Loading from "../components/Loaders/LoadPager/loadPager";

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
      }
    }

    constructor(props) {
      super(props);
      this.state = { isLoading: false };
    }

    componentDidMount(){
      Router.events.on('routeChangeStart', () => {
        this.setState({ isLoading: true });
        console.log(this.state.isLoading)
      });

      Router.events.on('routeChangeComplete', () => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000);
      });

      Router.events.on('routeChangeError', () => {
        this.setState({ isLoading: false });
      });
    }

    render() {
      const { Component, pageProps, store } = this.props
      return (
        <Provider store={store}>
          <ThemeProvider theme={ cr_theme }>
            <Loading display={this.state.isLoading} />
            <Head>
                <title>Mon cv en ligne</title>
                <link href="https://fonts.googleapis.com/css?family=Calistoga|Playfair+Display|Roboto&display=swap" rel="stylesheet" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    key="viewport"
                />
            </Head>
            <Layout>
                <Component { ...pageProps } />
            </Layout>
            <Footer />
            <GlobalStyled />
          </ThemeProvider>
        </Provider>
      )
    }
  }
)
