// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GeoFenceRadius = {
  "FT_50": "FT_50",
  "FT_100": "FT_100",
  "FT_200": "FT_200"
};

<<<<<<< HEAD
const { RegisteredInfo, PatientWatchData, PatientAgitation, PatientTips, UserInfo, GeoFence, Tip, PatientTip } = initSchema(schema);
=======

const { RegisteredInfo, PatientWatchData, UserInfo, GeoFence, Tip, PatientTip } = initSchema(schema);

>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27

export {
  RegisteredInfo,
  PatientWatchData,
<<<<<<< HEAD
  PatientAgitation,
  PatientTips,
=======
>>>>>>> 0ee0c82e4b35bdb70cfd7458280f64c1fcd69a27
  UserInfo,
  GeoFence,
  GeoFenceRadius,
  Tip,
  PatientTip
};