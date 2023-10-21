// react-native
import { Text, TouchableOpacity, Linking, View } from 'react-native';

const ModalIntro = () => {
  return (
    <>
      <View className="flex-row justify-end">
        <Text className="font-bold text-amber-700 text-xl">
          レシピランキング
        </Text>
        <Text className="font-bold text-amber-900 text-lg">へようこそ！</Text>
      </View>
      <Text className="font-bold text-amber-700 text-xl mt-16">新着情報</Text>
      <Text className="font-bold text-amber-900 mt-4 text-center">
        現在使われているAPIがサーチ機能をサポートしないため、サーチ機能が動作していない。
      </Text>
      <Text className="font-bold text-amber-900 text-lg mt-16">開発者</Text>
      <Text className="font-bold text-amber-700 text-2xl">シャムル ラシド</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://github.com/rashidshamloo')}
        className="mt-2"
      >
        <Text className="font-bold text-amber-900 underline text-lg">
          github.com/rashidshamloo
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ModalIntro;
