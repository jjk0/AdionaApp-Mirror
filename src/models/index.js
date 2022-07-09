// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GeoFenceRadius = {
  "FT_50": "FT_50",
  "FT_100": "FT_100",
  "FT_200": "FT_200"
};

const { RegisteredInfo, UserInfo, GeoFence } = initSchema(schema);

export {
  RegisteredInfo,
  UserInfo,
  GeoFence,
  GeoFenceRadius
};