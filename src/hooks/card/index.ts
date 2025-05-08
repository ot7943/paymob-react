import { CardPaymentDetails } from "@/types";
import { getAuthToken, createOrder, getFinalToken } from "@/utils/payment-utils";

export const startCardProcess = async ({
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
  cardIntegrationId,
  iframeId,
}: CardPaymentDetails): Promise<void> => {
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
          cardIntegrationId: cardIntegrationId.toString(),
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
          const iframeURL = `https://accept.paymob.com/api/acceptance/iframes/${iframeId}?payment_token=${finalToken}`;
          location.href = iframeURL;
        }
      }
    }
  } catch (error) {
    console.error("Error in card payment process:", error);
    throw error;
  }
};