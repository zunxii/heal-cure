import { Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useVisionAPI } from '@/hooks/useVisionAPI';
export default function UploadButton() {
  const { uploadImage } = useVisionAPI();
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.canceled) {
      await uploadImage(result.assets[0].uri);
    }
  };
  return <Button title="Select Image" onPress={pickImage} />;
}
