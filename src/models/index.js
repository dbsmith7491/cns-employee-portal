// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Applicant, Customer } = initSchema(schema);

export {
  Applicant,
  Customer
};