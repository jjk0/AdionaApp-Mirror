/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatientWatchData = /* GraphQL */ `
  query GetPatientWatchData($patientId: ID!, $time: AWSDateTime!) {
    getPatientWatchData(patientId: $patientId, time: $time) {
      patientId
      time
      steps
      calories
      heartRate
      respiratoryRate
      oxygenSaturation
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
export const listPatientWatchData = /* GraphQL */ `
  query ListPatientWatchData(
    $patientId: ID
    $time: ModelStringKeyConditionInput
    $filter: ModelPatientWatchDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPatientWatchData(
      patientId: $patientId
      time: $time
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        patientId
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
      nextToken
      startedAt
    }
  }
`;
export const syncPatientWatchData = /* GraphQL */ `
  query SyncPatientWatchData(
    $filter: ModelPatientWatchDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatientWatchData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        patientId
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
      nextToken
      startedAt
    }
  }
`;
export const getPatientAgitation = /* GraphQL */ `
  query GetPatientAgitation($patientId: ID!, $time: AWSDateTime!) {
    getPatientAgitation(patientId: $patientId, time: $time) {
      patientId
      time
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPatientAgitations = /* GraphQL */ `
  query ListPatientAgitations(
    $patientId: ID
    $time: ModelStringKeyConditionInput
    $filter: ModelPatientAgitationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPatientAgitations(
      patientId: $patientId
      time: $time
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        patientId
        time
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPatientAgitations = /* GraphQL */ `
  query SyncPatientAgitations(
    $filter: ModelPatientAgitationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatientAgitations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        patientId
        time
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPatientTips = /* GraphQL */ `
  query GetPatientTips($patientId: ID!) {
    getPatientTips(patientId: $patientId) {
      patientId
      tips {
        patientId
        tips {
          patientId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPatientTips = /* GraphQL */ `
  query ListPatientTips(
    $patientId: ID
    $filter: ModelPatientTipsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPatientTips(
      patientId: $patientId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        patientId
        tips {
          patientId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPatientTips = /* GraphQL */ `
  query SyncPatientTips(
    $filter: ModelPatientTipsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatientTips(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        patientId
        tips {
          patientId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRegisteredInfo = /* GraphQL */ `
  query GetRegisteredInfo($id: ID!) {
    getRegisteredInfo(id: $id) {
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
export const listRegisteredInfos = /* GraphQL */ `
  query ListRegisteredInfos(
    $filter: ModelRegisteredInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegisteredInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRegisteredInfos = /* GraphQL */ `
  query SyncRegisteredInfos(
    $filter: ModelRegisteredInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRegisteredInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
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
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserInfos = /* GraphQL */ `
  query SyncUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getGeoFence = /* GraphQL */ `
  query GetGeoFence($id: ID!) {
    getGeoFence(id: $id) {
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
export const listGeoFences = /* GraphQL */ `
  query ListGeoFences(
    $filter: ModelGeoFenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeoFences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncGeoFences = /* GraphQL */ `
  query SyncGeoFences(
    $filter: ModelGeoFenceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGeoFences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const geoFenceByUser = /* GraphQL */ `
  query GeoFenceByUser(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelGeoFenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    geoFenceByUser(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
