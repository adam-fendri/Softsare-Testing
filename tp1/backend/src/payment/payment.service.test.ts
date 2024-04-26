import { describe, it, test } from 'vitest';
import { PaymentService } from './payment.service';

describe('PaymentService - calculateAmount()', () => {
  it('should calculate the total amount correctly', async (t) => {
    ///
    const paymentService = new PaymentService();

    const paymentRequestBody = {
      shipping_fee: 7,
      total_amount: 99,
    };

    ///
    const totalAmount = paymentService.calculateAmount(paymentRequestBody);

    ///
    t.expect(totalAmount).toBe(106);
  });
});
