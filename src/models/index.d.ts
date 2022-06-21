import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class ActivityInfo {
  readonly date?: string | null;
  readonly rate?: number | null;
  constructor(init: ModelInit<ActivityInfo>);
}

type UserInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserInfo {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly patientName?: string | null;
  readonly caregiverName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserInfo, UserInfoMetaData>);
  static copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo, UserInfoMetaData>) => MutableModel<UserInfo, UserInfoMetaData> | void): UserInfo;
}