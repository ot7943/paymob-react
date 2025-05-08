export interface Address {
  apartment: string;
  floor: string;
  street: string;
  building: string;
  postal_code: string;
  city: string;
  country: string;
  state: string;
}

export interface PaymentDetails {
  amount: number;
  currency: string;
  courseTitle: string;
  courseDescription: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userId: number;
  courseId: number;
  paymobApiKey: string;
}

export interface CardPaymentDetails extends PaymentDetails {
  cardIntegrationId: number;
  iframeId: number;
}

export interface WalletPaymentDetails extends PaymentDetails {
  walletIntegrationId: number;
  iframeId: number;
  mobileNumber: string;
}