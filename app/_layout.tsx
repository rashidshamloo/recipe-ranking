// react-native
import { I18nManager } from 'react-native';
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

// expo-router
import { Stack } from 'expo-router';

// provider
import Provider from '@/providers/Provider';

const Layout = () => {
  return (
    <Provider>
      <Stack />
    </Provider>
  );
};

export default Layout;
