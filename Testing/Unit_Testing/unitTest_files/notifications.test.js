const nodemailer = require('nodemailer');
const { sendNotification } = require('../notifications'); // Adjust import path

// Mock nodemailer
jest.mock('nodemailer');

describe('sendNotification', () => {
  let sendMailMock;

  beforeAll(() => {
    // Mock sendMail function to simulate sending an email
    sendMailMock = jest.fn().mockResolvedValue(true); // Simulate a successful email send
    // Mock the createTransport method to return an object with sendMail function
    nodemailer.createTransport.mockReturnValue({
      sendMail: sendMailMock, // Return mocked sendMail function
    });
  });

  afterEach(() => {
    sendMailMock.mockClear(); // Clear mock data after each test
  });

  it('should send a notification email with valid data', async () => {
    const email = 'test@example.com';
    const subject = 'Test Subject';
    const message = 'This is a test message';

    await sendNotification(email, subject, message);

    // Assert sendMail was called once with the correct parameters
    expect(sendMailMock).toHaveBeenCalledTimes(1);
    expect(sendMailMock).toHaveBeenCalledWith({
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: message,
    });
  });

  it('should handle failure when email sending fails', async () => {
    sendMailMock.mockRejectedValue(new Error('Email send failed'));
    const email = 'test@example.com';
    const subject = 'Test Subject';
    const message = 'This is a test message';

    await expect(sendNotification(email, subject, message))
      .rejects
      .toThrow('Email send failed');
  });

  it('should throw an error if the email is not provided', async () => {
    const subject = 'Test Subject';
    const message = 'This is a test message';

    await expect(sendNotification(null, subject, message))
      .rejects
      .toThrow('Email is required');
  });

  it('should throw an error if the subject is not provided', async () => {
    const email = 'test@example.com';
    const message = 'This is a test message';

    await expect(sendNotification(email, null, message))
      .rejects
      .toThrow('Subject is required');
  });

  it('should throw an error if the message is not provided', async () => {
    const email = 'test@example.com';
    const subject = 'Test Subject';

    await expect(sendNotification(email, subject, null))
      .rejects
      .toThrow('Message is required');
  });
});
