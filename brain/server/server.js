const express = require('express')
const app = express();
const cors = require('cors');

const router = express.Router()

app.use(express.json())
app.use(cors());

const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment:  braintree.Environment.Sandbox,
    //replace with your sandbox api keys
    merchantId:   '4pfxqdwnmmh5ksvc',
    publicKey:    'v3rxrn2jptswxdbt',
    privateKey:   'daa3ab3b4dd5bb78ac7ddfc49f29f70d'
});

/*
gateway.clientToken.generate({
  customerId: 1
}, (err, response) => {
  // pass clientToken to your front-end
  const clientToken = response.clientToken
});

app.get("/client_token", (req, res) => {
  gateway.clientToken.generate({}, (err, response) => {
    res.send(response.clientToken);
  });
});
*/

app.post("/checkout", (req, res) => {
  const nonceFromTheClient = req.body.payment_method_nonce;
  // Use payment method nonce here
  gateway.transaction.sale({
    amount: "1001.00",
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, (err, result) => {
    console.log(err);
    console.log(result);
  });
  console.log("completed");
});

/*
const brainTreePaymentController = async (req,res) => {
    try {
        const { nonce} = req.body;
        let total = 10;
        let newTransaction = gateway.transaction.sale(
          {
            amount: total,
            paymentMethodNonce: nonce,
            options: {
              submitForSettlement: true,
            },
          },
          function (error, result) {
            if (result) {
              res.json({ ok: true });
            } else {
              res.status(500).send(error);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
}

router.post("/braintree/payment", brainTreePaymentController);
*/

app.listen(8000,() => {
    console.log('Car Running on port 8000');
})
