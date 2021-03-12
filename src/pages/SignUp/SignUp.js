import React, { useState, useCallback } from 'react';
import 'App.scss'

import {
  Page, Layout, TextField,Heading, TextStyle, Select, Button
} from '@shopify/polaris'
import topLogo from 'resources/images/logo.color.svg'

export default function SignUp() {
  const [contactEmail, setContactEmail] = useState('shop.email')
  const handleContactEmailChange = useCallback((value) => setContactEmail(value), [])
  const [companyName, setCompanyName] = useState('')
  const handleCompanyNameChange = useCallback((value) => setCompanyName(value), [])
  const [ein, setEin] = useState('')
  const handleEinChange = useCallback((value) => setEin(value), [])

  const [contactFirstName, setContactFirstName] = useState('')
  const handleContactFirstNameChange = useCallback((value) => setContactFirstName(value), [])
  const [contactLastName, setContactLastName] = useState('')
  const handleContactLastNameChange = useCallback((value) => setContactLastName(value), [])
  const [conntactPhoneNumber, setConntactPhoneNumber] = useState('shop.phone')
  const handleConntactPhoneNumberChange = useCallback((value) => setConntactPhoneNumber(value), [])

  const [primaryContact, setPrimaryContact] = useState('')
  const handlePrimaryContactChange = useCallback((value) => setPrimaryContact((value === 'true')), [])
  const [qualityControlContact, setQualityControlContact] = useState('')
  const handleQualityControlContactChange = useCallback((value) => setQualityControlContact((value === 'true')), [])
  const [recallContact, setRecallContact] = useState('')
  const handleRecallContactChange = useCallback((value) => setRecallContact((value === 'true')), [])

  const [emergencyContact, setEmergencyContact] = useState('')
  const handleEmergencyContactChange = useCallback((value) => setEmergencyContact((value === 'true')), [])
  const [companyWebsite, setCompanyWebsite] = useState('')
  const handleCompanyWebsiteChange = useCallback((value) => setCompanyWebsite(value), [])
  const [companyStreetAddress, setCompanyStreetAddress] = useState('shop.address1')
  const handleCompanyStreetAddressChange= useCallback((value) => setCompanyStreetAddress(value), [])

  const [city, setCity] = useState('shop.city')
  const handleCityChange = useCallback((value) => setCity(value), [])
  const [stateProvince, setStateProvince] = useState('shop.province')
  const handleStateProvinceChange = useCallback((value) => setStateProvince(value), [])
  const [zip, setZip] = useState('shop.zip')
  const handleZipChange= useCallback((value) => setZip(value), [])

  const [correspondence, setCorrespondence] = useState('')
  const handleCorrespondenceChange = useCallback((value) => setCorrespondence((value === 'true')), [])
  const [jurisdiction, setJurisdiction] = useState('')
  const handleJurisdictionChange = useCallback((value) => setJurisdiction(value), [])
  const [depositAccountNumber, setDepositAccountNumber] = useState('')
  const handleDepositAccountNumberChange= useCallback((value) => setDepositAccountNumber(value), [])

  const [annualRevenue, setAnnualRevenue] = useState('')
  const handleAnnualRevenueChange= useCallback((value) => setAnnualRevenue(value), [])

  const [password, setPassword] = useState('')
  const handlePasswordChange = useCallback((value) => setPassword(value), [])

  const onFormSubmit = () => {
    alert('Lấy các biến giá trị bên trong file SignUp.js rồi xử lý tiếp.')
  }

  return (
    <div className="signup-page">
      <Page>
        <div className="heading-welcome">
          <div className="header-logo">
            <img src={topLogo} alt="" />
          </div>
          <Heading element="h1">Register Account</Heading>
          <TextStyle variation="subdued">Let&apos;s get you setup so you can sell your Product on Pod Foods.</TextStyle>
        </div>

        <div className="layout">
          <div className="heading"><Heading element="h1">Vendor Company</Heading></div>
          <Layout>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Company name" type="text" value={companyName} onChange={handleCompanyNameChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="EIN" type="number" value={ein} onChange={handleEinChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Contact email" type="email" value={contactEmail}
                  placeholder="shop.email" onChange={handleContactEmailChange}
                />
              </div>
            </Layout.Section>

            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Contact First Name" type="text" value={contactFirstName} onChange={handleContactFirstNameChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Contact Last Name" type="text" value={contactLastName} onChange={handleContactLastNameChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Contact Phone Number" type="text" value={conntactPhoneNumber} onChange={handleConntactPhoneNumberChange} />
              </div>
            </Layout.Section>

            <Layout.Section oneThird>
              <div className="form-component">
                <Select label="Are you the Primary Contact for Company?" options={[
                  {label: 'No', value: false},
                  {label: 'Yes', value: true}
                ]} onChange={handlePrimaryContactChange} value={primaryContact} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <Select label="Are you the Quality Control Contact for Company?" options={[
                  {label: 'No', value: false},
                  {label: 'Yes', value: true}
                ]} onChange={handleQualityControlContactChange} value={qualityControlContact} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <Select label="Are you the Recall Contact for Company?" options={[
                  {label: 'No', value: false},
                  {label: 'Yes', value: true}
                ]} onChange={handleRecallContactChange} value={recallContact} />
              </div>
            </Layout.Section>

            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="State Bottle Deposit Account Number (optional)" type="text" value={depositAccountNumber} onChange={handleDepositAccountNumberChange} placeholder="Please enter if applicable." />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Web address / Company URL" type="text" value={companyWebsite} onChange={handleCompanyWebsiteChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Company Street Address" type="text" value={companyStreetAddress} onChange={handleCompanyStreetAddressChange} />
              </div>
            </Layout.Section>

            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="City" type="text" value={city} onChange={handleCityChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="State / Province" type="text" value={stateProvince} onChange={handleStateProvinceChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Zip / Postal Code" type="text" value={zip} onChange={handleZipChange} />
              </div>
            </Layout.Section>

            <Layout.Section oneThird>
              <div className="form-component">
                <Select label="Is this the best address for official and time-sensitive correspondence?" options={[
                  {label: 'No', value: false},
                  {label: 'Yes', value: true}
                ]} onChange={handleCorrespondenceChange} value={correspondence} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <Select label="Are you the Emergency Contact for Company outside of business hours?" options={[
                  {label: 'No', value: false},
                  {label: 'Yes', value: true}
                ]} onChange={handleEmergencyContactChange} value={emergencyContact} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Jurisdiction of Business Incorporation or Organization" type="text" value={jurisdiction} onChange={handleJurisdictionChange} placeholder="The state where your business was legally formed" />
              </div>
            </Layout.Section>

            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Annual Revenue" type="text" value={annualRevenue} onChange={handleAnnualRevenueChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                &nbsp;
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                &nbsp;
              </div>
            </Layout.Section>

          </Layout>

          <div className="heading"><Heading element="h1">Vendor Account</Heading></div>
          <Layout>

            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Name" type="text" value={`${contactFirstName} ${contactLastName}`} disabled={true} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Company" type="text" value={`${companyName}`} disabled={true} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Address" type="text" value={`${companyStreetAddress}`} disabled={true} />
              </div>
            </Layout.Section>
        
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Email" type="text" value={`${contactEmail}`} disabled={true} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                <TextField label="Password" type="password" value={password}  onChange={handlePasswordChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component">
                &nbsp;
              </div>
            </Layout.Section>

          </Layout>
        </div>

        <div className="actions">
          <div className="complete-btn btn">
            <Button primary onClick={onFormSubmit}>Register</Button>
          </div>
        </div>

      </Page>
    </div>
  )
}
