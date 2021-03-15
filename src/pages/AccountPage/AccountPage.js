import React, { useState, useCallback } from 'react';
import 'App.scss'

import {
  Page, Layout, Card, Banner, Heading, Modal, TextContainer, TextStyle, AccountConnection, Link, Stack
} from '@shopify/polaris'

export default function AccountPage() {
  
  const [activeModal, setActiveModal] = useState(false)
  const toggleModal = useCallback(() => setActiveModal((activeModal) => !activeModal), [])

  const onDisconnect = () => {
    // do some thing
    alert('do something')
    toggleModal()
  }

  return (
    <div className="account-page">
      <Page>
        <div className="heading-welcome">
          <Heading element="h1">Welcome to Pod Foods</Heading>
          <TextStyle variation="subdued">Let&apos;s get you setup so you can sell your Product on Pod Foods.</TextStyle>
        </div>

        <div className="banner">
          <Banner
            title="Pod Foods Marketplace is reviewing your store"
            status="info"
            onDismiss={() => {}}
          >
            <p>Make sure you know how these changes affect your store.</p>
          </Banner>
        </div>

        <div className="banner">
          <Banner
            title="Pod Foods Marketplace is reviewing your store"
            status="success"
            onDismiss={() => {}}
          >
            <p>Make sure you know how these changes affect your store.</p>
          </Banner>
        </div>

        <div className="banner">
          <Banner
            title="Pod Foods Marketplace is reviewing your store"
            status="warning"
            onDismiss={() => {}}
          >
            <p>Make sure you know how these changes affect your store.</p>
          </Banner>
        </div>

        <div className="banner">
          <Banner
            title="Pod Foods Marketplace is reviewing your store"
            status="critical"
            onDismiss={() => {}}
          >
            <p>Make sure you know how these changes affect your store.</p>
          </Banner>
        </div>

        <div className="layout">
          <Layout>
            <Layout.Section oneThird>
              <div className="content-left">
                <TextContainer>
                  <Heading>App requirement</Heading>
                  <p>
                    <TextStyle variation="subdued">Complete this checklist before you connect your accounts to ensure that your shop meets Marketplace guidelines.</TextStyle>
                  </p>
                </TextContainer>
              </div>
            </Layout.Section>
            <Layout.Section>
            <Card title="Pod Foods">
              <Card.Section title="Reports"  actions={[{content: 'Need help?'}]}>
                <p>View a summary of your online store’s performance.</p>
              </Card.Section>
            </Card>
            </Layout.Section>
          </Layout>
        </div>

        <div className="layout">
          <Layout>
            <Layout.Section oneThird>
              <div className="content-left">
                <TextContainer>
                  <Heading>Marketplace account</Heading>
                  <p>
                    <TextStyle variation="subdued">Connect your Marketplaces account so you can manage and sunc with Marketplace.</TextStyle>
                  </p>
                </TextContainer>
              </div>
            </Layout.Section>
            <Layout.Section>
              <div className="account-connection-block">
                <DisconnectAccount onAction={toggleModal} />
              </div>
            </Layout.Section>
          </Layout>
        </div>

        <div className="layout">
          <Layout>
            <Layout.Section oneThird>
              <div className="content-left">
                <TextContainer>
                  <Heading>Publishing</Heading>
                  <p>
                    <TextStyle variation="subdued">Connect your Marketplaces account so you can manage and sunc with Marketplace.</TextStyle>
                  </p>
                </TextContainer>
              </div>
            </Layout.Section>
            <Layout.Section>
              <Card>
                <Card.Section title="Product status"  actions={[{content: 'Need help?'}]}>
                  <div className="product-status">
                    <Banner
                      title="Pod Foods Marketplace is reviewing your store"
                      status="info"
                      onDismiss={() => {}}
                    >
                      <p>Make sure you know how these changes affect your store.</p>
                    </Banner>
                  </div>
                  <p>
                    <TextStyle variation="strong">199 products are available on Pod Foods</TextStyle>
                  </p>
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>
        </div>

        <div className="disconnect-account-modal">
          <Modal
            open={activeModal}
            onClose={toggleModal}
            title="Disconnect Pod Foods account?"
            primaryAction={{
              content: 'Disconnect',
              onAction: onDisconnect,
            }}
            secondaryActions={[
              {
                content: 'Cancel',
                onAction: toggleModal,
              },
            ]}
          >
            <Modal.Section>
              <div className="-modal">
                <Stack vertical>
                  <Stack.Item>
                    <TextContainer>
                      <p>Disconnecting your Pod Foods account  will remove your product from Pod Foods marketplace.</p>
                      <p>You can reconnect your account at anytime to continue selling on Pod Foods.</p>
                    </TextContainer>
                  </Stack.Item>
                </Stack>
              </div>
            </Modal.Section>
          </Modal>
        </div>
      </Page>
    </div>
  )
}

function DisconnectAccount({ onAction }) {
  return (
    <AccountConnection
      connected
      action={{content: 'Disconnect', onAction}}
      accountName="Trungquandev"
      title={<Link url="https://podfoods.co">Test: Pod Foods</Link>}
      details="Account id: test_trungquandev_g1a2a87d63huv7"
    />
  );
}
