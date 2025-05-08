import React, { useState } from 'react';
import { startCardProcess, startWalletProcess } from 'paymob-react';
import { RadioGroup } from '@headlessui/react';
import { CreditCardIcon, WalletIcon } from '@heroicons/react/24/outline';

const paymentMethods = [
  { id: 'card', title: 'Credit Card', icon: CreditCardIcon },
  { id: 'wallet', title: 'Mobile Wallet', icon: WalletIcon },
];

export default function App() {
  const [selected, setSelected] = useState(paymentMethods[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    setLoading(true);
    setError('');

    try {
      const commonParams = {
        amount: 1000,
        currency: "EGP",
        courseTitle: "Premium Course",
        courseDescription: "Complete Web Development Course",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "+201234567890",
        userId: 12345,
        courseId: 67890,
        paymobApiKey: import.meta.env.VITE_PAYMOB_API_KEY,
      };

      if (selected.id === 'card') {
        await startCardProcess({
          ...commonParams,
          cardIntegrationId: Number(import.meta.env.VITE_CARD_INTEGRATION_ID),
          iframeId: Number(import.meta.env.VITE_IFRAME_ID),
        });
      } else {
        await startWalletProcess({
          ...commonParams,
          walletIntegrationId: Number(import.meta.env.VITE_WALLET_INTEGRATION_ID),
          iframeId: Number(import.meta.env.VITE_IFRAME_ID),
          mobileNumber: "01234567890",
        });
      }
    } catch (err) {
      setError('Payment process failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Premium Course Checkout
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Complete Web Development Course
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="text-lg font-medium text-gray-900">
                  Payment Method
                </RadioGroup.Label>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <RadioGroup.Option
                      key={method.id}
                      value={method}
                      className={({ checked }) =>
                        `${checked ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900'}
                        relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                      }
                    >
                      {({ checked }) => (
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={`font-medium ${
                                  checked ? 'text-white' : 'text-gray-900'
                                }`}
                              >
                                {method.title}
                              </RadioGroup.Label>
                            </div>
                          </div>
                          <method.icon 
                            className={`h-6 w-6 ${
                              checked ? 'text-white' : 'text-gray-400'
                            }`}
                          />
                        </div>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div>
              <div className="rounded-md bg-gray-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CreditCardIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-800">
                      Payment Details
                    </h3>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>Amount: 10.00 EGP</p>
                      <p>Course: Premium Web Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Error
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>{error}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={handlePayment}
              disabled={loading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}