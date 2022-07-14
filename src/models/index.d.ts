import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum GeoFenceRadius {
  FT_50 = "FT_50",
  FT_100 = "FT_100",
  FT_200 = "FT_200"
}



type RegisteredInfoMetaData = {
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