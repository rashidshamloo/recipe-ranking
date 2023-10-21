// react-native
import { View, Text, TouchableOpacity } from 'react-native';

// expo-router
import { useRouter } from 'expo-router';

// icons
import { Ionicons } from '@expo/vector-icons';

// types
interface SectionTitleProps {
  title: string;
  categoryId?: number;
  link?: string;
}

const SectionTitle = ({ title, categoryId, link }: SectionTitleProps) => {
  const router = useRouter();
  return (
    <View className="justify-between flex-row mx-2 items-start">
      <Text className="text-amber-900 font-bold text-lg mb-2">{title}</Text>
      {link && (
        <TouchableOpacity
          onPress={() => router.push(`/more/${categoryId}-${title}`)}
          className="flex-row gap-1 justify-center items-center"
        >
          <Text className="text-amber-900 font-bold leading-[22px]">
            もっと見る
          </Text>
          <Ionicons
            name="ios-arrow-forward-circle"
            size={22}
            color="rgb(120,53,15)"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionTitle;
