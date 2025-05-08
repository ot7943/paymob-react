<p align="center">
  <a href="https://seifradwane.com/" rel="noopener" target="_blank"><img width='280' src="https://media.publit.io/file/paymob-logo.webp" alt="Paymob Logo"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License">
</p>

# Paymob React

A lightweight, type-safe React package for integrating Paymob payment services into your web applications. Built with TypeScript and React, this package provides a seamless way to handle both card and wallet payments.

## Features 🚀

- ✨ Simple, intuitive API
- 🔒 Type-safe implementation
- 💳 Support for card payments
- 📱 Support for wallet payments
- 🛡️ Built-in error handling
- 📦 Zero dependencies (except React)
- 📝 Comprehensive TypeScript types

## Installation 🔨

```bash
npm install paymob-react
# or
yarn add paymob-react
# or
pnpm add paymob-react
```

## Prerequisites 📋

Before using this package, you'll need:

1. A Paymob account - [Sign up here](https://paymob.com)
2. API Key from your [Paymob dashboard](https://accept.paymob.com/portal2/en/settings)
3. Integration IDs for:
   - Card payments
   - Wallet payments (if using wallet payments)
4. Iframe ID for the payment form

## Usage 💻

### Card Payment 💳

```typescript
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
      <button onClick={handleCardPayment}>Pay with Card</button>
    </div>
  );
}

export default CardPaymentExample;
```

### Wallet Payment 💸

```typescript
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
      <button onClick={handleWalletPayment}>Pay with Wallet</button>
    </div>
  );
}

export default WalletPaymentExample;
```

## API Reference 📚

### Card Payment Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| amount | number | Payment amount in currency's smallest unit (e.g., cents) |
| currency | string | Currency code (e.g., "EGP", "USD") |
| courseTitle | string | Name or title of the product/service |
| courseDescription | string | Description of the product/service |
| firstName | string | Customer's first name |
| lastName | string | Customer's last name |
| email | string | Customer's email address |
| phoneNumber | string | Customer's phone number with country code |
| userId | number | Unique identifier for the customer |
| courseId | number | Unique identifier for the product/service |
| paymobApiKey | string | Your Paymob API key |
| cardIntegrationId | number | Paymob card integration ID |
| iframeId | number | Paymob iframe ID |

### Wallet Payment Parameters
Includes all card payment parameters plus:

| Parameter | Type | Description |
|-----------|------|-------------|
| walletIntegrationId | number | Paymob wallet integration ID |
| mobileNumber | string | Customer's mobile number for wallet |

## Error Handling 🚨

The package includes comprehensive error handling. Always wrap payment calls in try-catch blocks:

```typescript
try {
  await startCardProcess({...});
} catch (error) {
  if (error instanceof Error) {
    // Handle specific error types
    console.error("Payment failed:", error.message);
  }
  // Implement appropriate error UI feedback
}
```

## Best Practices 👌

1. **Environment Variables**: Store sensitive data (API keys, integration IDs) in environment variables:
   ```typescript
   paymobApiKey: process.env.REACT_APP_PAYMOB_API_KEY,
   cardIntegrationId: process.env.REACT_APP_CARD_INTEGRATION_ID,
   ```

2. **Loading States**: Implement loading states while payment is processing:
   ```typescript
   const [isProcessing, setIsProcessing] = useState(false);

   const handlePayment = async () => {
     setIsProcessing(true);
     try {
       await startCardProcess({...});
     } catch (error) {
       console.error(error);
     } finally {
       setIsProcessing(false);
     }
   };
   ```

3. **Validation**: Validate all required fields before initiating payment:
   ```typescript
   if (!email || !phoneNumber) {
     throw new Error('Required fields missing');
   }
   ```

## Contributing 🤝

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License ⚖️

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support 💬

- 📫 For bugs and feature requests, open an issue on [GitHub](https://github.com/seifeldinio/paymob-react/issues)
- 💡 For questions and discussions, use the GitHub Discussions feature
- 📝 Check out our [Wiki](https://github.com/seifeldinio/paymob-react/wiki) for additional documentation

## Acknowledgments 🙏

- Thanks to all contributors who have helped shape this package
- Special thanks to the Paymob team for their excellent payment infrastructure