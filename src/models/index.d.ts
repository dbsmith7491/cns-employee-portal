import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ApplicantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Applicant {
  readonly id: string;
  readonly customerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Applicant, ApplicantMetaData>);
  static copyOf(source: Applicant, mutator: (draft: MutableModel<Applicant, ApplicantMetaData>) => MutableModel<Applicant, ApplicantMetaData> | void): Applicant;
}

export declare class Customer {
  readonly id: string;
  readonly accountName?: string | null;
  readonly dba?: string | null;
  readonly Applicants?: (Applicant | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}