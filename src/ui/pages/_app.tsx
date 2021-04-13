import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from '../auth/authContext';
import { ApolloClientProvider } from '../auth/ApolloClientProvider';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Varela Round', sans-serif;
    background-color: #142250;
    color: #97b4ff;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ApolloClientProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ApolloClientProvider>
    </AuthProvider>
  );
};

export default App;
