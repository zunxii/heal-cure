import { useState } from 'react';
import { View, Button, Image, ActivityIndicator, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useVisionAPI } from '@/hooks/useVisionAPI';
import { useRouter } from 'expo-router';
import { generateEHR } from '@/utils/ehrGenerator';
import { useStore } from '@/store/useStore';

export default function UploadButton() {
  const { uploadImage, text } = useVisionAPI();
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setEHR } = useStore();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: false,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      setLoading(true);

      await uploadImage(uri);

      setLoading(false);

      if (text && text.length > 0) {
        const ehr = generateEHR(text);
        setEHR(JSON.stringify(ehr)); // Save to global store
        router.push(`/ehr/${Date.now()}`); // Navigate to EHR with a unique id
      } else {
        Alert.alert('No text found in image.');
      }
    }
  };

  return (
    <View className="items-center">
      <Button title="Select Image" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginTop: 16, borderRadius: 8 }}
        />
      )}
      {loading && <ActivityIndicator size="large" color="#007AFF" className="mt-4" />}
    </View>
  );
}
