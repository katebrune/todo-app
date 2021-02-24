import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Varela Round', sans-serif;
    background-color: #142250;
    color: #97b4ff;
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
