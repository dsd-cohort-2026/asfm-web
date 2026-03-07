const { z } = require('zod');

const intakeTransactionSchema = z.object({
  body: z.strictObject({
    quantity: z.int().nonnegative(),
    status: z.enum(['COMPLETE']),
    notes: z.string(),
    foster_user: z.uuid().optional(),
    staff_user: z.uuid(),
    item_id: z.uuid().optional(),
    item_name: z.string().optional(),
    item_category: z.enum(['FOOD', 'MEDICINE', 'CRATE']).optional(),
    item_species: z.enum(['CAT', 'DOG']).optional(),
    item_unit: z.string().optional(),
    item_is_active: z.boolean().optional(),
    item_brand: z.string().optional(),
    item_description: z.string().optional(),
    item_food_life_stage: z.enum(['ADOLESCENT', 'ADULT', 'SENIOR']).optional(),
    item_crate_size: z.enum(['SMALL', 'MEDIUM', 'LARGE']).optional(),
    item_crate_status: z.enum(['LOANED', 'AVAILABLE', 'DAMAGED']).optional(),
    item_medication_dose: z.string().optional(),
    item_medication_side_effects: z.string().optional(),
    item_medication_administration_route: z.string().optional(),
    inventory_id: z.uuid().optional(),
    inventory_expiration_date: z.coerce.date().optional(),
  }),
  params: z.strictObject({}).optional(),
  query: z.strictObject({}).optional(),
});

module.exports = intakeTransactionSchema;
