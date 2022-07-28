export const schema = {
    "models": {
        "RegisteredInfo": {
            "name": "RegisteredInfo",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "userId": {
                    "name": "userId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "livingSituation": {
                    "name": "livingSituation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "mobility": {
                    "name": "mobility",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "diagnosis": {
                    "name": "diagnosis",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "diagnosisDate": {
                    "name": "diagnosisDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "patientName": {
                    "name": "patientName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "caregiverName": {
                    "name": "caregiverName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "caregiverRelationship": {
                    "name": "caregiverRelationship",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RegisteredInfos",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PatientWatchData": {
            "name": "PatientWatchData",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "time": {
                    "name": "time",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
<<<<<<< HEAD
=======
                "patientId": {
                    "name": "patientId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
                "steps": {
                    "name": "steps",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "calories": {
                    "name": "calories",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
<<<<<<< HEAD
                "heartRate": {
                    "name": "heartRate",
=======
                "heart_rate": {
                    "name": "heart_rate",
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "respiratoryRate": {
                    "name": "respiratoryRate",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "oxygenSaturation": {
                    "name": "oxygenSaturation",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "tips": {
                    "name": "tips",
                    "isArray": false,
                    "type": {
                        "nonModel": "PatientTip"
                    },
                    "isRequired": false,
                    "attributes": []
                },
<<<<<<< HEAD
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PatientWatchData",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id",
                            "time"
                        ]
                    }
                }
            ]
        },
        "PatientAgitation": {
            "name": "PatientAgitation",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "time": {
                    "name": "time",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
=======

                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
<<<<<<< HEAD
            "pluralName": "PatientAgitations",
=======
            "pluralName": "PatientWatchData",
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
<<<<<<< HEAD
                            "id",
                            "time"
                        ]
                    }
                }
            ]
        },
        "PatientTips": {
            "name": "PatientTips",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "tips": {
                    "name": "tips",
                    "isArray": false,
                    "type": {
                        "nonModel": "PatientTip"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PatientTips",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
=======
                            "time"
                        ]
                    }
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
                },
                {
                    "type": "key",
                    "properties": {
<<<<<<< HEAD
                        "fields": [
                            "id"
=======
                        "name": "getDataByPatient",
                        "queryField": "getDataByPatient",
                        "fields": [
                            "patientId",
                            "createdAt"
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
                        ]
                    }
                }
            ]
        },
        "UserInfo": {
            "name": "UserInfo",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "patientName": {
                    "name": "patientName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "caregiverName": {
                    "name": "caregiverName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hasWatchSetup": {
                    "name": "hasWatchSetup",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "hasPatientInfo": {
                    "name": "hasPatientInfo",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UserInfos",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "GeoFence": {
            "name": "GeoFence",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "lon": {
                    "name": "lon",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "lat": {
                    "name": "lat",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "radius": {
                    "name": "radius",
                    "isArray": false,
                    "type": {
                        "enum": "GeoFenceRadius"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "GeoFences",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "GeoFenceRadius": {
            "name": "GeoFenceRadius",
            "values": [
                "FT_50",
                "FT_100",
                "FT_200"
            ]
        }
    },
    "nonModels": {
        "Tip": {
            "name": "Tip",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "importance": {
                    "name": "importance",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "link": {
                    "name": "link",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PatientTip": {
            "name": "PatientTip",
            "fields": {
                "lifestyleTip": {
                    "name": "lifestyleTip",
                    "isArray": false,
                    "type": {
                        "nonModel": "Tip"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sleepTip": {
                    "name": "sleepTip",
                    "isArray": false,
                    "type": {
                        "nonModel": "Tip"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "hrTip": {
                    "name": "hrTip",
                    "isArray": false,
                    "type": {
                        "nonModel": "Tip"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "respiratoryTip": {
                    "name": "respiratoryTip",
                    "isArray": false,
                    "type": {
                        "nonModel": "Tip"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "generalTip": {
                    "name": "generalTip",
                    "isArray": false,
                    "type": {
                        "nonModel": "Tip"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
<<<<<<< HEAD
    "version": "8c383e95e6d43a59906afc4a60fb75b7"
=======
    "version": "0217b720358effe5892c79fa9911328b"

>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
};