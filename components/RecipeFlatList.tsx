// react-native
import { FlatList } from 'react-native';

// components
import RecipeCard from './RecipeCard';

// types
import { Recipe } from '@/types/types';

interface RecipeFlatListProps {
  recipes: Recipe[];
  categoryId: number;
}
const RecipeFlatList = ({ recipes, categoryId }: RecipeFlatListProps) => {
  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => (
        <RecipeCard recipe={item} categoryId={categoryId} />
      )}
      keyExtractor={(item) => String(item?.recipeId)}
      contentContainerStyle={{ columnGap: 10, padding: 10 }}
      horizontal
    />
  );
};

export default RecipeFlatList;
