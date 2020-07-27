import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import {MyStack} from './src/myStack/myStack';
import {client} from './src/Apollo/client';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MyStack />
      </ApolloProvider>
    );
  }
}
