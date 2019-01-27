// @ts-check
import App, { Container as NextContainer } from 'next/app';
import Header from '../components/Header';
import { Container } from 'reactstrap';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps: {
        ...pageProps,
        query: ctx.query,
      },
    };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    const { requests } = reduxStore.getState();

    return (
      <NextContainer>
        <Provider store={reduxStore}>
          <Header requests={requests.filter(req => !req.seen)} />
          <Container>
            <Component {...pageProps} dispatch={reduxStore.dispatch} />
          </Container>
        </Provider>
      </NextContainer>
    );
  }
}

export default withReduxStore(MyApp);
