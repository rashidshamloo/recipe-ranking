// react-native
import { Text, View, Image, TouchableOpacity } from 'react-native';

// components
import CookingTime from './CookingTime';

// expo-router
import { useRouter } from 'expo-router';

// types
import { Recipe } from '@/types/types';
interface RecipeCardProps {
  recipe: Recipe;
  categoryId: number;
}

const RecipeCard = ({ recipe, categoryId }: RecipeCardProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/recipe/${recipe.recipeId}-${categoryId}`)}
      activeOpacity={1}
    >
      <View className="w-[180px]">
        <View className="w-full h-[200px]">
          <Image
            source={{ uri: recipe.foodImageUrl + '?thum=51' }}
            className="w-full h-full object-cover rounded-xl object-center"
          />
          <CookingTime time={recipe.recipeIndication} />
        </View>
        <Text className="px-2 text-center mt-1 text-amber-900">
          {recipe.recipeTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
