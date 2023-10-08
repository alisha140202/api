const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// POST method endpoint
app.post("/bfhl", (req, res) => {
  const requestData = req.body.data;

  // Implement your logic here to process the requestData
  // You can extract the required values and compute the response

  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers: requestData.filter(item => !isNaN(item)),
    alphabets: requestData.filter(item => isNaN(item) && /^[a-zA-Z]$/.test(item)),
    highest_alphabet: ["M"], // You'll need to compute this value based on your logic
  };

  res.json(response);
});

// GET method endpoint
app.get("/bfhl", (req, res) => {
  // Respond with a hardcoded operation_code
  res.json({ operation_code: 1 });
});

module.exports = app;
