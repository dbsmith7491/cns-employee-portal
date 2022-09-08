/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApplicant = /* GraphQL */ `
  query GetApplicant($id: ID!) {
    getApplicant(id: $id) {
      id
      customerID
      driversLicenseFront
      driversLicenseBack
      medCardPic
      medicalCardFile
      firstName
      lastName
      otherName
      birthDate
      phone
      ssnNumber
      email
      education
      appliedFor
      howDidYouHear
      workedHereBefore
      workedFrom
      workedTo
      reasonForLeaving
      jobPerformanceIssues
      currentAddress
      currentCity
      currentState
      currentZip
      checkaddress
      previousAddresses
      previousEmployers
      qualifications
      accidentRecords
      violationRecords
      driversLicenseNumber
      driversLicenseState
      currentLicenseType
      licenseExpiration
      licenseRevocation
      endorsementNone
      endorsementT
      endorsementP
      endorsementN
      endorsementH
      endorsementX
      endorsementS
      restrictionNone
      restrictionL
      restrictionZ
      restrictionE
      restrictionO
      restrictionM
      restrictionN
      restrictionV
      status
      drivingExperiences
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listApplicants = /* GraphQL */ `
  query ListApplicants(
    $filter: ModelApplicantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplicants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerID
        driversLicenseFront
        driversLicenseBack
        medCardPic
        medicalCardFile
        firstName
        lastName
        otherName
        birthDate
        phone
        ssnNumber
        email
        education
        appliedFor
        howDidYouHear
        workedHereBefore
        workedFrom
        workedTo
        reasonForLeaving
        jobPerformanceIssues
        currentAddress
        currentCity
        currentState
        currentZip
        checkaddress
        previousAddresses
        previousEmployers
        qualifications
        accidentRecords
        violationRecords
        driversLicenseNumber
        driversLicenseState
        currentLicenseType
        licenseExpiration
        licenseRevocation
        endorsementNone
        endorsementT
        endorsementP
        endorsementN
        endorsementH
        endorsementX
        endorsementS
        restrictionNone
        restrictionL
        restrictionZ
        restrictionE
        restrictionO
        restrictionM
        restrictionN
        restrictionV
        status
        drivingExperiences
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncApplicants = /* GraphQL */ `
  query SyncApplicants(
    $filter: ModelApplicantFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncApplicants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        customerID
        driversLicenseFront
        driversLicenseBack
        medCardPic
        medicalCardFile
        firstName
        lastName
        otherName
        birthDate
        phone
        ssnNumber
        email
        education
        appliedFor
        howDidYouHear
        workedHereBefore
        workedFrom
        workedTo
        reasonForLeaving
        jobPerformanceIssues
        currentAddress
        currentCity
        currentState
        currentZip
        checkaddress
        previousAddresses
        previousEmployers
        qualifications
        accidentRecords
        violationRecords
        driversLicenseNumber
        driversLicenseState
        currentLicenseType
        licenseExpiration
        licenseRevocation
        endorsementNone
        endorsementT
        endorsementP
        endorsementN
        endorsementH
        endorsementX
        endorsementS
        restrictionNone
        restrictionL
        restrictionZ
        restrictionE
        restrictionO
        restrictionM
        restrictionN
        restrictionV
        status
        drivingExperiences
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      accountName
      dba
      dot
      mc
      Applicants {
        nextToken
        startedAt
      }
      Contacts {
        nextToken
        startedAt
      }
      PrimaryContact {
        id
        customerID
        firstName
        lastName
        phone
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerPrimaryContactId
    }
  }
`;

export const getCustomerApplicants = `
query GetCustomerApplicants($id: ID!) {
  getCustomer(id: $id) {
    Applicants {
      items {
        lastName
        id
        firstName
        createdAt
      }
    }
  }
}
`;

export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountName
        dba
        dot
        mc
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerPrimaryContactId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        accountName
        dba
        dot
        mc
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerPrimaryContactId
      }
      nextToken
      startedAt
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      customerID
      firstName
      lastName
      phone
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerID
        firstName
        lastName
        phone
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncContacts = /* GraphQL */ `
  query SyncContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        customerID
        firstName
        lastName
        phone
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
