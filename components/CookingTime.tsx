// react-native
import { View, Text } from 'react-native';

// icons
import { FontAwesome } from '@expo/vector-icons';

const CookingTime = ({ time }: { time: string }) => {
  return (
    <View className="flex-row absolute right-[6px] top-[6px] bg-white/70 rounded-md px-2 py-1 min-w-[70px]">
      <FontAwesome name="clock-o" size={20} color="rgba(69,26,3,0.8)" />
      <Text className="text-amber-950/80 ml-2 leading-[20px]">{time}</Text>
    </View>
  );
};

export default CookingTime;
