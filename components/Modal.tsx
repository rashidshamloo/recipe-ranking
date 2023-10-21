// react-native
import { View, TouchableOpacity, Modal as M } from 'react-native';

// components
import ModalCredits from './ModalCredits';
import ModalIntro from './ModalIntro';

// icons
import { AntDesign } from '@expo/vector-icons';

// types
interface ModalProps {
  visible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  type: 'credits' | 'intro';
}

const Modal = ({ visible, setModalVisible, type }: ModalProps) => {
  return (
    <M animationType="fade" transparent={true} visible={visible}>
      <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center bg-black/50">
        <View className="bg-white/90 rounded-lg px-4 py-16 w-[90%] min-h-[50%] items-center justify-start">
          {type === 'credits' && <ModalCredits />}
          {type === 'intro' && <ModalIntro />}
          <TouchableOpacity
            onPress={() => setModalVisible(!visible)}
            className="absolute top-4 right-4"
          >
            <AntDesign name="closesquare" size={24} color="rgb(120,53,15)" />
          </TouchableOpacity>
        </View>
      </View>
    </M>
  );
};

export default Modal;
