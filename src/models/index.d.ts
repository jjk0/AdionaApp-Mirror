import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum GeoFenceRadius {
  FT_50 = "FT_50",
  FT_100 = "FT_100",
  FT_200 = "FT_200"
}

export declare class Tip {
  readonly message?: string | null;
  readonly importance?: number | null;
  readonly link?: string | null;
  constructor(init: ModelInit<Tip>);
}

export declare class PatientTip {
  readonly lifestyleTip?: Tip | null;
  readonly sleepTip?: Tip | null;
  readonly hrTip?: Tip | null;
  readonly respiratoryTip?: Tip | null;
  readonly generalTip?: Tip | null;
  constructor(init: ModelInit<PatientTip>);
}

type RegisteredInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PatientWatchDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PatientAgitationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PatientTipsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GeoFenceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class RegisteredInfo {
  readonly id: string;
  readonly userId: string;
  readonly livingSituation?: string | null;
  readonly mobility?: string | null;
  readonly diagnosis?: string | null;
  readonly diagnosisDate?: string | null;
  readonly patientName?: string | null;
  readonly caregiverName?: string | null;
  readonly caregiverRelationship?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<RegisteredInfo, RegisteredInfoMetaData>);
  static copyOf(source: RegisteredInfo, mutator: (draft: MutableModel<RegisteredInfo, RegisteredInfoMetaData>) => MutableModel<RegisteredInfo, RegisteredInfoMetaData> | void): RegisteredInfo;
}

export declare class PatientWatchData {
  readonly id: string;
  readonly patientId: string;
  readonly time: string;
  readonly steps?: number | null;
  readonly calories?: number | null;
  readonly heartRate?: number | null;
  readonly respiratoryRate?: number | null;
  readonly oxygenSaturation?: number | null;
  readonly tips?: PatientTip | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PatientWatchData, PatientWatchDataMetaData>);
  static copyOf(source: PatientWatchData, mutator: (draft: MutableModel<PatientWatchData, PatientWatchDataMetaData>) => MutableModel<PatientWatchData, PatientWatchDataMetaData> | void): PatientWatchData;
}

export declare class PatientAgitation {
  readonly id: string;
  readonly patientId: string;
  readonly time: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PatientAgitation, PatientAgitationMetaData>);
  static copyOf(source: PatientAgitation, mutator: (draft: MutableModel<PatientAgitation, PatientAgitationMetaData>) => MutableModel<PatientAgitation, PatientAgitationMetaData> | void): PatientAgitation;
}

export declare class PatientTips {
  readonly id: string;
  readonly patientId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PatientTips, PatientTipsMetaData>);
  static copyOf(source: PatientTips, mutator: (draft: MutableModel<PatientTips, PatientTipsMetaData>) => MutableModel<PatientTips, PatientTipsMetaData> | void): PatientTips;
}

export declare class UserInfo {
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly patientName?: string | null;
  readonly caregiverName?: string | null;
  readonly hasWatchSetup?: boolean | null;
  readonly hasPatientInfo?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserInfo, UserInfoMetaData>);
  static copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo, UserInfoMetaData>) => MutableModel<UserInfo, UserInfoMetaData> | void): UserInfo;
}

export declare class GeoFence {
  readonly id: string;
  readonly owner: string;
  readonly lon?: number | null;
  readonly lat?: number | null;
  readonly radius?: GeoFenceRadius | keyof typeof GeoFenceRadius | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<GeoFence, GeoFenceMetaData>);
  static copyOf(source: GeoFence, mutator: (draft: MutableModel<GeoFence, GeoFenceMetaData>) => MutableModel<GeoFence, GeoFenceMetaData> | void): GeoFence;
}