//Import Modules
import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import Head from "next/head";
import Router from 'next/router';
import { initStore } from '../store/store';
import { motion, AnimatePresence } from "framer-motion";

//Config import
import { ThemeProvider } from 'styled-components';
import GlobalStyled from '../components/GlobalStyled/globalStyled';
import cr_theme from '../components/Theme/theme';

//Components
import Layout from "../components/Layout/layout";

export default withRedux(initStore)(
  class MyApp extends App {
    
    static async getInitialProps({ Component, router, ctx }) {
      let pageProps = {}
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
      return { pageProps }
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
      const { Component, pageProps, store, router } = this.props
      return (
        <Provider store={store}>
          <ThemeProvider theme={ cr_theme }>
            <Head>
              <title>Mon cv en ligne</title>
              <link href="https://fonts.googleapis.com/css?family=Roboto|Pacifico|Oranienbaum&display=swap" rel="stylesheet" />
              <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
                  key="viewport"
              />
            </Head>
            <Layout>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </Layout>
            <GlobalStyled />
          </ThemeProvider>
        </Provider>
      )
    }
  }
)
