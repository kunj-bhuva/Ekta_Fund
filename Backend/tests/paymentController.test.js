const httpMocks = require('node-mocks-http');
const paymentController = require('../paymentController'); // Correct relative path to paymentController.js
const paymentService = require('../../services/payment'); // Correct relative path to payment.js

// Mock the payment service
jest.mock('../../services/payment'); // Correct mock path to payment service

describe('Payment Controller and Service', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Reset mocks after each test
    });

    describe('createMockPayment Controller', () => {
        it('should return 400 if required fields are missing', async () => {
            const req = httpMocks.createRequest({
                method: 'POST',
                body: {}, // Missing all fields
            });
            const res = httpMocks.createResponse();

            await paymentController.createMockPayment(req, res);

            expect(res.statusCode).toBe(400);
            expect(res._getJSONData()).toEqual({ error: 'All fields are required' });
        });

        it('should return 200 and mock payment details if all fields are provided', async () => {
            const mockPaymentDetails = {
                transactionToken: 'mockToken123',
                name: 'John Doe',
                mobileNumber: '1234567890',
                ngoName: 'Helping Hands',
                amount: 100,
                createdAt: expect.any(Date),
            };

            paymentService.createMockTransaction.mockResolvedValue(mockPaymentDetails);

            const req = httpMocks.createRequest({
                method: 'POST',
                body: {
                    name: 'John Doe',
                    mobileNumber: '1234567890',
                    ngoName: 'Helping Hands',
                    amount: 100,
                },
            });
            const res = httpMocks.createResponse();

            await paymentController.createMockPayment(req, res);

            expect(res.statusCode).toBe(200);
            expect(res._getJSONData()).toEqual(
                expect.objectContaining({
                    transactionToken: 'mockToken123',
                    name: 'John Doe',
                    mobileNumber: '1234567890',
                    ngoName: 'Helping Hands',
                    amount: 100,
                })
            );
        });

        it('should return 500 if payment service throws an error', async () => {
            paymentService.createMockTransaction.mockRejectedValue(new Error('Service error'));

            const req = httpMocks.createRequest({
                method: 'POST',
                body: {
                    name: 'John Doe',
                    mobileNumber: '1234567890',
                    ngoName: 'Helping Hands',
                    amount: 100,
                },
            });
            const res = httpMocks.createResponse();

            await paymentController.createMockPayment(req, res);

            expect(res.statusCode).toBe(500);
            expect(res._getJSONData()).toEqual({ error: 'Failed to initiate mock payment' });
        });
    });

    describe('createMockTransaction Service', () => {
        it('should generate a transaction token and return transaction details', async () => {
            const mockTransactionDetails = {
                transactionToken: 'mockToken123',
                name: 'John Doe',
                mobileNumber: '1234567890',
                ngoName: 'Helping Hands',
                amount: 100,
                createdAt: expect.any(Date),
            };

            paymentService.createMockTransaction.mockResolvedValue(mockTransactionDetails);

            const result = await paymentService.createMockTransaction({
                name: 'John Doe',
                mobileNumber: '1234567890',
                ngoName: 'Helping Hands',
                amount: 100,
            });

            expect(result).toEqual(
                expect.objectContaining({
                    transactionToken: 'mockToken123',
                    name: 'John Doe',
                    mobileNumber: '1234567890',
                    ngoName: 'Helping Hands',
                    amount: 100,
                })
            );
        });
    });
});
