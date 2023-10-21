// react-native
import { Text, View, Image, TouchableOpacity } from 'react-native';

// components
import CookingTime from './CookingTime';

// expo-router
import { useRouter } from 'expo-router';

// types
import { Recipe } from '@/types/types';
interface MoreRecipesCardProps {
  recipe: Recipe;
  categoryId: number;
}

const MoreRecipes = ({ recipe, categoryId }: MoreRecipesCardProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.replace(`/recipe/${recipe.recipeId}-${categoryId}`)}
      activeOpacity={1}
    >
      <View className="py-1">
        <View className="w-full aspect-[2]">
          <Image
            source={{ uri: recipe.foodImageUrl + '?thum=51' }}
            className="w-full h-full object-cover rounded-xl object-center"
          />
          <CookingTime time={recipe.recipeIndication} />
          <View className="absolute bottom-2 left-2 right-2 rounded-lg px-2 py-1 bg-white/70">
            <Text className="font-bold text-center text-lg text-amber-950/80">
              {recipe.recipeTitle}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MoreRecipes;
