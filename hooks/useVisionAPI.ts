import { useState } from 'react';
import * as FileSystem from 'expo-file-system';
import { VISION_API_KEY } from '@/constants';

export function useVisionAPI() {
  const [text, setText] = useState('');

  const uploadImage = async (uri: string) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });

      const body = {
        requests: [
          {
            image: { content: base64 },
            features: [{ type: 'TEXT_DETECTION' }],
          },
        ],
      };

      const res = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${VISION_API_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const json = await res.json();
      const extractedText = json.responses?.[0]?.fullTextAnnotation?.text || 'No text found';
      setText(extractedText);
    } catch (err) {
      console.error('Vision API Error:', err);
      setText('Failed to extract text.');
    }
  };

  return { text, uploadImage };
}
