// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserInfo, ActivityInfo } = initSchema(schema);

export {
  UserInfo,
  ActivityInfo
};