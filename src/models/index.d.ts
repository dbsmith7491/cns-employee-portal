import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ApplicantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContactMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Applicant {
  readonly id: string;
  readonly customerID: string;
  readonly driversLicenseFront?: string | null;
  readonly driversLicenseBack?: string | null;
  readonly medCardPic?: string | null;
  readonly medicalCardFile?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly otherName?: string | null;
  readonly birthDate?: string | null;
  readonly phone?: string | null;
  readonly ssnNumber?: string | null;
  readonly email?: string | null;
  readonly education?: string | null;
  readonly appliedFor?: string | null;
  readonly howDidYouHear?: string | null;
  readonly workedHereBefore?: string | null;
  readonly workedFrom?: string | null;
  readonly workedTo?: string | null;
  readonly reasonForLeaving?: string | null;
  readonly jobPerformanceIssues?: string | null;
  readonly currentAddress?: string | null;
  readonly currentCity?: string | null;
  readonly currentState?: string | null;
  readonly currentZip?: string | null;
  readonly checkaddress?: boolean | null;
  readonly previousAddresses?: (string | null)[] | null;
  readonly previousEmployers?: (string | null)[] | null;
  readonly qualifications?: (string | null)[] | null;
  readonly accidentRecords?: (string | null)[] | null;
  readonly violationRecords?: (string | null)[] | null;
  readonly driversLicenseNumber?: string | null;
  readonly driversLicenseState?: string | null;
  readonly currentLicenseType?: string | null;
  readonly licenseExpiration?: string | null;
  readonly licenseRevocation?: string | null;
  readonly endorsementNone?: boolean | null;
  readonly endorsementT?: boolean | null;
  readonly endorsementP?: boolean | null;
  readonly endorsementN?: boolean | null;
  readonly endorsementH?: boolean | null;
  readonly endorsementX?: boolean | null;
  readonly endorsementS?: boolean | null;
  readonly restrictionNone?: boolean | null;
  readonly restrictionL?: boolean | null;
  readonly restrictionZ?: boolean | null;
  readonly restrictionE?: boolean | null;
  readonly restrictionO?: boolean | null;
  readonly restrictionM?: boolean | null;
  readonly restrictionN?: boolean | null;
  readonly restrictionV?: boolean | null;
  readonly status?: string | null;
  readonly drivingExperiences?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Applicant, ApplicantMetaData>);
  static copyOf(source: Applicant, mutator: (draft: MutableModel<Applicant, ApplicantMetaData>) => MutableModel<Applicant, ApplicantMetaData> | void): Applicant;
}

export declare class Customer {
  readonly id: string;
  readonly accountName?: string | null;
  readonly dba?: string | null;
  readonly dot?: string | null;
  readonly mc?: string | null;
  readonly Applicants?: (Applicant | null)[] | null;
  readonly Contacts?: (Contact | null)[] | null;
  readonly PrimaryContact?: Contact | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly customerPrimaryContactId?: string | null;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class Contact {
  readonly id: string;
  readonly customerID: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Contact, ContactMetaData>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact, ContactMetaData>) => MutableModel<Contact, ContactMetaData> | void): Contact;
}