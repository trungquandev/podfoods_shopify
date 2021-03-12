import React from 'react'
import 'App.scss'
import { Link } from "react-router-dom";
import {
  Layout, Card, List
} from '@shopify/polaris'

export default function Home() {
  return (
    <Layout>
      <Layout.Section>
        <div className="home-page-links">
          <Card title="Pod Foods Shopify Pages" sectioned>
            <List>
              <List.Item>
                <Link to="/login">Login Page</Link>
              </List.Item>
              <List.Item>
                <Link to="/qualifying-steps">Qualifying Steps</Link>
              </List.Item>
              <List.Item>
                <Link to="/account-page">Account Page</Link>
              </List.Item>
            </List>
          </Card>
        </div>
      </Layout.Section>
    </Layout>
  )
}