// react
import { useState } from 'react';

// react-native
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

// expo-router
import { Stack } from 'expo-router';

// RTK query
import { apiSlice } from '@/lib/redux/api/apiSlice';
import { useDispatch } from 'react-redux';

// components
import Search from '../components/Search';
import Modal from '@/components/Modal';

// images
import profileImage from '@/assets/images/profile.jpg';
import ramen from '@/assets/images/ramen.png';
import SectionTitle from '@/components/SectionTitle';
import Section from '@/components/Section';

const Home = () => {
  // states
  const [modalIntroVisible, setModalIntroVisible] = useState(true);
  const [modalCreditsVisible, setModalCreditsVisible] = useState(false);
  const [refreshing, SetRefreshing] = useState(false);

  // redux
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      <Stack.Screen
        options={{
          headerTitle: 'レシピランキング',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: 'rgb(120,53,15)', fontWeight: 'bold' },
          headerStyle: { backgroundColor: 'rgb(255,247,237)' },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => setModalIntroVisible(true)}
              className="w-16 aspect-square"
            >
              <Image source={ramen} className="object-cover w-full h-full" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => setModalCreditsVisible(true)}>
              <View className="relative border-[1px] border-slate-500 w-12 aspect-square rounded-full overflow-hidden">
                <Image
                  source={profileImage}
                  className="object-cover w-full h-full"
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              SetRefreshing(true);
              dispatch(apiSlice.util.resetApiState());
              SetRefreshing(false);
            }}
          />
        }
      >
        <Modal
          visible={modalCreditsVisible}
          setModalVisible={setModalCreditsVisible}
          type="credits"
        />
        <Modal
          visible={modalIntroVisible}
          setModalVisible={setModalIntroVisible}
          type="intro"
        />
        <View className="mt-8">
          <SectionTitle title="最強のレシピを見つけましょう" />
          <Search />
        </View>
        <View className="flex-1">
          <Section title="トップレシピ" categoryId={0} />
          <Section title="肉レシピ" categoryId={31} />
          <Section title="魚レシピ" categoryId={32} />
          <Section title="卵レシピ" categoryId={33} />
          <Section title="サラダレシピ" categoryId={18} />
          <Section title="パンレシピ" categoryId={22} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
