import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';

export const client = new ApolloClient({
  link: new HttpLink({uri: 'http://192.168.15.14:3000/graphql'}),
  cache: new InMemoryCache(),
});
