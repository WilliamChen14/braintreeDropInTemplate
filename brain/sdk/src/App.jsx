import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BraintreeDropIn from './BraintreeDropin'

import {Col, Container, Input, Row, Button} from "reactstrap";

function App() {
  const [showBraintreeDropIn, setShowBraintreeDropIn] = useState(true);
  return (
    <>
    <div>hello</div>
      <BraintreeDropIn
                show={showBraintreeDropIn}
                onPaymentCompleted={() => {
                    setShowBraintreeDropIn(true);

                }}
            />
    </>
  )
}

export default App
