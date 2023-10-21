// react-native
import { View, Text, ActivityIndicator } from 'react-native';

// RTK query
import { useGetRecipeQuery } from '@/lib/redux/api/apiSlice';

// components
import SectionTitle from './SectionTitle';
import RecipeFlatList from './RecipeFlatList';

// types
interface SectionProps {
  title: string;
  categoryId?: number;
}

const Section = ({ title, categoryId }: SectionProps) => {
  const {
    data: recipes,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetRecipeQuery(categoryId || 0);
  return (
    <View className="my-2">
      {isLoading ? (
        <ActivityIndicator size={24} color="rgb(120,53,15)" />
      ) : isError ? (
        <Text>{(error as any).data || 'ネットワークエラー'}</Text>
      ) : (
        isSuccess && (
          <>
            <SectionTitle title={title} link="#" categoryId={categoryId} />
            <RecipeFlatList recipes={recipes} categoryId={categoryId} />
          </>
        )
      )}
    </View>
  );
};

export default Section;
