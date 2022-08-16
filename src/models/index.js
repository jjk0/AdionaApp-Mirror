// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GeoFenceRadius = {
  "FT_50": "FT_50",
  "FT_100": "FT_100",
  "FT_200": "FT_200"
};

const { RegisteredInfo, Tip, SinglePatientTip, PatientWatchData, PatientAgitation, PatientTips, UserInfo, GeoFence } = initSchema(schema);

export {
  RegisteredInfo,
  Tip,
  SinglePatientTip,
  PatientWatchData,
  PatientAgitation,
  PatientTips,
  UserInfo,
  GeoFence,
  GeoFenceRadius
};