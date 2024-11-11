import { z } from 'zod';

export const recipeSchema = z.object({
  recipes: z.array(
    z.object({
      dishName: z.string().describe('Name of dish.'),
      referenceSites: z.string().describe('Recipe reference sites.'),
    }),
  ),
});
