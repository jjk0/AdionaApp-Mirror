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
export const createPatientWatchData = /* GraphQL */ `
  mutation CreatePatientWatchData(
    $input: CreatePatientWatchDataInput!
    $condition: ModelPatientWatchDataConditionInput
  ) {
    createPatientWatchData(input: $input, condition: $condition) {
      id
      time
      steps
      calories
      heartRate
      respiratoryRate
      oxygenSaturation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePatientWatchData = /* GraphQL */ `
  mutation UpdatePatientWatchData(
    $input: UpdatePatientWatchDataInput!
    $condition: ModelPatientWatchDataConditionInput
  ) {
    updatePatientWatchData(input: $input, condition: $condition) {
      id
      time
      steps
      calories
      heartRate
      respiratoryRate
      oxygenSaturation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePatientWatchData = /* GraphQL */ `
  mutation DeletePatientWatchData(
    $input: DeletePatientWatchDataInput!
    $condition: ModelPatientWatchDataConditionInput
  ) {
    deletePatientWatchData(input: $input, condition: $condition) {
      id
      time
      steps
      calories
      heartRate
      respiratoryRate
      oxygenSaturation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPatientAgitation = /* GraphQL */ `
  mutation CreatePatientAgitation(
    $input: CreatePatientAgitationInput!
    $condition: ModelPatientAgitationConditionInput
  ) {
    createPatientAgitation(input: $input, condition: $condition) {
      id
      time
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePatientAgitation = /* GraphQL */ `
  mutation UpdatePatientAgitation(
    $input: UpdatePatientAgitationInput!
    $condition: ModelPatientAgitationConditionInput
  ) {
    updatePatientAgitation(input: $input, condition: $condition) {
      id
      time
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePatientAgitation = /* GraphQL */ `
  mutation DeletePatientAgitation(
    $input: DeletePatientAgitationInput!
    $condition: ModelPatientAgitationConditionInput
  ) {
    deletePatientAgitation(input: $input, condition: $condition) {
      id
      time
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPatientTips = /* GraphQL */ `
  mutation CreatePatientTips(
    $input: CreatePatientTipsInput!
    $condition: ModelPatientTipsConditionInput
  ) {
    createPatientTips(input: $input, condition: $condition) {
      id
      tips {
        lifestyleTip {
          message
          importance
          link
        }
        sleepTip {
          message
          importance
          link
        }
        hrTip {
          message
          importance
          link
        }
        respiratoryTip {
          message
          importance
          link
        }
        generalTip {
          message
          importance
          link
        }
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePatientTips = /* GraphQL */ `
  mutation UpdatePatientTips(
    $input: UpdatePatientTipsInput!
    $condition: ModelPatientTipsConditionInput
  ) {
    updatePatientTips(input: $input, condition: $condition) {
      id
      tips {
        lifestyleTip {
          message
          importance
          link
        }
        sleepTip {
          message
          importance
          link
        }
        hrTip {
          message
          importance
          link
        }
        respiratoryTip {
          message
          importance
          link
        }
        generalTip {
          message
          importance
          link
        }
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePatientTips = /* GraphQL */ `
  mutation DeletePatientTips(
    $input: DeletePatientTipsInput!
    $condition: ModelPatientTipsConditionInput
  ) {
    deletePatientTips(input: $input, condition: $condition) {
      id
      tips {
        lifestyleTip {
          message
          importance
          link
        }
        sleepTip {
          message
          importance
          link
        }
        hrTip {
          message
          importance
          link
        }
        respiratoryTip {
          message
          importance
          link
        }
        generalTip {
          message
          importance
          link
        }
      }
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
