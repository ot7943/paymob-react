<p align="center">
  <a href="https://seifradwane.com/" rel="noopener" target="_blank"><img width='280' src="https://media.publit.io/file/paymob-logo.webp" alt="Paymob Logo"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License">
</p>

Paymob React 💳 is a lightweight package designed to streamline online payment integration with Paymob services. It's built using React and TypeScript, providing a seamless development experience for incorporating secure payment functionality into your web applications.

## Installation 🔨

To install Paymob React, use npm or yarn:

\`\`\`bash
npm install paymob-react
# or
yarn add paymob-react
\`\`\`

## Usage

### Card Payment 💳

\`\`\`typescript
import React from "react";
import { startCardProcess } from "paymob-react";

function CardPaymentExample() {
  const handleCardPayment = async () => {
    try {
      await startCardProcess({
        amount: 1000, // Amount in your currency (e.g., 1000 for 10.00 EGP)
        currency: "EGP", // Currency code
        courseTitle: "Product Name",
        courseDescription: "Description of the product",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "+1234567890",
        userId: 123456,
        courseId: 789012,
        paymobApiKey: "your_paymob_api_key",
        cardIntegrationId: 1984360,
        iframeId: 369734,
      });
      console.log("Card payment process started successfully.");
    } catch (error) {
      console.error("Error starting card payment process:", error);
    }
  };

  return (
    <div>
      <h1>Card Payment Example</h1>
      <button onClick={handleCardPayment}>Start Card Payment</button>
    </div>
  );
}

export default CardPaymentExample;
\`\`\`

### Wallet Payment 💸

\`\`\`typescript
import React from "react";
import { startWalletProcess } from "paymob-react";

function WalletPaymentExample() {
  const handleWalletPayment = async () => {
    try {
      await startWalletProcess({
        amount: 1000,
        currency: "EGP",
        courseTitle: "Product Name",
        courseDescription: "Description of the product",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "+1234567890",
        userId: 123456,
        courseId: 789012,
        paymobApiKey: "your_paymob_api_key",
        walletIntegrationId: 1996357,
        iframeId: 369734,
        mobileNumber: "01010101010",
      });
      console.log("Wallet payment process started successfully.");
    } catch (error) {
      console.error("Error starting wallet payment process:", error);
    }
  };

  return (
    <div>
      <h1>Wallet Payment Example</h1>
      <button onClick={handleWalletPayment}>Start Wallet Payment</button>
    </div>
  );
}

export default WalletPaymentExample;
\`\`\`

## Configuration

Before using the package, you'll need:

1. A Paymob account
2. API Key from your Paymob dashboard
3. Integration IDs for card and/or wallet payments
4. Iframe ID for the payment form

## Error Handling

All payment functions throw errors that should be caught and handled appropriately:

\`\`\`typescript
try {
  await startCardProcess({...});
} catch (error) {
  console.error("Payment failed:", error);
  // Handle the error appropriately
}
\`\`\`

## How to Contribute 🤝

Contributions to Paymob React are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them
4. Push your changes to your fork
5. Submit a pull request to the main repository

## License ⚖️

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For any questions or issues, please [open an issue](https://github.com/seifeldinio/paymob-react/issues) on GitHub.