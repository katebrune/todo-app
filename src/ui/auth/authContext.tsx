import { ApolloClient, InMemoryCache, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import { START_SESSION } from '../mutations/startSession';

export interface AuthContextValues {
  startSession: () => Promise<void>;
  accessToken: string | null;
}

export const AuthContext = React.createContext<AuthContextValues>({
  startSession: () => Promise.resolve(),
  accessToken: null,
});

interface AuthProviderProps {
  value?: AuthContextValues;
  children: React.ReactNode;
}

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = (
  props,
) => {
  const [accessToken, setToken] = useState('');
  const router = useRouter();
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
  });

  const setAccessToken = (token: string) => {
    setToken(token);
    document.cookie = `accessToken=${token}`;
    router.push('/');
  };

  const startSession = useCallback(async () => {
    return new Promise<void>((resolve, reject) => {
      client
        .mutate<{ startSession: string }>({ mutation: START_SESSION })
        .then((res) => {
          setAccessToken(res.data.startSession);
          resolve();
        })
        .catch(() => reject());
    });
  }, []);

  const authContextValue = useMemo(() => ({ startSession, accessToken }), [
    startSession,
    accessToken,
  ]);

  return (
    <AuthContext.Provider value={props.value ?? authContextValue} {...props} />
  );
};

export const useAuth = (): AuthContextValues => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
