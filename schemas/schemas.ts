// zod
import { z } from 'zod';

export const ApiResponseSchema = z.object({
  result: z.array(
    z.object({
      recipeId: z.number(),
      recipeTitle: z.string(),
      foodImageUrl: z.string(),
      mediumImageUrl: z.string(),
      nickname: z.string(),
      pickup: z.number(),
      rank: z.string(),
      recipeCost: z.string(),
      recipeDescription: z.string(),
      recipeIndication: z.string(),
      recipePublishday: z.string(),
      recipeMaterial: z.array(z.string()),
      recipeUrl: z.string(),
      shop: z.number(),
      smallImageUrl: z.string(),
    })
  ),
});
