import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useStore } from '@/store/useStore';
import React from 'react';

export default function EHRScreen() {
  const { id } = useLocalSearchParams();
  const { ehr } = useStore();

  const parsedEHR = ehr ? JSON.parse(ehr) : null;

  return (
    <ScrollView className="p-4">
      <Text className="text-2xl font-semibold mb-4">🩺 EHR Report #{id}</Text>
      {parsedEHR ? (
        <>
          <Text className="text-base mb-2">📄 Diagnosis: {parsedEHR.diagnosis}</Text>
          <Text className="text-base">🕒 Generated at: {parsedEHR.timestamp}</Text>
        </>
      ) : (
        <Text className="text-red-500">No EHR data found.</Text>
      )}
    </ScrollView>
  );
}
