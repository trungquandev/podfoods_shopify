import React, { useState, useCallback } from 'react';
import 'App.scss'
import topLogo from 'resources/images/logo.color.jpg'

import { ProgressBar, Step } from 'react-step-progress-bar'
import "react-step-progress-bar/styles.css";

import {
  Modal, Stack, Select, Button
} from '@shopify/polaris'

export default function QualifyingSteps() {
  const productOptions = [
    {label: 'Product 01', value: 'p_01'},
    {label: 'Product 02', value: 'p_02'},
    {label: 'Product 03', value: 'p_03'}
  ];
  const categoryOptions = [
    {label: 'Category 01', value: 'c_01'},
    {label: 'Category 02', value: 'c_02'},
    {label: 'Category 03', value: 'c_03'}
  ];
  const [product, setProduct] = useState('p_01');
  const [category, setCategory] = useState('c_01');

  const handleProductChange = useCallback((value) => {
    setProduct(value)
  }, [])
  const handleCategoryChange = useCallback((value) => {
    setCategory(value)
  }, [])

  const onFormSubmit = () => {
    alert(`Submit product: ${product} -  Category: ${category}`)
  }

  const [activePage, setActivePage] = useState(0)
  const handleChangePageStep = useCallback((type) => {
    if (type === 'next') {
      setActivePage(activePage + 50)
    }
    if (type === 'prev') {
      setActivePage(activePage - 50)
    }
  }, [activePage])

  return (
    <Modal
      open={true}
      // onClose={toggleModal}
      // title="Pod Foods - Connect account"
      // primaryAction={{
      //   content: 'Close',
      //   onAction: toggleModal,
      // }}
    >
      <Modal.Section>
        <div className="qualify-modal">
          <Stack vertical>
            <Stack.Item>
              <div className="header">
                <div className="header-logo">
                  <img src={topLogo} alt="" />
                </div>
                <div className="header-description">
                  Your Shopify account has been connected to <a href="https://podfoods.co" target="blank">Pod Foods</a>. To help you get set up, tell us a bit about your business.
                </div>
              </div>
            </Stack.Item>
            <Stack.Item fill>
              <div className="qualifying-steps">
                <div className="container-progress-bar">
                  <ProgressBar
                    filledBackground="#6371c7"
                    percent={activePage}
                  >
                    <Step transition="scale">
                      {({ accomplished, index }) => (
                        <div className={`transitionStep ${accomplished ? "accomplished" : null}`}>
                          <span className="step-number">1</span>
                        </div>
                      )}
                    </Step>
                    <Step transition="scale">
                      {({ accomplished, index }) => (
                        <div className={`transitionStep ${accomplished ? "accomplished" : null}`}>
                          <span className="step-number">2</span>
                        </div>
                      )}
                    </Step>
                    <Step transition="scale">
                      {({ accomplished, index }) => (
                        <div className={`transitionStep ${accomplished ? "accomplished" : null}`}>
                          <span className="step-number">3</span>
                        </div>
                      )}
                    </Step>
                  </ProgressBar>
                  
                  {activePage === 0 &&
                    <div className="step-content">
                      <div className="header">
                        <p className="heading">Product categories</p>
                        <p className="sub-heading">Select the categories that best describes the products you sell.</p>
                      </div>
                      <div className="form-component product-field">
                        <Select
                          label="Product"
                          options={productOptions}
                          onChange={handleProductChange}
                          value={product}
                        />
                      </div>
                      <div className="form-component category-field">
                        <Select
                          label="Category"
                          options={categoryOptions}
                          onChange={handleCategoryChange}
                          value={category}
                        />
                      </div>
                    </div>
                  }
                  {activePage === 50 &&
                    <div className="step-content">
                      <div className="header">
                        <p className="heading">Test Page 02</p>
                        <p className="sub-heading">Select the categories that best describes the products you sell.</p>
                      </div>
                    </div>
                  }
                  {activePage === 100 &&
                    <div className="step-content">
                      <div className="header">
                        <p className="heading">Test Page 03</p>
                        <p className="sub-heading">Select the categories that best describes the products you sell.</p>
                      </div>
                    </div>
                  }

                  <div className="actions">
                    {activePage > 0 &&
                      <div className="previous-btn btn">
                        <Button
                          primary
                          disabled={activePage <= 0}
                          onClick={() => handleChangePageStep('prev')}>Previous</Button>
                      </div>
                    }
                    {activePage < 100 &&
                      <div className="next-btn btn">
                        <Button
                          primary
                          disabled={activePage >= 100}
                          onClick={() => handleChangePageStep('next')}>Next</Button>
                      </div>
                    }

                    {activePage === 100 &&
                      <div className="complete-btn btn">
                        <Button
                          primary
                          onClick={onFormSubmit}>Complete Setup</Button>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </Stack.Item>
          </Stack>
        </div>
      </Modal.Section>
    </Modal>
  )
}
