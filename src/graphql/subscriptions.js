/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateApplicant = /* GraphQL */ `
  subscription OnCreateApplicant {
    onCreateApplicant {
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
export const onUpdateApplicant = /* GraphQL */ `
  subscription OnUpdateApplicant {
    onUpdateApplicant {
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
export const onDeleteApplicant = /* GraphQL */ `
  subscription OnDeleteApplicant {
    onDeleteApplicant {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
