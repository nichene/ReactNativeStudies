import gql from 'graphql-tag';

const userQuery = gql`
  {
    users {
      name
      email
    }
  }
`;

export const UserComponent = graphql(userQuery)((props) => {
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
