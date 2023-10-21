// react-native
import { View, TextInput } from 'react-native';

// icons
import { SimpleLineIcons } from '@expo/vector-icons';

const Search = () => {
  return (
    <View className="rounded-full bg-orange-200/50 pl-12 pr-4 py-2 mx-2 mb-8">
      <TextInput
        placeholder="料理名・素材でさがす"
        placeholderTextColor="rgb(120,53,15)"
      />
      <View className="absolute left-4 top-0 bottom-0 justify-center items-center">
        <SimpleLineIcons name="magnifier" size={18} color="rgb(120,53,15)" />
      </View>
    </View>
  );
};

export default Search;
