// react
import { useState } from 'react';

// react-native
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';

// expo-router
import { Stack, useGlobalSearchParams } from 'expo-router';

// RTK query
import { useGetRecipeQuery } from '@/lib/redux/api/apiSlice';

// components
import Badge from '@/components/Badge';

// icons
import { Entypo } from '@expo/vector-icons';

const Recipe = () => {
  const [imageIsLoading, setImageIsLoading] = useState(false);

  const params = useGlobalSearchParams();
  const [id, categoryId] = (params.id as string).split('-');
  const { data: recipes } = useGetRecipeQuery(Number(categoryId));
  const recipe =
    recipes && recipes.length > 0
      ? recipes.find((r) => r.recipeId === Number(id))
      : undefined;
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      <Stack.Screen
        options={{
          headerTitle:
            recipe.recipeTitle.length > 12
              ? recipe.recipeTitle.slice(0, 11) + '...'
              : recipe.recipeTitle,
          headerTitleAlign: 'center',
          headerTitleStyle: { color: 'rgb(120,53,15)', fontWeight: 'bold' },
          headerStyle: { backgroundColor: 'rgb(255,247,237)' },
          headerTintColor: 'rgb(120,53,15)',
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity onPress={() => Linking.openURL(recipe.recipeUrl)}>
              <Entypo
                name="share-alternative"
                size={24}
                color="rgb(120,53,15)"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 pb-2">
          <View>
            <Image
              source={{ uri: recipe.foodImageUrl }}
              className="w-full aspect-square"
              onLoadStart={() => setImageIsLoading(true)}
              onLoadEnd={() => setImageIsLoading(false)}
            />
            {imageIsLoading && (
              <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center">
                <ActivityIndicator size={24} color="rgb(120,53,15)" />
              </View>
            )}
          </View>
          <View className="rounded-tl-3xl rounded-tr-3xl -mt-8 bg-orange-50">
            <View className="w-[25%] mx-auto bg-black/10 h-1 mt-2 rounded-full"></View>
            <View className="flex-row mt-3 justify-between mx-4">
              <Badge icon="clock">{recipe.recipeIndication}</Badge>
              <Badge icon="crown">{recipe.rank}</Badge>
              <Badge icon="money">{recipe.recipeCost}</Badge>
            </View>
            <Text className="font-bold text-lg text-center text-amber-900 mx-8 mt-6">
              {recipe.recipeTitle}
            </Text>
            <Text className="mx-2 font-bold text-amber-900 text-[17px] mt-4">
              ポイント
            </Text>
            <View className="bg-orange-300/70 mx-2 rounded-lg px-4 py-2 mt-2">
              <Text className="text-amber-900">{recipe.recipeDescription}</Text>
            </View>
            <Text className="mx-2 font-bold text-amber-900 text-[17px] mb-2 mt-4">
              材料
            </Text>
            {recipe.recipeMaterial.map((m, i) => (
              <View
                key={i}
                className={
                  'mx-2 p-2 rounded-lg ' + (i % 2 ? '' : 'bg-orange-300/70')
                }
              >
                <Text
                  className={
                    'text-amber-900 ' + (m.includes('＜') ? 'font-bold' : '')
                  }
                >
                  {m}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipe;
