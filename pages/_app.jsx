import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,

  //  eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  pageProps: PropTypes.object,
};

export default MyApp;
