import React, { useState, useCallback } from 'react';
import 'App.scss'

import {
  Page, Layout, Card, Banner, Heading, Modal,
  TextContainer, TextStyle, AccountConnection,
  Link, Stack, Badge, ResourceList, ResourceItem,
  Thumbnail, Tooltip
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
                <Card.Section title="Product status"  actions={[{content: 'Manage availability'}]}>
                  <div className="product-banner-status">
                    <Banner
                      title="Pod Foods Marketplace is reviewing your store"
                      status="info"
                      onDismiss={() => {}}
                    >
                      <p>Make sure you know how these changes affect your store.</p>
                    </Banner>

                    <Banner
                      title="Some of your product variants are missing weights"
                      status="critical"
                      action={{content: 'Add information', url: ''}}
                      secondary={{content: 'Learn more', url: ''}}
                      onDismiss={() => {}}
                    >
                      <p>
                        Add weights to show accurate rates at checkout and when buying shipping
                        labels in Shopify.
                      </p>
                    </Banner>
                  </div>

                  <div className="available-product-quantity">
                    <TextStyle><strong>199</strong> products are available on Pod Foods</TextStyle>
                  </div>

                  <div className="product-badge-status published">
                    <Badge progress="complete">Published</Badge>
                    <TextStyle variation="strong"><span className="product-quantity">199 products</span></TextStyle>
                  </div>
                  <div className="product-badge-status not-published">
                    <Badge progress="incomplete">Not published</Badge>
                    <TextStyle variation="strong"><span className="product-quantity">199 products</span></TextStyle>
                  </div>
                </Card.Section>
                <Card.Section>
                  Marketplace takes up to 3 business days to review published products.
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>
        </div>

        <div className="layout">
          <Layout>
            <Layout.Section>
              <TextContainer>
                <Heading>Currently Synced Products</Heading>
                <p>
                  <TextStyle variation="subdued">Start importing your products into Pod Foods now!</TextStyle>
                </p>
              </TextContainer>
            </Layout.Section>
            <Layout.Section>
              <div className="currently-synced-products">
                <Card>
                  <ResourceList
                    resourceName={{singular: 'product', plural: 'products'}}
                    items={[
                      {
                        id: 1,
                        name: 'Product 01',
                        brand: 'Brand 01',
                        url: 'https://beta.podfoods.co/vendor_dashboard/products/2804/edit',
                        thumnail: 'https://d1xbnuum9tac48.cloudfront.net/images/10166/small/ci-kingfisher-lager-beer-b7b0d48fa0141730.jpeg'
                      },
                      {
                        id: 2,
                        name: 'Product 02',
                        brand: 'Brand 02',
                        url: 'https://beta.podfoods.co/vendor_dashboard/products/2804/edit',
                        thumnail: 'https://d1xbnuum9tac48.cloudfront.net/images/10166/small/ci-kingfisher-lager-beer-b7b0d48fa0141730.jpeg'
                      },
                      {
                        id: 2,
                        name: 'Product 02',
                        brand: 'Brand 02',
                        url: 'https://beta.podfoods.co/vendor_dashboard/products/2804/edit',
                        thumnail: 'https://d1xbnuum9tac48.cloudfront.net/images/10166/small/ci-kingfisher-lager-beer-b7b0d48fa0141730.jpeg'
                      },
                      {
                        id: 2,
                        name: 'Product 02',
                        brand: 'Brand 02',
                        url: 'https://beta.podfoods.co/vendor_dashboard/products/2804/edit',
                        thumnail: 'https://d1xbnuum9tac48.cloudfront.net/images/10166/small/ci-kingfisher-lager-beer-b7b0d48fa0141730.jpeg'
                      },
                      {
                        id: 2,
                        name: 'Product 02',
                        brand: 'Brand 02',
                        url: 'https://beta.podfoods.co/vendor_dashboard/products/2804/edit',
                        thumnail: 'https://d1xbnuum9tac48.cloudfront.net/images/10166/small/ci-kingfisher-lager-beer-b7b0d48fa0141730.jpeg'
                      },
                    ]}
                    renderItem={(item) => {
                      const {id, url, name, brand, thumnail} = item;
                      const media = <Thumbnail
                        source={thumnail}
                        alt={`${name}-${brand}`}
                      />

                      return (
                        <ResourceItem
                          id={id}
                          media={media}
                        >
                          <h3>
                            <TextStyle variation="strong">{name}</TextStyle>
                            <Tooltip
                              dismissOnMouseOut
                              preferredPosition="above"
                              content="View on Pod Foods"
                            >
                              <span className="preview-product"><Link className="preview-product" external url={url}>&nbsp;</Link></span>
                            </Tooltip>
                          </h3>
                          <div>{brand}</div>
                        </ResourceItem>
                      );
                    }}
                    showHeader
                    totalItemsCount={50}
                  />
                </Card>
              </div>
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
