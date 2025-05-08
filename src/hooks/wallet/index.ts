import { WalletPaymentDetails } from "@/types";
import { getAuthToken, createOrder, getFinalToken } from "@/utils/payment-utils";

export const startWalletProcess = async ({
  amount,
  currency,
  courseTitle,
  courseDescription,
  firstName,
  lastName,
  email,
  phoneNumber,
  userId,
  courseId,
  paymobApiKey,
  walletIntegrationId,
  iframeId,
  mobileNumber,
}: WalletPaymentDetails): Promise<void> => {
  try {
    const token = await getAuthToken(paymobApiKey);

    if (token) {
      const orderId = await createOrder({
        token,
        amount,
        currency,
        name: courseTitle,
        description: courseDescription,
        quantity: "1",
        email,
        phoneNumber,
        address: {
          apartment: "803",
          floor: "42",
          street: "Ethan Land",
          building: "8028",
          postal_code: "01898",
          city: "Jaskolskiburgh",
          country: "CR",
          state: "Utah",
        },
      });

      if (orderId) {
        const finalToken = await getFinalToken({
          token,
          orderId,
          amount,
          currency,
          email,
          phoneNumber,
          cardIntegrationId: walletIntegrationId.toString(),
          address: {
            apartment: "803",
            floor: "42",
            street: "Ethan Land",
            building: "8028",
            postal_code: "01898",
            city: "Jaskolskiburgh",
            country: "CR",
            state: "Utah",
          },
          city: "Jaskolskiburgh",
        });

        if (finalToken) {
          const response = await fetch(
            "https://accept.paymob.com/api/acceptance/payments/pay",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                source: {
                  identifier: mobileNumber,
                  subtype: "WALLET",
                },
                payment_token: finalToken,
              }),
            }
          );

          const data = await response.json();
          if (data.redirect_url) {
            location.href = data.redirect_url;
          }
        }
      }
    }
  } catch (error) {
    console.error("Error in wallet payment process:", error);
    throw error;
  }
};