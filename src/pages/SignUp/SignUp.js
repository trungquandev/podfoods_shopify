import React, { useState, useCallback, useEffect, createRef } from 'react';
import 'App.scss'
import { cloneDeep } from 'lodash'

import {
  Page, Layout, TextField, Heading, TextStyle, Select, Button, Banner, List
} from '@shopify/polaris'
import topLogo from 'resources/images/logo.color.jpg'

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

  const [password, setPassword] = useState('')
  const handlePasswordChange = useCallback((value) => setPassword(value), [])

  const [listInputRefs, setListInputRefs] = React.useState({})
  const FIELD_IDS = {
    company_name: 'company_name',
    ein: 'ein',
    contact_email: 'contact_email',
    contact_first_name: 'contact_first_name',
    contact_last_name: 'contact_last_name',
    contact_phone_number: 'contact_phone_number',
    company_url: 'company_url',
    company_street_address: 'company_street_address',
    city: 'city',
    state_province: 'state_province',
    zip_portal_code: 'zip_portal_code'
  }
  useEffect(() => {
    const newListInputRefs = cloneDeep(listInputRefs)
    Object.keys(FIELD_IDS).forEach(key => newListInputRefs[`${FIELD_IDS[key]}`] = createRef())
    setListInputRefs(newListInputRefs)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFormSubmit = () => {
    /**
     * Ví dụ cái error đầu tiên trong mảng errors của anh là company name, nó sẽ có key trong mảng FIELD_IDS là company_name.
     * Thì chạy dòng dưới đây để nó scroll đến cái thằng error,
     * lưu ý là phải xử lý đúng key theo cái mảng FIELD_IDS ở trên nhé ạ.
     */
    listInputRefs[`${FIELD_IDS.company_name}`].current.scrollIntoView({ behavior: 'smooth' })

    // alert('Lấy các biến giá trị bên trong file SignUp.js rồi xử lý tiếp.')
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

        <div className="error-banner">
          <Banner
            title="To create account, 3 changes need to be made:"
            onDismiss={() => {}}
            status="critical"
          >
            <List type="bullet">
              <List.Item>Company name error</List.Item>
              <List.Item>Red shirt error</List.Item>
              <List.Item>Green shirt error</List.Item>
            </List>
          </Banner>
        </div>

        <div className="layout">
          <div className="heading"><Heading element="h1">Vendor Company</Heading></div>
          <Layout>
            <Layout.Section oneThird>
              <div className="form-component" ref={listInputRefs[`${FIELD_IDS.company_name}`]}>
                <TextField
                  label="Company name"
                  type="text"
                  value={companyName}
                  onChange={handleCompanyNameChange}
                  // error={null}
                  error="Company name error on the field"
                />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component" ref={listInputRefs[`${FIELD_IDS.ein}`]}>
                <TextField label="EIN" type="text" value={ein} onChange={handleEinChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component" ref={listInputRefs[`${FIELD_IDS.contact_email}`]}>
                <TextField label="Contact email" type="email" value={contactEmail}
                  placeholder="shop.email" onChange={handleContactEmailChange}
                />
              </div>
            </Layout.Section>

            <Layout.Section oneThird>
              <div className="form-component" ref={listInputRefs[`${FIELD_IDS.contact_first_name}`]}>
                <TextField label="Contact First Name" type="text" value={contactFirstName} onChange={handleContactFirstNameChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component" ref={listInputRefs[`${FIELD_IDS.contact_last_name}`]}>
                <TextField label="Contact Last Name" type="text" value={contactLastName} onChange={handleContactLastNameChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component" ref={listInputRefs[`${FIELD_IDS.contact_phone_number}`]}>
                <TextField label="Contact Phone Number" type="text" value={conntactPhoneNumber} onChange={handleConntactPhoneNumberChange} />
              </div>
            </Layout.Section>

            <Layout.Section oneThird>
              <div className="form-component" ref={listInputRefs[`${FIELD_IDS.company_url}`]}>
                <TextField label="Web address / Company URL" type="text" value={companyWebsite} onChange={handleCompanyWebsiteChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component" ref={listInputRefs[`${FIELD_IDS.company_street_address}`]}>
                <TextField label="Company Street Address" type="text" value={companyStreetAddress} onChange={handleCompanyStreetAddressChange} />
              </div>
            </Layout.Section>

            <Layout.Section oneThird>
              <div className="form-component" ref={listInputRefs[`${FIELD_IDS.city}`]}>
                <TextField label="City" type="text" value={city} onChange={handleCityChange} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component" ref={listInputRefs[`${FIELD_IDS.state_province}`]}>
                <Select label="State / Province" options={[
                  {label: 'Alabama', value: 'Alabama'},
                  {label: 'Test 1', value: 'Test 1'},
                  {label: 'Test 2', value: 'Test 2'},
                ]} onChange={handleStateProvinceChange} value={stateProvince} />
              </div>
            </Layout.Section>
            <Layout.Section oneThird>
              <div className="form-component" ref={listInputRefs[`${FIELD_IDS.zip_portal_code}`]}>
                <TextField label="Zip / Postal Code" type="text" value={zip} onChange={handleZipChange} />
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
