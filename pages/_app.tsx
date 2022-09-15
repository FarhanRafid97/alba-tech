import { NextComponentType, NextPageContext } from 'next';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';

type AppProps = {
  pageProps: any;
  Component: NextComponentType<NextPageContext, any, {}> & { layoutProps: any };
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const theme = extendTheme({
    colors: {
      albaPrimary: '#FFCE07',
    },
  });

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
