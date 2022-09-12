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
      }
      nextToken
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
        }
        nextToken
      }
      Contacts {
        items {
          id
          customerID
          firstName
          lastName
          phone
          email
          createdAt
          updatedAt
        }
        nextToken
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
      }
      createdAt
      updatedAt
      customerPrimaryContactId
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
        Applicants {
          nextToken
        }
        Contacts {
          nextToken
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
        }
        createdAt
        updatedAt
        customerPrimaryContactId
      }
      nextToken
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
      }
      nextToken
    }
  }
`;
