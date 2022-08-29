/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const getTip = /* GraphQL */ `
  query GetTip($id: ID!) {
    getTip(id: $id) {
      message
      importance
      link
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTips = /* GraphQL */ `
  query ListTips(
    $filter: ModelTipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        message
        importance
        link
        id
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
export const syncTips = /* GraphQL */ `
  query SyncTips(
    $filter: ModelTipFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTips(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        message
        importance
        link
        id
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
export const getSinglePatientTip = /* GraphQL */ `
  query GetSinglePatientTip($id: ID!) {
    getSinglePatientTip(id: $id) {
      lifestyleTip {
        message
        importance
        link
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      sleepTip {
        message
        importance
        link
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      hrTip {
        message
        importance
        link
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      respiratoryTip {
        message
        importance
        link
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      generalTip {
        message
        importance
        link
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSinglePatientTips = /* GraphQL */ `
  query ListSinglePatientTips(
    $filter: ModelSinglePatientTipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSinglePatientTips(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        lifestyleTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        sleepTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        hrTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        respiratoryTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        generalTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        id
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
export const syncSinglePatientTips = /* GraphQL */ `
  query SyncSinglePatientTips(
    $filter: ModelSinglePatientTipFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSinglePatientTips(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        lifestyleTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        sleepTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        hrTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        respiratoryTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        generalTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        id
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
export const getPatientWatchData = /* GraphQL */ `
  query GetPatientWatchData($time: AWSDateTime!) {
    getPatientWatchData(time: $time) {
      time
      id
      steps
      calories
      heart_rate
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
export const listPatientWatchData = /* GraphQL */ `
  query ListPatientWatchData(
    $time: AWSDateTime
    $filter: ModelPatientWatchDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPatientWatchData(
      time: $time
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        time
        id
        steps
        calories
        heart_rate
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
        time
        id
        steps
        calories
        heart_rate
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
  query GetPatientAgitation($id: ID!, $time: AWSDateTime!) {
    getPatientAgitation(id: $id, time: $time) {
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
export const listPatientAgitations = /* GraphQL */ `
  query ListPatientAgitations(
    $id: ID
    $time: ModelStringKeyConditionInput
    $filter: ModelPatientAgitationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPatientAgitations(
      id: $id
      time: $time
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
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
        id
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
  query GetPatientTips($id: ID!) {
    getPatientTips(id: $id) {
      id
      tips {
        lifestyleTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        sleepTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        hrTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        respiratoryTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        generalTip {
          message
          importance
          link
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        id
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
    $id: ID
    $filter: ModelPatientTipsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPatientTips(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        tips {
          id
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
        id
        tips {
          id
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
export const getDataByPatient = /* GraphQL */ `
  query GetDataByPatient(
    $id: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPatientWatchDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getDataByPatient(
      id: $id
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        time
        id
        steps
        calories
        heart_rate
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
