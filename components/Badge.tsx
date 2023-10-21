// react
import { PropsWithChildren } from 'react';

// react-native
import { View, Text } from 'react-native';

// icons
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

// types
interface BadgeProps extends PropsWithChildren {
  icon: 'clock' | 'money' | 'crown';
}

const Badge = ({ icon, children }: BadgeProps) => {
  let name: string;
  switch (icon) {
    case 'clock':
      name = 'clock-o';
      break;
    case 'money':
      name = 'yen';
      break;
    case 'crown':
    default:
      name = 'crown';
      break;
  }
  return (
    <View className="flex-row justify-center items-center bg-orange-300/80 rounded-lg px-3 py-1">
      <View>
        {name === 'crown' ? (
          <FontAwesome5 name={name} size={16} color="rgb(120,53,15)" />
        ) : (
          <FontAwesome
            name={name as 'clock-o' | 'yen'}
            size={20}
            color="rgb(120,53,15)"
          />
        )}
      </View>
      <Text className="leading-[20px] text-amber-950 ml-2">{children}</Text>
    </View>
  );
};

export default Badge;
