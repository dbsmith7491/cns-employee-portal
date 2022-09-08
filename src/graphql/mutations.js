/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createApplicant = /* GraphQL */ `
  mutation CreateApplicant(
    $input: CreateApplicantInput!
    $condition: ModelApplicantConditionInput
  ) {
    createApplicant(input: $input, condition: $condition) {
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
export const updateApplicant = /* GraphQL */ `
  mutation UpdateApplicant(
    $input: UpdateApplicantInput!
    $condition: ModelApplicantConditionInput
  ) {
    updateApplicant(input: $input, condition: $condition) {
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
export const deleteApplicant = /* GraphQL */ `
  mutation DeleteApplicant(
    $input: DeleteApplicantInput!
    $condition: ModelApplicantConditionInput
  ) {
    deleteApplicant(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
