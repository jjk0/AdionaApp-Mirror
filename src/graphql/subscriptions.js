/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePatientWatchData = /* GraphQL */ `
  subscription OnCreatePatientWatchData {
    onCreatePatientWatchData {
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
export const onUpdatePatientWatchData = /* GraphQL */ `
  subscription OnUpdatePatientWatchData {
    onUpdatePatientWatchData {
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
export const onDeletePatientWatchData = /* GraphQL */ `
  subscription OnDeletePatientWatchData {
    onDeletePatientWatchData {
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
export const onCreatePatientAgitation = /* GraphQL */ `
  subscription OnCreatePatientAgitation {
    onCreatePatientAgitation {
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
export const onUpdatePatientAgitation = /* GraphQL */ `
  subscription OnUpdatePatientAgitation {
    onUpdatePatientAgitation {
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
export const onDeletePatientAgitation = /* GraphQL */ `
  subscription OnDeletePatientAgitation {
    onDeletePatientAgitation {
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
export const onCreatePatientTips = /* GraphQL */ `
  subscription OnCreatePatientTips {
    onCreatePatientTips {
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
export const onUpdatePatientTips = /* GraphQL */ `
  subscription OnUpdatePatientTips {
    onUpdatePatientTips {
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
export const onDeletePatientTips = /* GraphQL */ `
  subscription OnDeletePatientTips {
    onDeletePatientTips {
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
export const onCreateRegisteredInfo = /* GraphQL */ `
  subscription OnCreateRegisteredInfo {
    onCreateRegisteredInfo {
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
export const onUpdateRegisteredInfo = /* GraphQL */ `
  subscription OnUpdateRegisteredInfo {
    onUpdateRegisteredInfo {
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
export const onDeleteRegisteredInfo = /* GraphQL */ `
  subscription OnDeleteRegisteredInfo {
    onDeleteRegisteredInfo {
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
