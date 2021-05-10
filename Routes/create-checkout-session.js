const bodyParser = require("body-parser");
const express = require("express");
var router = express.Router();

const stripe = require("stripe")(
  "sk_test_51IIuseIHN65y8kg7lLMgt3MCe2IzBbiC2LFkLnFAfMKJ43dbrcpFA4WskniemhAQVWcvyJ5HJvxTJPnQQ2ABNIh400u9tMRnQh"
);

router
  .route("/")
  .get(async (req, res) => {
    res.json({ success: true });
  })
  .post(async (req, res) => {
    const data = req.body;
    console.log(data);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: data.name,
              images: [data.img]
            },
            unit_amount: data.price
          },
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/cancel"
    });

    res.json({ id: session.id });
  });

module.exports = router;
