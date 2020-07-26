import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import {ApolloProvider, graphql} from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:3000/graphql'}),
  cache: new InMemoryCache(),
});

const userQuery = gql`
  {
    users {
      name
      email
    }
  }
`;

const UserComponent = graphql(userQuery)((props) => {
  const {error, users} = props.data;
  if (error) {
    return <Text>err in fetch</Text>;
  }
  if (users) {
    return (
      <Text>
        {users[0].name} {users[0].email}
      </Text>
    );
  }

  return <Text>Loading...</Text>;
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Be ready for User in DB:</Text>
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
