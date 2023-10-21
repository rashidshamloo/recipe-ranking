// react-native
import { View, ScrollView, SafeAreaView } from 'react-native';

// expo-router
import { Stack, useGlobalSearchParams } from 'expo-router';

// RTK query
import { useGetRecipeQuery } from '@/lib/redux/api/apiSlice';

// components
import MoreRecipesCard from '@/components/MoreRecipesCard';

const Recipe = () => {
  const params = useGlobalSearchParams();
  if (!params.categoryId) console.log('no params in more');
  const [categoryId, title] = (params.categoryId as string).split('-');
  const { data: recipes } = useGetRecipeQuery(Number(categoryId));
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      <Stack.Screen
        options={{
          headerTitle: title.length > 12 ? title.slice(0, 11) + '...' : title,
          headerTitleAlign: 'center',
          headerTitleStyle: { color: 'rgb(120,53,15)', fontWeight: 'bold' },
          headerStyle: { backgroundColor: 'rgb(255,247,237)' },
          headerTintColor: 'rgb(120,53,15)',
          headerShadowVisible: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false} className="gap-8">
        <View className="flex-1 p-2">
          {recipes.map((recipe, i) => (
            <MoreRecipesCard
              key={i}
              recipe={recipe}
              categoryId={Number(categoryId)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipe;
