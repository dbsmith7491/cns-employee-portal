import { useParams, useOutletContext } from "react-router-dom";
import EditableListCard from "../EditableListCard";
import { useState, useEffect } from "react";

const CustomerOverview = () => {
  let { customerID } = useParams();
  const [customer, setCustomer] = useOutletContext();
  const [submitData, setSubmitData] = useState();

  const contactData = [
    {
      label: "Name",
      value: customer.primaryContact.name,
      type: "text",
      key: "name",
    },
    {
      label: "Phone",
      value: customer.primaryContact.phone,
      type: "phone",
      key: "phone",
    },
    {
      label: "Email",
      value: customer.primaryContact.email,
      type: "email",
      key: "email",
    },
  ];

  const insuranceData = [
    {
      label: "Insurance Carrier",
      value: customer.insuranceInformation.carrier,
      type: "text",
      key: "carrier",
    },
    {
      label: "Insurance Expiration Date",
      value: customer.insuranceInformation.expirationDate,
      type: "date",
      key: "expirationDate",
    },
    {
      label: "NIS Client",
      value: customer.insuranceInformation.nisClient ? "Yes" : "No",
      type: "boolean",
      options: { true: "Yes", false: "No" },
      key: "nisClient",
    },
    {
      label: "Insurance Agency Name",
      value: customer.insuranceInformation.agencyName,
      type: "text",
      key: "agencyName",
    },
    {
      label: "Agent Name",
      value: customer.insuranceInformation.agentName,
      type: "text",
      key: "agentName",
    },
    {
      label: "Insurance Agent Email",
      value: customer.insuranceInformation.agentEmail,
      type: "email",
      key: "agentEmail",
    },
    {
      label: "Insurance Agent Fax",
      value: customer.insuranceInformation.agentFax,
      type: "phone",
      key: "agentFax",
    },
  ];

  const irpLicensingData = [
    {
      label: "IRP Account #",
      value: customer.irpLicensingInformation.irpAccountNumber,
      type: "text",
      key: "irpAccountNumber",
    },
    {
      label: "IRP Renewal Date",
      value: customer.irpLicensingInformation.irpRenewalDate,
      type: "date",
      key: "irpRenewalDate",
    },
    {
      label: "EIN",
      value: customer.irpLicensingInformation.ein,
      type: "text",
      key: "ein",
    },
    {
      label: "Entity",
      value: customer.irpLicensingInformation.entity,
      type: "text",
      key: "entity",
    },
    {
      label: "FMSCA Username",
      value: customer.irpLicensingInformation.fmscaUsername,
      type: "text",
      key: "fmscaUsername",
    },
    {
      label: "FMSCA Password",
      value: customer.irpLicensingInformation.fmscaPassword,
      type: "text",
      key: "fmscaPassword",
    },
    {
      label: "DOT Pin",
      value: customer.irpLicensingInformation.dotPin,
      type: "text",
      key: "dotPin",
    },
    {
      label: "MC Pin",
      value: customer.irpLicensingInformation.mcPin,
      type: "text",
      key: "mcPin",
    },
    {
      label: "Operating Authority",
      value: customer.irpLicensingInformation.operatingAuthority,
      type: "text",
      key: "operatingAuthority",
    },
    {
      label: "Annual Clearing House Queries Done",
      value: customer.irpLicensingInformation.annualClearingHouseQueriesDone,
      type: "date",
      key: "annualClearingHouseQueriesDone",
    },
    {
      label: "Last UCR Done",
      value: customer.irpLicensingInformation.lastUCRDone,
      type: "date",
      key: "lastUCRDone",
    },
    {
      label: "Last IFTA Filing Done",
      value: customer.irpLicensingInformation.lastIftaFilingDone,
      type: "date",
      key: "lastIftaFilingDone",
    },
  ];

  const accountData = [
    {
      label: "Name",
      value: customer.name,
      type: "text",
      key: "name",
    },
    {
      label: "DBA",
      value: customer.dba,
      type: "text",
      key: "dba",
    },
    {
      label: "Phone",
      value: customer.phone,
      type: "phone",
      key: "phone",
    },
  ];

  const updateInsuranceData = (d) => {
    let tempCustomerObj = structuredClone(customer);
    d.forEach((item) => {
      tempCustomerObj.insuranceInformation[item.key] = item.value;
    });
    setCustomer(tempCustomerObj);
    setSubmitData(true);
  };

  const updateIrpLicensingData = (d) => {
    let tempCustomerObj = structuredClone(customer);
    d.forEach((item) => {
      tempCustomerObj.irpLicensingInformation[item.key] = item.value;
    });
    setCustomer(tempCustomerObj);
    setSubmitData(true);
  };

  const updateAccountData = (d) => {
    let tempCustomerObj = structuredClone(customer);
    console.log(d);
    d.forEach((item) => {
      tempCustomerObj[item.key] = item.value;
    });
    setCustomer(tempCustomerObj);
    setSubmitData(true);
  };

  const updateContactData = (d) => {
    let tempCustomerObj = structuredClone(customer);
    console.log(d);
    d.forEach((item) => {
      tempCustomerObj.primaryContact[item.key] = item.value;
    });
    setCustomer(tempCustomerObj);
    setSubmitData(true);
  };

  async function submitForm() {
    const editedForm = {
      dot: customer.dot ? customer.dot : "",
      mc: customer.mc ? customer.mc : "",
      dba: customer.dba ? customer.dba : "",
      name: customer.name ? customer.name : "",
      phone: customer.phone ? customer.phone : "",
      primaryContact: {
        name: customer.primaryContact.name ? customer.primaryContact.name : "",
        email: customer.primaryContact.email
          ? customer.primaryContact.email
          : "",
        phone: customer.primaryContact.phone
          ? customer.primaryContact.phoe
          : "",
      },
      physicalAddress: {
        street: customer.physicalAddress.street
          ? customer.physicalAddress.street
          : "",
        city: customer.physicalAddress.city
          ? customer.physicalAddress.city
          : "",
        state: customer.physicalAddress.state
          ? customer.physicalAddress.state
          : "",
        zip: customer.physicalAddress.zip ? customer.physicalAddress.zip : "",
      },
      mailingAddress: {
        street: customer.mailingAddress.street
          ? customer.mailingAddress.street
          : "",
        city: customer.mailingAddress.city ? customer.mailingAddress.city : "",
        state: customer.mailingAddress.state
          ? customer.mailingAddress.state
          : "",
        zip: customer.mailingAddress.zip ? customer.mailingAddress.zip : "",
      },
      mailingSameAsPhysical: customer.mailingSameAsPhysical,
      insuranceInformation: {
        carrier: customer.insuranceInformation.carrier
          ? customer.insuranceInformation.carrier
          : "",
        expirationDate: customer.insuranceInformation.expirationDate
          ? customer.insuranceInformation.expirationDate
          : "",
        nisClient: customer.insuranceInformation.nisClient
          ? customer.insuranceInformation.nisClient
          : "",
        agencyName: customer.insuranceInformation.agencyName
          ? customer.insuranceInformation.nisClient
          : "",
        agentName: customer.insuranceInformation.agentName
          ? customer.insuranceInformation.agentName
          : "",
        agentEmail: customer.insuranceInformation.agentEmail
          ? customer.insuranceInformation.agentEmail
          : "",
        agentFax: customer.insuranceInformation.agentFax
          ? customer.insuranceInformation.agentFax
          : "",
      },
      irpLicensingInformation: {
        irpAccountNumber: customer.irpLicensingInformation.irpAccountNumber
          ? customer.irpLicensingInformation.irpAccountNumber
          : "",
        irpRenewalDate: customer.irpLicensingInformation.irpRenewalDate
          ? customer.irpLicensingInformation.irpRenewalDate
          : "",
        ein: customer.irpLicensingInformation.ein
          ? customer.irpLicensingInformation.ein
          : "",
        entity: customer.irpLicensingInformation.entity
          ? customer.irpLicensingInformation.entity
          : "",
        fmscaUsername: customer.irpLicensingInformation.fmscaUsername
          ? customer.irpLicensingInformation.fmscaUsername
          : "",
        fmscaPassword: customer.irpLicensingInformation.fmscaPassword
          ? customer.irpLicensingInformation.fmscaPassword
          : "",
        dotPin: customer.irpLicensingInformation.dotPin
          ? customer.irpLicensingInformation.dotPin
          : "",
        mcPin: customer.irpLicensingInformation.mcPin
          ? customer.irpLicensingInformation.mcPin
          : "",
        operatingAuthority: customer.irpLicensingInformation.operatingAuthority
          ? customer.irpLicensingInformation.operatingAuthority
          : "",
        annualClearingHouseQueriesDone: customer.irpLicensingInformation
          .annualClearingHouseQueriesDone
          ? customer.irpLicensingInformation.annualClearingHouseQueriesDone
          : "",
        lastUCRDone: customer.irpLicensingInformation.lastUCRDone
          ? customer.irpLicensingInformation.lastUCRDone
          : "",
        lastIftaFilingDone: customer.irpLicensingInformation.lastIftaFilingDone
          ? customer.irpLicensingInformation.lastIftaFilingDone
          : "",
        lastBiennualUpdateDone: customer.irpLicensingInformation
          .lastBiennualUpdateDone
          ? customer.irpLicensingInformation.lastBiennualUpdateDone
          : "",
        scacRenewalDate: customer.irpLicensingInformation.scacRenewalDate
          ? customer.irpLicensingInformation.scacRenewalDate
          : "",
        hazmatRenewalDate: customer.irpLicensingInformation.hazmatRenewalDate
          ? customer.irpLicensingInformation.hazmatRenewalDate
          : "",
      },
    };

    await fetch(`/customer/${customerID.toString()}`, {
      method: "POST",
      body: JSON.stringify(editedForm),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  useEffect(() => {
    if (submitData) {
      submitForm();
      setSubmitData(false);
    }
  }, [customer]);

  return (
    <>
      <EditableListCard
        title="Account Information"
        fields={accountData}
        updateForm={updateAccountData}
      />

      <EditableListCard
        title="Primary Contact"
        fields={contactData}
        updateForm={updateContactData}
      />

      <EditableListCard
        title="IRP/Licensing"
        fields={irpLicensingData}
        updateForm={updateIrpLicensingData}
      />

      <EditableListCard
        title="Insurance Information"
        fields={insuranceData}
        updateForm={updateInsuranceData}
      />
    </>
  );
};

export default CustomerOverview;
