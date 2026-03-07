const { z } = require('zod');

const distributeTransactionSchema = z.object({
  body: z.strictObject({
    quantity: z.int().nonnegative(),
    type: z.enum(['LOAN', 'DISTRIBUTION']),
    status: z.enum(['ACTIVE', 'COMPLETE']),
    notes: z.string(),
    foster_user: z.uuid(),
    staff_user: z.uuid(),
    item_id: z.uuid(),
  }),
  params: z.strictObject({}).optional(),
  query: z.strictObject({}).optional(),
});

module.exports = distributeTransactionSchema;
