/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatientWatchData = /* GraphQL */ `
<<<<<<< HEAD
  query GetPatientWatchData($id: ID!, $time: AWSDateTime!) {
    getPatientWatchData(id: $id, time: $time) {
      id
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
    $id: ID
    $time: ModelStringKeyConditionInput
    $filter: ModelPatientWatchDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPatientWatchData(
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
        id
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
=======
  query GetPatientWatchData($time: AWSDateTime!) {
    getPatientWatchData(time: $time) {
      time
      patientId
      steps
      calories
      heart_rate
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
        patientId
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
        patientId
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
export const getDataByPatient = /* GraphQL */ `
  query GetDataByPatient(
    $patientId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPatientWatchDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getDataByPatient(
      patientId: $patientId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        time
        patientId
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
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
      username
      email
      patientName
      caregiverName
      hasWatchSetup
      hasPatientInfo
<<<<<<< HEAD
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
=======
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
<<<<<<< HEAD
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
=======
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
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
<<<<<<< HEAD
export const syncGeoFences = /* GraphQL */ `
  query SyncGeoFences(
    $filter: ModelGeoFenceFilterInput
=======
export const syncUserInfos = /* GraphQL */ `
  query SyncUserInfos(
    $filter: ModelUserInfoFilterInput
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
<<<<<<< HEAD
    syncGeoFences(
=======
    syncUserInfos(
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
<<<<<<< HEAD
=======
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
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
        lon
        lat
        radius
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
