export interface Recipe {
  recipeId: number;
  recipeTitle: string;
  foodImageUrl: string;
  mediumImageUrl: string;
  nickname: string;
  pickup: number;
  rank: string;
  recipeCost: string;
  recipeDescription: string;
  recipeIndication: string;
  recipeMaterial: string[];
  recipePublishday: string;
  recipeUrl: string;
  shop: number;
  smallImageUrl: string;
}

export interface ApiResponse {
  result: Recipe[];
}
