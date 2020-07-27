import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';

export const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:3000/graphql'}),
  cache: new InMemoryCache(),
});
