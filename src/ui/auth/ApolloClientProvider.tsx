import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import React, { FunctionComponent } from 'react';
import { useAuth } from './authContext';

export const getApolloClient = (accessToken: string) => {
  const authLink = new ApolloLink((operation, forward) => {
    const existingHeaders = operation.getContext().headers;
    operation.setContext({
      headers: {
        ...existingHeaders,
        authorization: accessToken ? `Bearer ${accessToken}` : null,
      },
    });
    return forward(operation);
  });
  const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return client;
};

export interface ApolloProviderProps {
  children: React.ReactNode;
}

export const ApolloClientProvider: FunctionComponent<ApolloProviderProps> = (
  props,
) => {
  const { accessToken } = useAuth();
  const client = getApolloClient(accessToken);
  return <ApolloProvider client={client} children={props.children} />;
};
