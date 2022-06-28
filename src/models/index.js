// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RegisteredInfo, UserInfo } = initSchema(schema);

export {
  RegisteredInfo,
  UserInfo
};