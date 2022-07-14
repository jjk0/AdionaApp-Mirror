/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRegisteredInfo = /* GraphQL */ `
  subscription OnCreateRegisteredInfo($owner: String) {
    onCreateRegisteredInfo(owner: $owner) {
      id
      userId
      livingSituation
      mobility
      diagnosis
      diagnosisDate
      patientName
      caregiverName
      caregiverRelationship
      bucketNumber
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateRegisteredInfo = /* GraphQL */ `
  subscription OnUpdateRegisteredInfo($owner: String) {
    onUpdateRegisteredInfo(owner: $owner) {
      id
      userId
      livingSituation
      mobility
      diagnosis
      diagnosisDate
      patientName
      caregiverName
      caregiverRelationship
      bucketNumber
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteRegisteredInfo = /* GraphQL */ `
  subscription OnDeleteRegisteredInfo($owner: String) {
    onDeleteRegisteredInfo(owner: $owner) {
      id
      userId
      livingSituation
      mobility
      diagnosis
      diagnosisDate
      patientName
      caregiverName
      caregiverRelationship
      bucketNumber
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo {
    onCreateUserInfo {
      id
      username
      email
      patientName
      caregiverName
      hasWatchSetup
      hasPatientInfo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo {
    onUpdateUserInfo {
      id
      username
      email
      patientName
      caregiverName
      hasWatchSetup
      hasPatientInfo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo {
    onDeleteUserInfo {
      id
      username
      email
      patientName
      caregiverName
      hasWatchSetup
      hasPatientInfo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateGeoFence = /* GraphQL */ `
  subscription OnCreateGeoFence($owner: String) {
    onCreateGeoFence(owner: $owner) {
      id
      owner
      lon
      lat
      radius
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateGeoFence = /* GraphQL */ `
  subscription OnUpdateGeoFence($owner: String) {
    onUpdateGeoFence(owner: $owner) {
      id
      owner
      lon
      lat
      radius
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteGeoFence = /* GraphQL */ `
  subscription OnDeleteGeoFence($owner: String) {
    onDeleteGeoFence(owner: $owner) {
      id
      owner
      lon
      lat
      radius
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
