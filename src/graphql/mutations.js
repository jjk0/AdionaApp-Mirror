/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRegisteredInfo = /* GraphQL */ `
  mutation CreateRegisteredInfo(
    $input: CreateRegisteredInfoInput!
    $condition: ModelRegisteredInfoConditionInput
  ) {
    createRegisteredInfo(input: $input, condition: $condition) {
      id
      userId
      livingSituation
      mobility
      diagnosis
      diagnosisDate
      patientName
      caregiverName
      caregiverRelationship
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateRegisteredInfo = /* GraphQL */ `
  mutation UpdateRegisteredInfo(
    $input: UpdateRegisteredInfoInput!
    $condition: ModelRegisteredInfoConditionInput
  ) {
    updateRegisteredInfo(input: $input, condition: $condition) {
      id
      userId
      livingSituation
      mobility
      diagnosis
      diagnosisDate
      patientName
      caregiverName
      caregiverRelationship
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteRegisteredInfo = /* GraphQL */ `
  mutation DeleteRegisteredInfo(
    $input: DeleteRegisteredInfoInput!
    $condition: ModelRegisteredInfoConditionInput
  ) {
    deleteRegisteredInfo(input: $input, condition: $condition) {
      id
      userId
      livingSituation
      mobility
      diagnosis
      diagnosisDate
      patientName
      caregiverName
      caregiverRelationship
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
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
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
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
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
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
export const createGeoFence = /* GraphQL */ `
  mutation CreateGeoFence(
    $input: CreateGeoFenceInput!
    $condition: ModelGeoFenceConditionInput
  ) {
    createGeoFence(input: $input, condition: $condition) {
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
export const updateGeoFence = /* GraphQL */ `
  mutation UpdateGeoFence(
    $input: UpdateGeoFenceInput!
    $condition: ModelGeoFenceConditionInput
  ) {
    updateGeoFence(input: $input, condition: $condition) {
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
export const deleteGeoFence = /* GraphQL */ `
  mutation DeleteGeoFence(
    $input: DeleteGeoFenceInput!
    $condition: ModelGeoFenceConditionInput
  ) {
    deleteGeoFence(input: $input, condition: $condition) {
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
