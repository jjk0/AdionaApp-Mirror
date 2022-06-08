/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo($owner: String) {
    onCreateUserInfo(owner: $owner) {
      id
      name
      activityData {
        date
        rate
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo($owner: String) {
    onUpdateUserInfo(owner: $owner) {
      id
      name
      activityData {
        date
        rate
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo($owner: String) {
    onDeleteUserInfo(owner: $owner) {
      id
      name
      activityData {
        date
        rate
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
