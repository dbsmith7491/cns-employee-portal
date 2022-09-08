// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Applicant, Customer, Contact } = initSchema(schema);

export {
  Applicant,
  Customer,
  Contact
};