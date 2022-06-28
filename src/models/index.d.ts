import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RegisteredInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class RegisteredInfo {
  readonly id: string;
  readonly userId?: string | null;
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