import React, { useState, useCallback, useEffect } from 'react';
import 'App.scss'

import {
  Page, Layout, Card, Heading, TextStyle, Link,
  ResourceList, ResourceItem, Thumbnail, Tooltip
} from '@shopify/polaris'

export default function AccountPage() {
  const [syncedProducts, setSyncedProducts] = useState([])

  useEffect(() => {
    // Call api get synced product here and update State
    setSyncedProducts([
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
    ])
  }, [])

  return (
    <div className="account-page">
      <Page>
        <div className="heading-welcome">
          <Heading element="h1">Currently Synced Products</Heading>
          <TextStyle variation="subdued">Start importing your products into Pod Foods now!</TextStyle>
        </div>

        <div className="layout">
          <Layout>
            <Layout.Section>
              <div className="currently-synced-products">
                <Card>
                  <ResourceList
                    resourceName={{singular: 'product', plural: 'products'}}
                    items={syncedProducts}
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
      </Page>
    </div>
  )
}
