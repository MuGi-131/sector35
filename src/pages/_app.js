import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../components/theme";
import "../../public/style.scss";
import "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import { wrapper, store } from "../../store/store";
import { Provider } from "react-redux";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  };

  render() {
    const { Component, pageProps } = this.props;

  return (
    <>
    <Head>
          <title>Home</title>
        </Head>
        <ThemeProvider theme={theme}>
      <Provider store={store}>
      <CssBaseline />
        <Component {...pageProps} />
      </Provider>
      </ThemeProvider>
      <style jsx global>{`
          :global(.MuiButton-root) {
            letter-spacing: 0.0892857143em;
          }
          :global(html),
          :globa(body),
          :global(#__next) {
            overflow: auto;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
          }
        `}</style>
    </>
  );
}
}

export default wrapper.withRedux(MyApp);