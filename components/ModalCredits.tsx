// react-native
import { Text, TouchableOpacity, Linking } from 'react-native';

const ModalCredits = () => {
  return (
    <>
      <Text className="font-bold text-amber-900 text-lg">開発者</Text>
      <Text className="font-bold text-amber-700 text-2xl">シャムル ラシド</Text>
      <Text className="font-bold text-amber-900 text-lg mt-8">
        Developed by
      </Text>
      <Text className="font-bold text-amber-700 text-2xl">Rashid Shamloo</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.rashidshamloo.com')}
        className="mt-10"
      >
        <Text className="font-bold text-amber-900 underline text-lg">
          rashidshamloo.com
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://github.com/rashidshamloo')}
        className="mt-2"
      >
        <Text className="font-bold text-amber-900 underline text-lg">
          github.com/rashidshamloo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://webservice.rakuten.co.jp/documentation/recipe-category-ranking'
          )
        }
        className="mt-10"
      >
        <Text className="font-bold text-amber-900 underline text-lg">
          楽天レシピAPI
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ModalCredits;
