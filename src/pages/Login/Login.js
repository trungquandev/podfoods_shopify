import React, { useState, useCallback } from 'react';
import 'App.scss'
import topLogo from 'resources/images/logo.color.svg'
import emptyStateImg from 'resources/images/empty-state.svg';

import {
  Page, Layout, EmptyState, Link, Modal, Stack, TextField,
  Button, AccountConnection
} from '@shopify/polaris'

export default function Login() {
  const [activeModal, setActiveModal] = useState(false);
  const toggleModal = useCallback(() => setActiveModal((activeModal) => !activeModal), []);

  const [email, setEmail] = useState('')
  const handleEmailChange = useCallback((value) => setEmail(value), [])

  const [password, setPassword] = useState('')
  const handlePasswordChange = useCallback((value) => setPassword(value), [])

  const [connected, setConnected] = useState(false)
  const onConnect = useCallback(() => {
    // open modal login, you can setConnected at function handleSubmit
    if (!connected) toggleModal()
  }, [connected, toggleModal])

  const onDisconnect = useCallback(() => {
    setConnected(false)
  }, [])

  const handleSubmit = useCallback(() => {
    if (!email || !password) {
      alert('vui lòng nhập thông tin')
      return
    }
    alert(`Bạn vừa nhập email: ${email} và password: ${password}, giả lập login thành công và sẽ đóng modal này tiếp theo.`)

    // Login success => setConnected = true and setActiveModal = false
    setConnected(true)
    setActiveModal(false)
  }, [email, password])

  return (
    <div className="login-page">
      <Page>
        <Layout>
          <div className="empty-state-content">
            <EmptyState
              heading="Sell your products on Pod Foods"
              image={emptyStateImg}
              footerContent={
                <p>
                  <Link monochrome external url="https://podfoods.co/signup">
                    Sign up for Pod Foods.
                  </Link>
                </p>
              }
            >
              <p className="empty-state-description">
                React shoppers while they&apos;re browsing trending posts in the Pod Foods app.
              </p>
              <div className="account-markup">
                {connected
                  ? <DisconnectAccount onAction={onDisconnect} />
                  : <ConnectAccount onAction={onConnect} />
                }
              </div>
              <LoginModal
                activeModal={activeModal}
                toggleModal={toggleModal}
                email={email}
                handleEmailChange={handleEmailChange}
                password={password}
                handlePasswordChange={handlePasswordChange}
                handleSubmit={handleSubmit}
              />
            </EmptyState>
          </div>
        </Layout>
      </Page>
    </div>
  )
}

function LoginModal({
  activeModal,
  toggleModal,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  handleSubmit
}) {
  return (
    <Modal
      open={activeModal}
      onClose={toggleModal}
      title="Pod Foods - Connect account"
      primaryAction={{
        content: 'Close',
        onAction: toggleModal,
      }}
    >
      <Modal.Section>
        <div className="login-modal">
          <Stack vertical>
            <Stack.Item>
              <div className="header">
                <div className="header-logo">
                  <img src={topLogo} alt="" />
                </div>
              </div>
            </Stack.Item>
            <Stack.Item fill>
              <div className="form-login">
                <div className="form-component email-field">
                  <TextField
                    label="Email or username"
                    type="email"
                    value={email}
                    placeholder="email@podfoods.co"
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-component password-field">
                  <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="form-component button-field">
                  <Button
                    primary
                    onClick={handleSubmit}
                  >Connect</Button>
                </div>
                <div className="form-component help-text">
                  By connecting your account you agree to the Pod Foods <a href="https://podfoods.co/terms-of-service" target="blank">terms & conditions</a>.
                </div>
              </div>
            </Stack.Item>
          </Stack>
        </div>
      </Modal.Section>
    </Modal>
  )
}

function ConnectAccount({ onAction }) {
  return (
    <AccountConnection
      action={{content: 'Connect account', onAction}}
      details="No account connected"
    />
  );
}

function DisconnectAccount({ onAction }) {
  return (
    <AccountConnection
      connected
      action={{content: 'Disconnect', onAction}}
      accountName="Trungquandev"
      title={<Link url="https://trungquandev.com">Test: Trungquandev</Link>}
      details="Account id: test_trungquandev_g1a2a87d63huv7"
    />
  );
}
